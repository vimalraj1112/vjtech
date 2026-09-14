This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact Form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) to send messages to `vimalraj07145@gmail.com` — no backend needed on Vercel. See [`.env.example`](./.env.example).

### One-time setup (takes ~5 minutes)

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. **Add an Email Service** → choose a connector (e.g. Gmail) and connect your account → note the **Service ID**.
3. **Email Templates → New Template** → receiver email `vimalraj07145@gmail.com`, and add these template variables:
   `{{from_name}}`, `{{reply_to}}`, `{{subject}}`, `{{message}}`, `{{to_name}}`.
4. **Account → API Keys** → copy your **Public Key**.

### Add the three values

For local dev, create `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

For Vercel: **Project → Settings → Environment Variables** and add the same three `NEXT_PUBLIC_*` variables, then redeploy.

Free tier allows ~200 emails/month — enough for a personal portfolio.
