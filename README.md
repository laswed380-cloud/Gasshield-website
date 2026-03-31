# Gas Shield Solutions — Deployable Website Package

This package contains the website files merged with the AI Gas Specialist integration.

## Included AI files
- `lib/ai-gas-specialist.ts` — specialist system prompt, welcome message, starter prompts, and company constants
- `components/AIGasSpecialistChat.tsx` — branded floating chat component
- `app/api/chat/route.ts` — secure server-side API route for Anthropic

## Before deployment
1. Copy `.env.example` to `.env.local`
2. Add your real `ANTHROPIC_API_KEY`
3. Make sure secrets stay server-side only

## Deploy on Vercel
1. Upload this project to GitHub
2. Import the repository into Vercel
3. Add environment variable `ANTHROPIC_API_KEY`
4. Deploy

## Production checks
- Open the site and verify branding is unchanged
- Open the AI Gas Specialist launcher
- Send a test question
- Confirm graceful fallback if the API key is missing or the AI provider fails
- Confirm the site still renders correctly on mobile and desktop

## Notes
- The logo and existing color palette were preserved
- The AI key is never exposed in frontend code
- The chat includes a disclaimer and starter prompts
"# Gasshield-website" 
