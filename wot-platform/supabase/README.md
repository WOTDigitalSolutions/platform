# Supabase Database Setup

This directory contains the database schema and configuration for the WOT Digital Solutions Ministry Platform.

## Quick Setup

### 1. Run the Schema

1. Go to your Supabase project: https://cydpbrzxpklkdbypnwdw.supabase.co
2. Click "SQL Editor" in the left sidebar
3. Click "New query"
4. Copy and paste the contents of `schema.sql`
5. Click "Run" (or press Cmd/Ctrl + Enter)

### 2. Verify Tables Created

After running the schema, you should see these tables in the "Table Editor":

- ✅ `sermons` - Store sermon recordings and metadata
- ✅ `events` - Upcoming and past ministry events
- ✅ `contact_submissions` - Contact form submissions
- ✅ `prayer_requests` - Prayer requests from visitors
- ✅ `pages` - Dynamic page content (About, etc.)

### 3. Sample Data

The schema includes sample data:
- 1 About page with placeholder content
- 1 sample sermon
- 2 sample events (Sunday Service, Prayer Meeting)

You can edit this data in the Supabase Table Editor or through the app once it's built.

## Database Structure

### Sermons Table
Stores sermon recordings with support for YouTube, audio, and video embeds.

**Key fields:**
- `title` - Sermon title
- `preacher` - Who preached
- `sermon_date` - When it was preached
- `media_type` - 'youtube' | 'audio' | 'video'
- `media_url` - URL to the media
- `scripture_reference` - Bible passage
- `tags` - Array of tags for categorization
- `published` - Show/hide sermon

### Events Table
Ministry events like services, prayer meetings, conferences.

**Key fields:**
- `title` - Event name
- `event_date` - When the event happens
- `event_time` - Time of day
- `location` - Where it takes place
- `registration_url` - Optional link to register
- `published` - Show/hide event

### Contact Submissions
Form submissions from the Contact page.

**Key fields:**
- `name` - Visitor's name
- `email` - Contact email
- `phone` - Optional phone number
- `message` - Their message
- `status` - 'new' | 'read' | 'responded'

### Prayer Requests
Prayer requests from ministry members and visitors.

**Key fields:**
- `name` - Requester's name
- `request` - The prayer request
- `status` - 'new' | 'praying' | 'answered'
- `is_anonymous` - Hide name if true

### Pages
Dynamic content pages (About, custom pages).

**Key fields:**
- `slug` - URL path (e.g., 'about')
- `title` - Page title
- `content` - HTML content
- `published` - Show/hide page

## Security (Row Level Security)

The schema includes RLS policies:

### Public Read Access
- ✅ Anyone can view **published** sermons
- ✅ Anyone can view **published** events
- ✅ Anyone can view **published** pages

### Public Write Access
- ✅ Anyone can submit contact forms
- ✅ Anyone can submit prayer requests

### Admin Access (Phase 2)
Admin authentication will be added in Week 5 with full CRUD access.

## Next Steps

1. Run the schema in Supabase ✅
2. Verify tables are created ✅
3. Start building the frontend pages 🚀

## Need Help?

- Supabase Docs: https://supabase.com/docs
- SQL Editor: https://supabase.com/dashboard/project/cydpbrzxpklkdbypnwdw/sql
- Table Editor: https://supabase.com/dashboard/project/cydpbrzxpklkdbypnwdw/editor
