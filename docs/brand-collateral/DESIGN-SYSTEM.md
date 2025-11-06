# Design System - WOT Digital Solutions

**Last Updated:** 2025-11-06
**Status:** ✅ Finalized
**Version:** 1.0

---

## Brand Identity

**Mission:** Making Ministry Easy Through Smart Digital Systems

**Brand Personality:**
- Professional yet approachable
- Modern but trustworthy
- Tech-forward with spiritual depth
- Empowering, not overwhelming

**Target Audience:** Christian ministers (Pentecostal, Baptist, Apostolic networks)

---

## Color Palette

### Primary Colors

**Deep Blue** - Trust, Stability, Spiritual Depth
- **Primary:** `#1E40AF` (rgb 30, 64, 175)
- **Light:** `#3B82F6` (rgb 59, 130, 246)
- **Dark:** `#1E3A8A` (rgb 30, 58, 138)
- **Usage:** Headers, buttons, links, brand elements

**Warm Gold** - Excellence, Calling, Divine Purpose
- **Primary:** `#F59E0B` (rgb 245, 158, 11)
- **Light:** `#FCD34D` (rgb 252, 211, 77)
- **Dark:** `#D97706` (rgb 217, 119, 6)
- **Usage:** CTAs, highlights, accents, success states

### Secondary Colors

**Vibrant Green** - Growth, Life, Harvest
- **Primary:** `#10B981` (rgb 16, 185, 129)
- **Light:** `#34D399` (rgb 52, 211, 153)
- **Dark:** `#059669` (rgb 5, 150, 105)
- **Usage:** Success messages, growth metrics, positive indicators

**Professional Slate** - Modern, Clean, Trustworthy
- **Primary:** `#64748B` (rgb 100, 116, 139)
- **Light:** `#94A3B8` (rgb 148, 163, 184)
- **Dark:** `#475569` (rgb 71, 85, 105)
- **Usage:** Body text, secondary elements, borders

### Neutral Colors

**Background Tones:**
- **White:** `#FFFFFF` - Main background
- **Off-White:** `#F8FAFC` - Section backgrounds
- **Light Gray:** `#F1F5F9` - Card backgrounds
- **Mid Gray:** `#E2E8F0` - Borders, dividers

**Text Colors:**
- **Heading:** `#0F172A` (Near Black)
- **Body:** `#334155` (Dark Slate)
- **Muted:** `#64748B` (Slate)
- **Placeholder:** `#94A3B8` (Light Slate)

### Semantic Colors

**Success:**
- Background: `#ECFDF5`
- Text: `#047857`
- Border: `#10B981`

**Warning:**
- Background: `#FEF3C7`
- Text: `#92400E`
- Border: `#F59E0B`

**Error:**
- Background: `#FEE2E2`
- Text: `#991B1B`
- Border: `#EF4444`

**Info:**
- Background: `#DBEAFE`
- Text: `#1E40AF`
- Border: `#3B82F6`

---

## Typography

### Font Families

**Headings:** Inter (Google Fonts)
- Modern, professional, highly readable
- Weights: 700 (Bold), 600 (Semibold)
- Fallback: system-ui, -apple-system, sans-serif

**Body Text:** Inter (Google Fonts)
- Same as headings for consistency
- Weights: 400 (Regular), 500 (Medium)
- Fallback: system-ui, -apple-system, sans-serif

**Monospace (Code/API Keys):** 'Courier New', monospace
- For technical content, API keys
- Weight: 400 (Regular)

**Import Code (for Next.js):**
```typescript
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})
```

### Type Scale

**Display (Hero Headlines):**
- Desktop: 56px / 3.5rem (line-height: 1.1)
- Mobile: 36px / 2.25rem (line-height: 1.1)
- Weight: 700 (Bold)
- Usage: Landing page hero

**Heading 1:**
- Desktop: 48px / 3rem (line-height: 1.2)
- Mobile: 32px / 2rem (line-height: 1.2)
- Weight: 700 (Bold)
- Usage: Page titles

**Heading 2:**
- Desktop: 36px / 2.25rem (line-height: 1.3)
- Mobile: 24px / 1.5rem (line-height: 1.3)
- Weight: 600 (Semibold)
- Usage: Section headings

**Heading 3:**
- Desktop: 24px / 1.5rem (line-height: 1.4)
- Mobile: 20px / 1.25rem (line-height: 1.4)
- Weight: 600 (Semibold)
- Usage: Sub-sections, card titles

