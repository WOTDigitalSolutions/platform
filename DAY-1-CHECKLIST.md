# Day 1 Setup Checklist - WOT Digital Solutions

**Date:** 2025-11-06
**Goal:** Complete development environment + business foundations
**Time Estimate:** 3-4 hours

---

## ⏰ Timeline

- **10:00-12:00** → Development Environment (2 hours)
- **12:00-12:30** → Break
- **12:30-13:30** → Business Foundations (1 hour)
- **13:30-14:00** → Review & Plan Day 2

---

## Part 1: Development Environment (2 hours)

### Step 1: Install Xcode Command Line Tools ⏳
- [x] Run: `xcode-select --install`
- [ ] Click "Install" in dialog
- [ ] Wait ~10 minutes for installation
- [ ] Verify: `git --version` (should show git version)

**Status:** Installation in progress...

---

### Step 2: Initialize Git Repository ⏳
Once Xcode tools finish:

```bash
cd "/Users/revpremma/Documents/WOT Ministries/WOT Apps/WOT Digital Solutions"
git init
git config --local user.name "Rev. Premma"
git config --local user.email "your-email@example.com"  # Replace with your email
git add .
git commit -m "Initial commit: Phase 0 documentation complete"
```

**Checklist:**
- [ ] Git initialized
- [ ] User config set
- [ ] First commit created
- [ ] Run: `git log` (should show your commit)

---

### Step 3: Create GitHub Organization & Repository ⏳

