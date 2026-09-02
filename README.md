# Clip-Mart.com production starter
Run: `npm install`, copy `.env.example` to `.env`, configure PostgreSQL and Stripe test keys, then `npx prisma generate && npx prisma db push && npm run dev`.
Includes marketplace UI, Prisma schema, Stripe Connect onboarding, Checkout destination transfers, and 20% platform fee.
Before launch: authentication, private video storage, HLS transcoding, signed playback, Stripe webhooks, admin moderation, customer library, refunds/disputes, legal policies, production secrets and deployment.