**Body Large:**
- Size: 18px / 1.125rem (line-height: 1.7)
- Weight: 400 (Regular)
- Usage: Intro paragraphs, lead text

**Body Regular:**
- Size: 16px / 1rem (line-height: 1.7)
- Weight: 400 (Regular)
- Usage: Main body text

**Body Small:**
- Size: 14px / 0.875rem (line-height: 1.6)
- Weight: 400 (Regular)
- Usage: Captions, meta info, labels

**Tiny:**
- Size: 12px / 0.75rem (line-height: 1.5)
- Weight: 400 (Regular)
- Usage: Legal text, timestamps

### Text Styling

**Emphasis:**
- Bold: Weight 600 or 700
- Italic: Use sparingly (quotes, scripture references)
- Underline: Links only

**Line Length:**
- Ideal: 60-75 characters per line
- Max width: 65ch (character units)

---

## Spacing Scale

Based on 4px base unit (Tailwind CSS compatible):

```
0: 0px
1: 4px    (0.25rem)
2: 8px    (0.5rem)
3: 12px   (0.75rem)
4: 16px   (1rem)
5: 20px   (1.25rem)
6: 24px   (1.5rem)
8: 32px   (2rem)
10: 40px  (2.5rem)
12: 48px  (3rem)
16: 64px  (4rem)
20: 80px  (5rem)
24: 96px  (6rem)
```

**Common Patterns:**
- **Component padding:** 16px (4) or 24px (6)
- **Section padding:** 48px (12) desktop, 32px (8) mobile
- **Element spacing:** 8px (2) tight, 16px (4) normal, 24px (6) relaxed
- **Page margins:** 16px (4) mobile, 24px (6) tablet, 48px (12) desktop

---

## Components

### Buttons

