# Deployment Checklist

## Branding
- [ ] Logo unchanged
- [ ] Colors unchanged
- [ ] Main layout unchanged

## Chat
- [ ] AI launcher opens
- [ ] Welcome message appears
- [ ] Starter prompts work
- [ ] Input cannot send empty messages
- [ ] API failures show fallback message
- [ ] Disclaimer visible

## Backend
- [ ] `ANTHROPIC_API_KEY` added in Vercel
- [ ] `/api/chat` works server-side
- [ ] No API key exposed in frontend files

## Production
- [ ] Build runs successfully on Vercel
- [ ] Mobile chat fits screen
- [ ] Desktop chat fits screen
