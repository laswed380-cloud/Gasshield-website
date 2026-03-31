# Claude AI Gas Specialist Integration Brief

This project already includes the AI Gas Specialist prompt file and website files merged together for deployment.

Key implementation files:
- `lib/ai-gas-specialist.ts`
- `components/AIGasSpecialistChat.tsx`
- `app/api/chat/route.ts`
- `app/page.tsx`

Non-negotiables:
- Keep existing logo unchanged.
- Keep existing brand colors unchanged.
- Preserve site identity and layout.
- Keep all secrets server-side only.
- Verify mobile behavior and fallback states.

Deployment checks:
- Add `ANTHROPIC_API_KEY` in Vercel.
- Confirm `/api/chat` returns a response.
- Confirm launcher opens and sends messages.
- Confirm site layout is unchanged.
