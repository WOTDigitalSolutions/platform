-- WOT Digital Solutions - Ministry Starter Site Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Sermons Table
CREATE TABLE IF NOT EXISTS sermons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  title TEXT NOT NULL,
  description TEXT,
  preacher TEXT NOT NULL,
  sermon_date DATE NOT NULL,
  media_type TEXT NOT NULL CHECK (media_type IN ('youtube', 'audio', 'video')),
  media_url TEXT NOT NULL,
  thumbnail_url TEXT,
  scripture_reference TEXT,
  tags TEXT[],
  duration TEXT,
  published BOOLEAN DEFAULT false
);

-- Events Table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  title TEXT NOT NULL,
  description TEXT,
  event_date DATE NOT NULL,
  event_time TIME,
  location TEXT,
  image_url TEXT,
  registration_url TEXT,
  published BOOLEAN DEFAULT false
);

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded'))
);

-- Prayer Requests Table
CREATE TABLE IF NOT EXISTS prayer_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  request TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'praying', 'answered')),
  is_anonymous BOOLEAN DEFAULT false
);

-- Pages Table (for dynamic content like About page)
CREATE TABLE IF NOT EXISTS pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  meta_description TEXT,
  published BOOLEAN DEFAULT true
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS sermons_sermon_date_idx ON sermons(sermon_date DESC);
CREATE INDEX IF NOT EXISTS sermons_published_idx ON sermons(published);
CREATE INDEX IF NOT EXISTS events_event_date_idx ON events(event_date ASC);
CREATE INDEX IF NOT EXISTS events_published_idx ON events(published);
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS prayer_requests_created_at_idx ON prayer_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS pages_slug_idx ON pages(slug);

-- Enable Row Level Security (RLS)
ALTER TABLE sermons ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE prayer_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Public read access for published content
CREATE POLICY "Public can view published sermons"
  ON sermons FOR SELECT
  USING (published = true);

CREATE POLICY "Public can view published events"
  ON events FOR SELECT
  USING (published = true);

CREATE POLICY "Public can view published pages"
  ON pages FOR SELECT
  USING (published = true);

-- RLS Policies - Anyone can insert contact forms and prayer requests
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can submit prayer request"
  ON prayer_requests FOR INSERT
  WITH CHECK (true);

-- Insert sample About page content
INSERT INTO pages (slug, title, content, meta_description, published)
VALUES (
  'about',
  'About Us',
  E'<h2>Our Mission</h2>\n<p>We are a vibrant community of believers dedicated to spreading the Gospel and making disciples of all nations. Our ministry is built on the foundation of faith, hope, and love.</p>\n\n<h2>Our Vision</h2>\n<p>To see lives transformed by the power of God, communities restored, and the Kingdom of Heaven advanced in every sphere of society.</p>\n\n<h2>Our Values</h2>\n<ul>\n<li><strong>Faith:</strong> We believe in the power of God to transform lives</li>\n<li><strong>Community:</strong> We are stronger together</li>\n<li><strong>Service:</strong> We exist to serve God and others</li>\n<li><strong>Excellence:</strong> We give our best in all we do</li>\n</ul>\n\n<h2>Leadership</h2>\n<p>Our ministry is led by Pastor [Name], who has been serving in ministry for over [X] years. Together with our dedicated team of leaders, we are committed to providing spiritual guidance and support to our community.</p>',
  'Learn about our mission, vision, and values. Discover what makes our ministry unique and how we serve our community.',
  true
)
ON CONFLICT (slug) DO NOTHING;

-- Insert sample sermon
INSERT INTO sermons (title, description, preacher, sermon_date, media_type, media_url, scripture_reference, tags, published)
VALUES (
  'Walking in Faith',
  'Discover how to strengthen your faith and trust God in every circumstance. This powerful message will encourage you to take bold steps of faith.',
  'Pastor John Doe',
  '2025-11-03',
  'youtube',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Hebrews 11:1-6',
  ARRAY['faith', 'trust', 'encouragement'],
  true
);

-- Insert sample event
INSERT INTO events (title, description, event_date, event_time, location, published)
VALUES (
  'Sunday Service',
  'Join us for our weekly Sunday worship service. Experience powerful worship, inspiring messages, and fellowship with believers.',
  '2025-11-10',
  '10:00:00',
  'Main Sanctuary',
  true
),
(
  'Prayer Meeting',
  'Our midweek prayer gathering where we seek God together and intercede for our community and nation.',
  '2025-11-13',
  '18:00:00',
  'Prayer Hall',
  true
);
