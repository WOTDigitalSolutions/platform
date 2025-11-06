# Tech Stack Decision - WOT Digital Solutions

**Phase:** 0 - Alignment
**Week:** 1
**Status:** Draft → Under Review

## Overview

This document evaluates and recommends the technology stack for WOT Digital Solutions' three-tier platform, considering performance, cost, developer experience, scalability, and African market requirements.

---

## Decision Criteria

### Primary Factors
1. **Performance:** Fast loading on 3G networks (common in Nigeria, Kenya, Ghana)
2. **Cost:** Minimize infrastructure costs (free tiers + pay-as-you-grow)
3. **Developer Velocity:** Rapid development with modern tooling
4. **Scalability:** Support 1 → 100+ clients without major refactoring
5. **African Market Fit:** Payment integrations, data residency options
6. **AI Integration:** Easy integration with Claude/OpenAI APIs
7. **Maintainability:** Long-term support, active community

### Secondary Factors
- Learning curve for team
- Hiring availability (if scaling team)
- Deployment simplicity
- Vendor lock-in risk

---

## Recommended Stack (The Winner)

### Frontend

**Next.js 14+ (App Router) + React 18+**

**Why Next.js?**
- ✅ **Server-Side Rendering (SSR):** Faster initial page loads (critical for SEO + slow networks)
- ✅ **Static Site Generation (SSG):** Pre-render pages at build time (ultra-fast)
- ✅ **Image Optimization:** Automatic image compression/lazy loading
- ✅ **API Routes:** Backend logic in same codebase (no separate API server needed initially)
- ✅ **File-Based Routing:** Intuitive, fast development
- ✅ **TypeScript Support:** Type safety reduces bugs
- ✅ **Vercel Deployment:** Zero-config deployment, free tier

**Alternatives Considered:**
- **Remix:** Great SSR, but smaller ecosystem than Next.js
- **SvelteKit:** Fast, but less mature, smaller job market
- **Astro:** Excellent for static sites, but less ideal for dashboards/auth
- ❌ **Verdict:** Next.js wins on maturity, ecosystem, and developer familiarity

**UI Framework:**
- **Tailwind CSS:** Utility-first, fast prototyping, excellent DX
- **Shadcn/ui (Radix UI + Tailwind):** Accessible, customizable components
- **Framer Motion:** Animations (optional, for polish)

---

### Backend

**Option A: Supabase (PostgreSQL + Auth + Storage + Realtime)**

**Why Supabase?**
- ✅ **All-in-One:** Database, Auth, Storage, Edge Functions in one platform
- ✅ **PostgreSQL:** Powerful, proven relational database
- ✅ **Row-Level Security (RLS):** Built-in multi-tenant security
- ✅ **Free Tier:** 500MB database, 1GB storage (sufficient for first 10-20 clients)
- ✅ **Real-Time Subscriptions:** For live dashboards (optional)
- ✅ **Open Source:** Can self-host if needed
- ✅ **TypeScript SDK:** Excellent DX with auto-generated types

**Considerations:**
- ⚠️ Data residency: Primary servers in US/EU (but expanding)
- ⚠️ Cold starts on free tier (acceptable for MVP)

**Cost at Scale:**
- Free: Up to 500MB DB, 1GB storage
- Pro ($25/month): 8GB DB, 100GB storage (supports ~50-100 clients)
- Team ($599/month): 100GB DB, 1TB storage (large network deployments)

---

**Option B: Firebase (Firestore + Auth + Storage + Functions)**

**Why Firebase?**
- ✅ **Google-Backed:** Mature, reliable, global CDN
- ✅ **NoSQL Firestore:** Flexible schema, auto-scaling
- ✅ **Firebase Auth:** Easy social login, email/password
- ✅ **Generous Free Tier:** 1GB storage, 10GB/month bandwidth
- ✅ **Realtime Database:** Built-in for live features
- ✅ **Google Cloud Run:** Serverless backend (if needed)

**Considerations:**
- ⚠️ NoSQL learning curve (if team prefers SQL)
- ⚠️ Complex queries harder than SQL
- ⚠️ Pricing can spike with high reads (but manageable with caching)