**3a. Create Organization:**
1. [ ] Go to [github.com](https://github.com)
2. [ ] Click your profile (top right) → "Your organizations"
3. [ ] Click "New organization"
4. [ ] Choose "Free" plan
5. [ ] Organization name: **WOTDigitalSolutions**
6. [ ] Contact email: your-email@example.com
7. [ ] Click "Next" → "Complete setup"

**3b. Create Repository:**
1. [ ] In organization, click "New repository"
2. [ ] Repository name: **platform**
3. [ ] Description: "WOT Digital Solutions - Ministry platform (3-tier product suite)"
4. [ ] Visibility: **Private** (for now)
5. [ ] Do NOT initialize with README (we already have files)
6. [ ] Click "Create repository"

**3c. Push Local Code to GitHub:**
```bash
git remote add origin https://github.com/WOTDigitalSolutions/platform.git
git branch -M main
git push -u origin main
```

**Checklist:**
- [ ] Organization created: WOTDigitalSolutions
- [ ] Repository created: platform
- [ ] Code pushed to GitHub
- [ ] Visit repo URL, see all files

---

### Step 4: Set Up Vercel Account ⏳

1. [ ] Go to [vercel.com](https://vercel.com)
2. [ ] Click "Sign Up"
3. [ ] Choose "Continue with GitHub"
4. [ ] Authorize Vercel to access GitHub
5. [ ] On dashboard, click "Import Project" (or skip for now)
6. [ ] Note: We'll deploy in Week 2 when we have code

**Checklist:**
- [ ] Vercel account created
- [ ] GitHub connected
- [ ] Can see WOTDigitalSolutions organization

---

### Step 5: Create Supabase Project ⏳

1. [ ] Go to [supabase.com](https://supabase.com)
2. [ ] Click "Start your project" → "Sign in with GitHub"
3. [ ] Authorize Supabase
4. [ ] Click "New project"
5. [ ] Organization: Create new → "WOT Digital Solutions"
6. [ ] Project name: **wot-digital-platform**
7. [ ] Database Password: (Generate strong password, SAVE IT!)
8. [ ] Region: **West EU (Ireland)** or **South Africa** (closest to Nigeria)
9. [ ] Pricing Plan: **Free** (for now)
10. [ ] Click "Create new project" (takes ~2 minutes)

**Save These Credentials (IMPORTANT!):**

Create a file: `.env.local.example` (we'll use this Week 2)

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxxx...  # Keep this SECRET!

# These values are in Supabase: Settings → API
```

**Checklist:**
- [ ] Supabase account created
- [ ] Project created: wot-digital-platform
- [ ] Project URL copied
- [ ] Anon key copied
- [ ] Service role key copied (don't share!)
- [ ] Saved credentials to password manager

---

## Part 2: Business Foundations (1 hour)

### Step 6: Finalize Pricing Tiers ⏳

**Decision Time:** Choose exact pricing for each tier.

**Ministry Starter Site:**
- [ ] Minimum: $______ (suggested: $150)
- [ ] Maximum: $______ (suggested: $250)
- [ ] Average deal: $______ (suggested: $200)

**Ministry Hub:**
- [ ] Minimum: $______ (suggested: $400)
- [ ] Maximum: $______ (suggested: $600)
- [ ] Average deal: $______ (suggested: $500)

**Apostolic Network Portal:**
- [ ] Minimum: $______ (suggested: $800)
- [ ] Maximum: $______ (suggested: $1200)
- [ ] Average deal: $______ (suggested: $1000)

**Payment Terms:**
- [ ] Deposit: _____% (suggested: 50%)
- [ ] Balance due: On delivery OR 7 days after delivery?
- [ ] Refund policy: _____ (suggested: Deposit non-refundable, balance refundable if not delivered)

**Maintenance Packages (Optional):**
- [ ] Monthly: $_____ (suggested: $30/month)
- [ ] Includes: Content updates, monthly AI summaries, priority support

**Write Final Pricing Here:**
```
FINAL PRICING:
- Starter Site: $_____ - $_____
- Ministry Hub: $_____ - $_____
- Network Portal: $_____ - $_____
- Payment: _____% deposit, _____% on delivery
- Maintenance: $_____ /month (optional)
```

---

### Step 7: Generate Privacy Policy ⏳

1. [ ] Go to [Termly.io](https://termly.io) or [PrivacyPolicies.com](https://privacypolicies.com)
2. [ ] Click "Create Privacy Policy" (free option)
3. [ ] Answer questions:
   - Website: wotdigitalsolutions.com (or temp domain)
   - Business name: WOT Digital Solutions
   - Location: Nigeria
   - What data collected: Name, email, payment info, usage data
   - How used: Provide service, contact, improve product
   - Third parties: Supabase (hosting), Stripe/Flutterwave (payments), Google Analytics
   - Cookies: Yes (for analytics)
   - User rights: Access, delete, export data
4. [ ] Generate policy (HTML or PDF)
5. [ ] Save to: `docs/legal/privacy-policy.md`

**Checklist:**
- [ ] Privacy policy generated
- [ ] Saved to project folder
- [ ] Reviewed (even if using template)

---

### Step 8: Draft Simple Terms of Service ⏳

Create: `docs/legal/terms-of-service.md`

**Quick Template:**
```markdown
# Terms of Service - WOT Digital Solutions

**Last Updated:** 2025-11-06

## 1. Service Description
WOT Digital Solutions provides custom ministry websites and digital platforms.

## 2. Payment Terms
- [X]% deposit required to start work
- Balance due on delivery
- Deposits are non-refundable
- Balance refundable if project not delivered

## 3. Client Responsibilities
- Provide content (text, images, videos) within 3 days of request
- Respond to review requests within 48 hours
- Accurate information (name, email, payment)

## 4. Intellectual Property
- Platform code: WOT Digital Solutions retains ownership
- Client content: Client retains ownership
- License: Client receives perpetual license to use delivered site

## 5. Support
- 1 month free support (bug fixes)
- Optional maintenance: $XX/month
- Response time: 24 hours (business days)

## 6. Limitation of Liability
Service provided "as is." Not liable for indirect damages.

## 7. Termination
Either party can terminate with 30 days notice.

## 8. Changes
We may update these terms. Clients notified via email.

## Contact
support@wotdigitalsolutions.com (once set up)
```

**Checklist:**
- [ ] ToS drafted (even if basic)
- [ ] Saved to `docs/legal/terms-of-service.md`
- [ ] Can refine with lawyer later (Week 6+)

---

## Part 3: Quick Wins (If Time)

### Optional: Register Domain (15 minutes)
- [ ] Go to [Namecheap.com](https://namecheap.com) or [GoDaddy](https://godaddy.com)
- [ ] Search: wotdigitalsolutions.com
- [ ] If available, purchase (~$12/year)
- [ ] If not available, try: wotdigital.com, wotministrysolutions.com
- [ ] Don't configure DNS yet (no site to point to)

### Optional: Set Up Email (10 minutes)
- [ ] Use Zoho Mail (free tier: 5 users) or Google Workspace ($6/user/month)
- [ ] Set up: support@wotdigitalsolutions.com
- [ ] Or use Gmail for now: wotdigitalsolutions@gmail.com

---

## End of Day 1 Review

**Complete These:**
- [ ] Git is working (ran `git --version` successfully)
- [ ] GitHub org created with code pushed
- [ ] Vercel account created
- [ ] Supabase project created + credentials saved
- [ ] Pricing finalized (exact numbers chosen)
- [ ] Privacy policy generated
- [ ] Terms of service drafted

**Success Criteria:**
✅ 5+ items checked above → Great progress!
🟡 3-4 items checked → On track, continue tomorrow
🔴 < 3 items checked → Re-prioritize, focus on git + Supabase + pricing

---

## Day 2 Preview

**Tomorrow's Focus:**
1. **Design:** Choose colors, fonts, write landing page hero
2. **Sales Prep:** Write WhatsApp script, build lead list
3. **Codex Handoff:** Request priority doc content (if Hybrid mode)

**Time Estimate:** 3-4 hours

---

## Notes / Blockers

**Write any issues here:**
-
-
-

**Questions for Claude/Codex:**
-
-
-

---

## Motivation

🎯 **You're 60% through Phase 0!**

After today, you'll have:
- Version control set up (git + GitHub)
- Backend ready (Supabase)
- Hosting ready (Vercel)
- Legal foundations (privacy, ToS)
- Business clarity (pricing locked in)

**Monday Week 2 = START CODING!** 🚀

---

**Last Updated:** 2025-11-06
**Status:** Day 1 In Progress
**Next:** Day 2 Checklist (design + sales prep)
