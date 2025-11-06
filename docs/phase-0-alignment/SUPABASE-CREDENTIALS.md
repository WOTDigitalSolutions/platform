# Supabase Credentials - WOT Digital Solutions

**Project:** wot-digital-platform
**Organization:** WOT Digital Solutions
**Region:** West EU (Ireland)
**Created:** 2025-11-06

---

## ⚠️ SECURITY WARNING

**This file contains sensitive credentials. NEVER:**
- Share publicly
- Commit to public repositories
- Post in forums or chat
- Send via unencrypted email

**Safe Storage:**
- Keep in this private GitHub repository only
- Use password manager for backup
- Regenerate keys if compromised

---

## Connection Details

### Project URL
```
https://cydpbrzxpklkdbypnwdw.supabase.co
```

### API Keys

**Anon/Public Key** (safe to use in frontend/browser)
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5ZHBicnp4cGtsa2RieXBud2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NDQ0MDcsImV4cCI6MjA3ODAyMDQwN30.d3tsQ7qaZ-P_Gn-Wzi2jicFtXQadCpIsx0iqBGbvKwU
```

**Service Role Key** (SECRET - server-side only!)
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5ZHBicnp4cGtsa2RieXBud2R3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjQ0NDQwNywiZXhwIjoyMDc4MDIwNDA3fQ.XZvZSqF0ks3Rvf7TrcZW2E2ErhoR4A-ZlB6YcGBNBW4
```

**Database Password**
```
[You saved this when creating the project - retrieve from your notes]
```

---

## Dashboard Access

**Supabase Dashboard:** https://supabase.com/dashboard/project/cydpbrzxpklkdbypnwdw

**Direct Database Access:**
- Host: `db.cydpbrzxpklkdbypnwdw.supabase.co`
- Port: `5432`
- Database: `postgres`
- User: `postgres`
- Password: [Your saved database password]

---

## Usage in Code (Week 2)

### Client-Side (Next.js Frontend)
```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

### Server-Side (API Routes, Server Components)
```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // SECRET key
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)
```

---

## Security Best Practices

### ✅ DO:
- Use anon key in frontend/browser code
- Use service role key only in server-side code (API routes, Edge Functions)
- Enable Row Level Security (RLS) on all tables
- Set up proper database policies
- Rotate keys if compromised

### ❌ DON'T:
- Expose service role key in frontend code
- Commit `.env.local` to git (it's in .gitignore)
- Share keys in screenshots or videos
- Use service role key for client operations

---

## Free Tier Limits

**Current Plan:** Free
**Limits:**
- Database: 500 MB
- Storage: 1 GB
- Bandwidth: 2 GB/month
- Edge Function Invocations: 500K/month
- Realtime: 200 concurrent connections

**Upgrade When:**
- Database > 400 MB (80% capacity)
- Storage > 800 MB (80% capacity)
- Monthly active users > 1000

**Pro Plan ($25/month):**
- Database: 8 GB
- Storage: 100 GB
- Bandwidth: 50 GB/month
- Better performance

---

## Monitoring & Maintenance

**Check Weekly:**
- Database size (Settings → Database)
- Storage usage (Settings → Storage)
- API usage (Project → API → Usage)

**Set Up Alerts:**
- Supabase Dashboard → Settings → Alerts
- Email notifications at 80% capacity

---

## Backup Strategy

**Automatic Backups (Free Tier):**
- Daily snapshots (last 7 days)
- Point-in-time recovery (not available on free)

**Manual Backups:**
- Export data: `pg_dump` via database connection
- Frequency: Weekly (starting Week 4)
- Storage: GitHub repository (private), external drive

---

## Support & Resources

**Supabase Docs:** https://supabase.com/docs
**Supabase Discord:** https://discord.supabase.com
**Status Page:** https://status.supabase.com

**Project-Specific:**
- Organization: WOT Digital Solutions
- Contact Email: wotdigitalsolutions@gmail.com
- Support: community.supabase.com (free tier)

---

**Last Updated:** 2025-11-06
**Status:** ✅ Project Active and Healthy
**Next Review:** Week 2 (when starting development)
