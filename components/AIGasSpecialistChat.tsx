"use client";

import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { COMPANY_PHONE, STARTER_PROMPTS, WELCOME_MESSAGE } from "@/lib/ai-gas-specialist";

type Role = "u" | "a";

type ChatMessage = {
  r: Role;
  t: string;
};

type Palette = {
  primary: string;
  secondary: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
  white: string;
};

type Props = {
  colors: Palette;
  radius?: number;
  launcherBottom?: number;
  launcherRight?: number;
  panelHeight?: number;
};

export default function AIGasSpecialistChat({
  colors,
  radius = 12,
  launcherBottom = 78,
  launcherRight = 20,
  panelHeight = 520,
}: Props) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const ensureWelcome = useCallback(() => {
    setMessages((current) => (current.length ? current : [{ r: "a", t: WELCOME_MESSAGE }]));
  }, []);

  const handleOpenToggle = () => {
    if (!open) {
      ensureWelcome();
    }
    setOpen((current) => !current);
  };

  const sendMessage = useCallback(
    async (override?: string, historyOverride?: ChatMessage[]) => {
      const text = (override ?? input).trim();
      if (!text || loading) {
        return;
      }

      const priorHistory = historyOverride ?? messages;
      const nextUserMessage: ChatMessage = { r: "u", t: text };
      const nextHistory = [...priorHistory, nextUserMessage];
      setMessages(nextHistory);
      setInput("");
      setLoading(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text, history: priorHistory }),
        });

        const data = await response.json().catch(() => ({}));
        const reply = typeof data.reply === "string" && data.reply.trim()
          ? data.reply.trim()
          : `The assistant is temporarily unavailable. Please try again in a moment or call ${COMPANY_PHONE}.`;

        setMessages((current) => [...current, { r: "a", t: reply }]);
      } catch {
        setMessages((current) => [
          ...current,
          {
            r: "a",
            t: `The assistant is temporarily unavailable. Please try again in a moment or call ${COMPANY_PHONE}.`,
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [input, loading, messages],
  );

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  };

  const launchPrompt = (prompt: string) => {
    if (!open) {
      setOpen(true);
    }

    if (!messages.length) {
      const seededHistory: ChatMessage[] = [{ r: "a", t: WELCOME_MESSAGE }];
      setMessages(seededHistory);
      void sendMessage(prompt, seededHistory);
      return;
    }

    void sendMessage(prompt);
  };

  return (
    <>
      <button
        onClick={handleOpenToggle}
        aria-label={open ? "Close AI Gas Specialist" : "Open AI Gas Specialist"}
        style={{
          position: "fixed",
          bottom: launcherBottom,
          right: launcherRight,
          width: 52,
          height: 52,
          borderRadius: radius,
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 3px 12px rgba(26,60,26,0.2)",
          zIndex: 998,
          cursor: "pointer",
        }}
      >
        {open ? <X size={20} color="#fff" /> : <Bot size={20} color="#fff" />}
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: launcherBottom + 58,
            right: launcherRight,
            width: 380,
            maxWidth: "calc(100vw - 32px)",
            height: panelHeight,
            maxHeight: "70vh",
            background: colors.white,
            borderRadius: radius,
            boxShadow: "0 6px 24px rgba(26,60,26,0.15)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            border: `1px solid ${colors.border}`,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "12px 16px",
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Bot size={18} color="#fff" />
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>AI Gas Specialist</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.75)" }}>
                Fuel engineering, conversion feasibility, and technical advisory
              </div>
            </div>
          </div>

          <div style={{ padding: "10px 12px", borderBottom: `1px solid ${colors.border}`, background: colors.surface }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 0.6, color: colors.muted, marginBottom: 8 }}>
              QUICK START
            </div>
            <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 2 }}>
              {STARTER_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => launchPrompt(prompt)}
                  style={{
                    flex: "0 0 auto",
                    padding: "7px 10px",
                    borderRadius: radius,
                    border: `1px solid ${colors.border}`,
                    background: colors.white,
                    color: colors.text,
                    fontSize: 11,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: 12, background: colors.white }}>
            {messages.map((message, index) => (
              <div
                key={`${message.r}-${index}`}
                style={{
                  display: "flex",
                  justifyContent: message.r === "u" ? "flex-end" : "flex-start",
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    maxWidth: "86%",
                    padding: "10px 13px",
                    borderRadius:
                      message.r === "u"
                        ? `${radius}px ${radius}px 2px ${radius}px`
                        : `${radius}px ${radius}px ${radius}px 2px`,
                    background: message.r === "u" ? colors.secondary : colors.surface,
                    color: message.r === "u" ? "#fff" : colors.text,
                    fontSize: 13,
                    lineHeight: 1.6,
                    whiteSpace: "pre-wrap",
                    border: message.r === "u" ? "none" : `1px solid ${colors.border}`,
                  }}
                >
                  {message.t}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: "flex", gap: 4, padding: 8 }}>
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: colors.primary,
                      animation: `pdot 1s ${index * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div style={{ padding: "9px 12px", borderTop: `1px solid ${colors.border}`, background: colors.white }}>
            <div style={{ fontSize: 10, color: colors.muted, lineHeight: 1.5, marginBottom: 8 }}>
              Advisory guidance only. Final engineering, commercial, and regulatory decisions require on-site equipment assessment and qualified implementation.
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask about fuel options, conversion specs, or costs..."
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  borderRadius: radius,
                  border: `1px solid ${colors.border}`,
                  fontSize: 13,
                  color: colors.text,
                }}
              />
              <button
                onClick={() => void sendMessage()}
                disabled={!input.trim() || loading}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: radius,
                  border: "none",
                  background: input.trim() && !loading ? colors.secondary : colors.border,
                  cursor: input.trim() && !loading ? "pointer" : "default",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Send size={14} color="#fff" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
