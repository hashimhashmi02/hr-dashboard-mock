# HR Dashboard — UI Mock

A static, front-end-only mock of the HR Dashboard (AI-powered hiring & onboarding platform). Built for design review — **no backend, all data is hardcoded**.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript

## Pages
| Route | Description |
|-------|-------------|
| `/login` | Sign-in screen with demo credentials |
| `/dashboard` | Overview metrics, quick stats, hiring pipeline |
| `/jobs` | Job postings list with filters |
| `/candidates` | Candidate table with stage + match score |
| `/interviews` | Interview rounds with status summary |

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy
Push to GitHub and import the repo on [vercel.com/new](https://vercel.com/new). No env vars required — it builds and deploys as-is.

---
*Mock data lives in `app/lib/mock-data.ts`. Swap it out to reshape the demo.*