**Primary Button:**
- Background: Deep Blue (#1E40AF)
- Text: White
- Padding: 12px 24px (py-3 px-6)
- Border Radius: 8px (rounded-lg)
- Font Weight: 600
- Hover: Slightly darker (#1E3A8A)
- Shadow: 0 2px 8px rgba(30, 64, 175, 0.2)

**Secondary Button:**
- Background: Warm Gold (#F59E0B)
- Text: Deep Blue (#1E3A8A)
- Same sizing as primary
- Hover: Slightly darker (#D97706)

**Outline Button:**
- Background: Transparent
- Border: 2px Deep Blue
- Text: Deep Blue
- Hover: Light blue background

**Text Button:**
- No background or border
- Text: Deep Blue
- Hover: Underline

### Cards

**Standard Card:**
- Background: White
- Border: 1px Light Gray (#E2E8F0)
- Border Radius: 12px (rounded-xl)
- Padding: 24px (p-6)
- Shadow: 0 1px 3px rgba(0,0,0,0.1)
- Hover: Shadow increases

**Feature Card (Pricing Tiers):**
- Same as standard card
- Highlight: Gold border (3px) for featured tier
- CTA button at bottom
- Icon at top (48px size)

### Forms

**Input Fields:**
- Height: 44px (py-2.5)
- Padding: 12px 16px (py-3 px-4)
- Border: 1px Slate (#E2E8F0)
- Border Radius: 8px (rounded-lg)
- Focus: Blue border (#3B82F6), blue shadow
- Font Size: 16px (prevents zoom on mobile)

**Labels:**
- Font Size: 14px
- Weight: 500 (Medium)
- Color: Dark Slate (#334155)
- Margin Bottom: 8px (mb-2)

**Error States:**
- Border: Red (#EF4444)
- Helper text: Red text below field
- Icon: Red X or alert icon

### Navigation

**Header:**
- Height: 64px (desktop), 56px (mobile)
- Background: White
- Border Bottom: 1px Light Gray
- Sticky/Fixed: Yes
- Shadow on scroll: Subtle

**Logo:**
- Height: 32px (mobile), 40px (desktop)
- Format: SVG or PNG with transparency
- Position: Left side

**Nav Links:**
- Font Size: 16px
- Weight: 500 (Medium)
- Color: Slate (#64748B)
- Hover: Deep Blue (#1E40AF)
- Active: Deep Blue + underline

### Footer:**
- Background: Deep Blue (#1E40AF)
- Text: White or Off-White
- Padding: 48px top/bottom
- Links: White with hover opacity

---

## Iconography

**Icon Library:** Lucide React (or Heroicons)
- Consistent stroke width (2px)
- 24px default size
- Use outline style (not solid)

**Common Icons:**
- Menu: Hamburger (mobile)
- Close: X mark
- Arrow: Right arrow for CTAs
- Check: Success indicators
- Alert: Warning/error states
- User: Profile/account
- Settings: Gear icon
- Search: Magnifying glass

**Icon Colors:**
- Match text color by default
- Can use brand colors for emphasis

---

## Grid & Layout

**Container:**
- Max Width: 1280px (desktop)
- Padding: 24px (mobile), 48px (desktop)
- Centered: margin-left/right auto

**Grid:**
- Columns: 12-column grid
- Gutter: 24px (gap-6)
- Responsive: Stack on mobile

**Breakpoints (Tailwind):**
- sm: 640px (phone landscape)
- md: 768px (tablet)
- lg: 1024px (laptop)
- xl: 1280px (desktop)
- 2xl: 1536px (large desktop)

**Common Layouts:**
- **Hero:** Full-width, centered text
- **Features:** 3-column (desktop), 1-column (mobile)
- **Pricing:** 3-column cards, side-by-side
- **Testimonials:** 2-column (desktop), 1-column (mobile)

---

## Imagery

**Photography Style:**
- Real people (ministers, churches, teams)
- Authentic, not overly staged
- Warm tones, well-lit
- Diverse representation (African ministries)

**Illustrations:**
- Simple, flat design
- Brand colors (blue, gold, green)
- Ministry-themed (crosses, bibles, churches)
- Optional: Use undraw.co or Storyset

**Logo Mockups:**
- Devices (laptop, tablet, phone)
- White/light backgrounds
- High contrast, readable

---

## Motion & Animation

**Principles:**
- Subtle, purposeful
- Enhance UX, don't distract
- Fast (200-300ms)

**Common Animations:**
- **Button Hover:** Scale 1.02, shadow increase
- **Card Hover:** Lift (translateY -4px), shadow increase
- **Page Load:** Fade in (300ms)
- **Modal Open:** Fade + scale (200ms)
- **Toast Notification:** Slide in from top (300ms)

**Easing:**
- Default: ease-in-out
- Fast exits: ease-in
- Slow entrances: ease-out

---

## Accessibility

**Contrast Ratios:**
- Body text: 4.5:1 minimum (WCAG AA)
- Heading text: 3:1 minimum
- Interactive elements: 3:1 minimum

**Focus States:**
- Visible outline (2px blue)
- Skip to main content link
- Keyboard navigable

**Alt Text:**
- All images have descriptive alt text
- Decorative images: alt=""

**Semantic HTML:**
- Proper heading hierarchy (H1 → H2 → H3)
- Use <button> not <div> for buttons
- Use <a> for links (not <span>)

---

## Code Examples

### Tailwind CSS Classes

**Primary Button:**
```html
<button class="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
  Get Started
</button>
```

**Card:**
```html
<div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
  <!-- Content -->
</div>
```

**Hero Section:**
```html
<section class="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
  <div class="container mx-auto px-6 md:px-12 max-w-4xl text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      Making Ministry Easy Through Smart Digital Systems
    </h1>
    <p class="text-xl text-gray-600 mb-8">
      Purpose-built platforms for Christian ministries
    </p>
    <button class="bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold py-3 px-8 rounded-lg">
      See Plans & Pricing
    </button>
  </div>
</section>
```

---

## Design Tools

**Recommended:**
- **Figma:** UI design, prototyping (free tier)
- **Tailwind CSS:** Styling framework (free)
- **Coolors.co:** Color palette generator (free)
- **Google Fonts:** Typography (free)
- **Lucide Icons:** Icon library (free)

**Quick Links:**
- Figma: figma.com
- Tailwind: tailwindcss.com
- Coolors: coolors.co
- Google Fonts: fonts.google.com
- Lucide: lucide.dev

---

## Brand Voice

**Tone:**
- Professional but warm
- Confident but humble
- Clear and jargon-free
- Encouraging and empowering

**Do:**
- Use "we" and "you" (conversational)
- Explain technical terms
- Show empathy for ministry challenges
- Celebrate client wins

**Don't:**
- Use corporate jargon
- Over-promise features
- Talk down to users
- Use overly casual language (no slang)

**Example Copy:**
- ✅ "We build digital platforms that help ministers focus on what matters: the Word."
- ❌ "Leverage our cutting-edge SaaS solution to synergize your ministry operations."

---

**Status:** ✅ Design System Finalized
**Next:** Apply to homepage mockup (Week 2)
**Version:** 1.0
**Last Updated:** 2025-11-06
