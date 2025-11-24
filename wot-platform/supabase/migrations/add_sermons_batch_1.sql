-- Add new sermons to the database
-- Run this in your Supabase SQL Editor

INSERT INTO sermons (
  title,
  description,
  preacher,
  sermon_date,
  media_type,
  media_url,
  thumbnail_url,
  scripture_reference,
  tags,
  duration,
  published
) VALUES
(
  'Desire; Principle of Manifestation',
  'Discover the powerful principle of desire and how it manifests in your life. Learn how God-given desires can lead to breakthrough and transformation.',
  'Pastor Emma',
  '2025-01-20',
  'youtube',
  'https://youtu.be/P1Zy6wCl4tg',
  NULL,
  NULL,
  ARRAY['desire', 'manifestation', 'faith', 'breakthrough'],
  NULL,
  true
),
(
  'How to Heal The Sick 2',
  'Part 2 of this powerful series on healing ministry. Learn practical steps and biblical principles for ministering healing to the sick.',
  'Pastor Emma',
  '2025-01-21',
  'youtube',
  'https://youtu.be/tGPS9EhlPes',
  NULL,
  NULL,
  ARRAY['healing', 'ministry', 'miracles', 'faith', 'supernatural'],
  NULL,
  true
);
