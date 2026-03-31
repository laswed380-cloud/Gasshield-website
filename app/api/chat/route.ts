import { NextRequest, NextResponse } from "next/server";
import { COMPANY_PHONE, SYSTEM_PROMPT } from "@/lib/ai-gas-specialist";

export const runtime = "nodejs";

type IncomingHistoryItem = {
  r?: "u" | "a";
  t?: string;
};

const FALLBACK_REPLY = `The assistant is temporarily unavailable. Please try again in a moment or call ${COMPANY_PHONE}.`;
const MISSING_KEY_REPLY = `Our AI Gas Specialist is being set up. Please call us directly at ${COMPANY_PHONE} for immediate help.`;

function normalizeHistory(history: unknown) {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .slice(-10)
    .flatMap((item) => {
      const typedItem = item as IncomingHistoryItem;
      if (typeof typedItem?.t !== "string" || !typedItem.t.trim()) {
        return [];
      }

      return [{
        role: typedItem.r === "u" ? "user" : "assistant",
        content: typedItem.t.trim().slice(0, 4000),
      }];
    });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!message) {
      return NextResponse.json({ error: "Message required" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ reply: MISSING_KEY_REPLY }, { status: 200 });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 800,
        system: SYSTEM_PROMPT,
        messages: [
          ...normalizeHistory(body?.history),
          { role: "user", content: message.slice(0, 4000) },
        ],
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ reply: FALLBACK_REPLY }, { status: 200 });
    }

    const data = await response.json().catch(() => null);
    const reply = typeof data?.content?.[0]?.text === "string" && data.content[0].text.trim()
      ? data.content[0].text.trim()
      : FALLBACK_REPLY;

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: FALLBACK_REPLY }, { status: 200 });
  }
}