**Cost at Scale:**
- Free: 1GB storage, 10GB bandwidth/month
- Blaze (Pay-as-you-go): ~$5-20/month for 10-30 clients
- Scales automatically (no hard limits)

---

**Option C: NestJS + PostgreSQL (Self-Managed Backend)**

**Why NestJS?**
- ✅ **TypeScript-First:** Same language as frontend
- ✅ **Modular Architecture:** Clean, scalable codebase
- ✅ **Express/Fastify Under the Hood:** Flexible, familiar
- ✅ **GraphQL/REST:** Support both (we'd likely use REST)
- ✅ **Dependency Injection:** Professional, testable code

**Hosting Options:**
- Vercel (for serverless functions)
- Railway, Render (simple PaaS)
- AWS/GCP (more control, more complexity)

**Considerations:**
- ⚠️ More setup/maintenance vs Supabase/Firebase
- ⚠️ Need separate hosting for DB (Supabase Postgres, Neon, PlanetScale)
- ⚠️ More DevOps burden (migrations, backups, monitoring)

**Cost at Scale:**
- Railway/Render: $5-20/month (starter)
- Database (Neon, Supabase): $0-25/month
- Total: ~$10-50/month depending on traffic

---

### **RECOMMENDED BACKEND: Supabase**

**Rationale:**
1. **Speed to Market:** Supabase gets us live fastest (no backend setup)
2. **Cost:** Free tier supports Phase 1-2, scales affordably
3. **Features:** Auth, storage, RLS built-in (vs building from scratch)
4. **Developer Experience:** Excellent SDK, auto-generated types
5. **Future-Proof:** Open-source, can self-host if needed

**Fallback Plan:**
- If Supabase limitations emerge (rare), migrate to NestJS + Postgres (data portability via standard SQL)

---

### Payment Processing

**Stripe (International) + Flutterwave (Africa)**

**Stripe:**
- ✅ Industry standard, excellent docs
- ✅ Supports USD, EUR, GBP (international donors)
- ✅ Subscription billing (for maintenance packages)
- ✅ Webhooks for automation
- ⚠️ 2.9% + $0.30 per transaction (international)
- ⚠️ Payout delays to Nigerian accounts (consider Paystack)

**Flutterwave:**
- ✅ African payments (Naira, Cedis, Shillings)
- ✅ Mobile money (M-Pesa, MTN, Airtel)
- ✅ Lower fees in Africa (~1.4% + ₦100)
- ✅ Fast local payouts

**Alternative (Africa): Paystack**
- Similar to Flutterwave, Stripe-acquired
- Popular in Nigeria
- 1.5% + ₦100 per transaction

**Implementation Strategy:**
- **Phase 1:** Flutterwave (focus on Nigerian market)
- **Phase 2:** Add Stripe (if serving diaspora/international donors)
- **Phase 3:** Add Paystack as alternative (hedge against single provider issues)

---

### AI Services

**Anthropic Claude (Primary) + OpenAI (Fallback)**

**Claude API:**
- ✅ **Best for summarization/analysis:** Sermon summaries, report insights
- ✅ **Long context:** Up to 200K tokens (entire sermon transcripts)
- ✅ **Ethical AI:** Alignment with ministry values
- ✅ **Pricing:** $3/million input tokens, $15/million output (Claude 3.5 Sonnet)

**Use Cases:**
- Sermon summarization (Phase 2)
- Automated tagging (topics, scripture references)
- Report insights (Phase 3)
- Monthly summary generation (Phase 3)

**OpenAI (GPT-4 Turbo):**
- ✅ **Backup/alternative:** If Claude unavailable
- ✅ **Embeddings:** For semantic search (future feature)
- ⚠️ More expensive for long content

**Implementation:**
- Build AI abstraction layer (easy to swap providers)
- Rate limiting (avoid cost spikes)
- Caching (don't regenerate same summaries)

---

### CMS (Content Management)

**Sanity.io (Headless CMS)**

**Why Sanity?**
- ✅ **Flexible:** Custom schemas for sermons, events, resources
- ✅ **Real-Time:** Live editing preview
- ✅ **Free Tier:** Unlimited API requests, 3 users (sufficient for starter sites)
- ✅ **Media Handling:** Built-in image/video management
- ✅ **Developer-Friendly:** React-based Studio, portable content

**Alternatives:**
- **Contentful:** Similar, but more expensive
- **Strapi:** Self-hosted, more control, more maintenance
- **WordPress Headless:** Possible, but overkill

**Cost:**
- Free: 3 users, unlimited API requests
- Growth ($99/month): 10 users, advanced features (only for large networks)

---

### Media/File Storage

**Cloudinary (Free Tier) or Supabase Storage**

**Cloudinary:**
- ✅ Image/video optimization (auto-format, lazy loading)
- ✅ Generous free tier: 25GB storage, 25GB bandwidth/month
- ✅ CDN included
- ✅ Transformations on-the-fly (resize, crop, compress)

**Supabase Storage:**
- ✅ Integrated with Supabase (simpler setup)
- ✅ 1GB free (sufficient for text-heavy sites)
- ⚠️ Less optimization vs Cloudinary

**Recommendation:**
- **Phase 1:** Cloudinary (better media handling)
- **Phase 2-3:** Evaluate if Supabase Storage sufficient (reduce vendor count)

---

### Deployment & Hosting

**Vercel (Frontend) + Supabase (Backend)**

**Vercel:**
- ✅ **Zero-Config:** Deploy Next.js in seconds
- ✅ **Global CDN:** Fast everywhere (even Africa)
- ✅ **Free Tier:** Unlimited bandwidth for hobby projects
- ✅ **Preview Deployments:** Test before production
- ✅ **Automatic HTTPS**

**Alternatives:**
- **Netlify:** Similar to Vercel, slightly different features
- **Cloudflare Pages:** Fast CDN, generous free tier
- ❌ **Verdict:** Vercel best for Next.js (made by same team)

**Cost:**
- Free: Hobby projects, unlimited bandwidth
- Pro ($20/month): Custom domains, team collaboration, analytics
- Enterprise (variable): Advanced features, SLAs

---

### Email Services

**Resend (Transactional Email)**

**Why Resend?**
- ✅ **Developer-First:** React Email components (type-safe templates)
- ✅ **Free Tier:** 3,000 emails/month (sufficient for Phase 1-2)
- ✅ **Great Deliverability**
- ✅ **Simple API**

**Alternatives:**
- **SendGrid:** Mature, but more complex setup
- **Mailgun:** Reliable, but UI is dated
- **AWS SES:** Cheapest at scale, but setup complexity

**For Marketing Emails (Later):**
- **Mailchimp:** Free up to 500 contacts
- **ConvertKit:** Better for content creators
- **Brevo (Sendinblue):** Generous free tier

---

### Analytics & Monitoring

**Google Analytics 4 (User Analytics) + Sentry (Error Tracking)**

**Google Analytics 4:**
- ✅ Free, industry standard
- ✅ Event-based tracking (better than Universal Analytics)
- ⚠️ Cookie consent required (GDPR)

**Alternatives:**
- **Plausible/Fathom:** Privacy-friendly (no cookies), paid
- **PostHog:** Open-source, self-hostable, more features

**Sentry (Error Tracking):**
- ✅ Real-time error alerts
- ✅ Source maps for debugging
- ✅ Free tier: 5K errors/month

**Uptime Monitoring:**
- **UptimeRobot:** Free for 50 monitors
- **BetterUptime:** Better UI, free tier available

---

## Full Stack Summary

| Layer | Technology | Cost (Month 1-3) | Cost (Month 6-12) |
|-------|-----------|------------------|-------------------|
| **Frontend** | Next.js 14 + React | $0 (Vercel free) | $20 (Vercel Pro) |
| **Backend** | Supabase | $0 (free tier) | $25 (Pro tier) |
| **Database** | PostgreSQL (via Supabase) | $0 | $25 (included) |
| **Auth** | Supabase Auth | $0 | $25 (included) |
| **Storage** | Cloudinary | $0 (free tier) | $0-50 |
| **CMS** | Sanity.io | $0 (free tier) | $0-99 |
| **Payments** | Flutterwave | Per-transaction | Per-transaction |
| **AI** | Claude API | Pay-per-use (~$10) | ~$30-100 |
| **Email** | Resend | $0 (3K emails) | $0-20 |
| **Analytics** | GA4 + Sentry | $0 | $0-26 |
| **Monitoring** | UptimeRobot | $0 | $0 |
| **TOTAL** | | **~$10-20/month** | **~$150-300/month** |

---

## Development Tooling

### Code Quality
- **TypeScript:** Type safety
- **ESLint + Prettier:** Code formatting
- **Husky + lint-staged:** Pre-commit hooks

### Testing
- **Vitest:** Unit tests (faster than Jest)
- **Playwright:** E2E tests (Phase 2+)
- **React Testing Library:** Component tests

### CI/CD
- **GitHub Actions:** Automated tests + deployment
- **Vercel/Supabase:** Auto-deploy on push

### Project Management
- **Linear/GitHub Projects:** Issue tracking
- **Notion:** Documentation (this can live there too)
- **Figma:** Design mockups

---

## Migration Path (If Scaling Beyond Supabase)

**Scenario:** 100+ clients, complex queries, need more control

**Phase 1 → Phase 2 Migration:**
- Supabase → **NestJS + Neon Postgres**
- Data export: SQL dump (Supabase is standard Postgres)
- Rewrite API routes: Supabase SDK → NestJS controllers
- Estimated effort: 2-3 weeks (only if truly needed)

**Supabase will likely scale to 100+ clients** before migration needed.

---

## Final Recommendations

### ✅ Approved Stack

```typescript
{
  frontend: "Next.js 14 + React 18 + TypeScript",
  ui: "Tailwind CSS + Shadcn/ui",
  backend: "Supabase (PostgreSQL + Auth + Storage + Edge Functions)",
  cms: "Sanity.io",
  payments: "Flutterwave (primary) + Stripe (optional)",
  media: "Cloudinary",
  ai: "Anthropic Claude",
  email: "Resend",
  analytics: "Google Analytics 4 + Sentry",
  hosting: "Vercel (frontend) + Supabase (backend)",
  monitoring: "UptimeRobot + Sentry"
}
```

### Why This Stack Wins

1. **Fast to Market:** Can ship Phase 1 MVP in 3 weeks
2. **Cost-Effective:** ~$10-20/month for first 6 months
3. **Scalable:** Handles 1 → 100+ clients without rewrites
4. **Modern:** TypeScript, React 18, Server Components (cutting-edge)
5. **African Market Fit:** Flutterwave, Cloudinary CDN, mobile-first
6. **Developer Experience:** Excellent tooling, active communities
7. **Low Maintenance:** Managed services reduce DevOps burden

---

## Next Steps

### Week 1 (This Week)
- [x] Finalize tech stack decision
- [ ] Set up GitHub organization
- [ ] Create Vercel account (link to GitHub)
- [ ] Create Supabase project
- [ ] Create Sanity.io project
- [ ] Register domain (wotdigitalsolutions.com or similar)

### Week 2
- [ ] Initialize Next.js monorepo
- [ ] Set up Supabase schema (initial tables)
- [ ] Configure Tailwind + Shadcn/ui
- [ ] Set up CI/CD (GitHub Actions)
- [ ] Create design system foundation

---

## Decision Log

| Date | Decision | Rationale | Alternatives Considered |
|------|----------|-----------|------------------------|
| 2025-11-06 | Next.js for frontend | SSR, performance, ecosystem | Remix, SvelteKit, Astro |
| 2025-11-06 | Supabase for backend | Speed, features, cost | Firebase, NestJS |
| 2025-11-06 | Flutterwave primary payments | African market focus | Paystack, Stripe only |
| 2025-11-06 | Claude for AI | Long context, alignment | OpenAI GPT-4 |

---

**Last Updated:** 2025-11-06
**Owner:** Technical Lead
**Status:** ✅ Approved
**Review Date:** 2025-12-06 (1 month check-in)
