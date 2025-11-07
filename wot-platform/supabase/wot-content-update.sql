-- WOT Digital Solutions - Content Personalization Update
-- Run this in Supabase SQL Editor to update with real WOT Nation content

-- Update About Page with real WOT content
UPDATE pages
SET
  content = E'<h2>About WOT Digital Solutions</h2>\n<p>WOT Digital Solutions is the digital innovation and media technology arm of Word of Truth Ministries International (WOTMI). We exist to translate the ministry\'s apostolic vision into digital systems, visual communication, and technological excellence that carry the Spirit of the House across nations.</p>\n\n<p>Born from the vision of Pastor Emma Mukisa, WOT Digital Solutions is not a secular agency — it is a prophetic infrastructure built to empower ministries, movements, and leaders with tools that preserve revelation, multiply reach, and sustain global transformation. Every project is a digital altar, where creativity meets consecration and technology becomes a vessel for truth.</p>\n\n<h2>Our Vision</h2>\n<p class="text-lg font-semibold text-blue-800">To build a global ecosystem of Spirit-led digital solutions that amplify truth, multiply vision, and disciple nations through technology.</p>\n\n<h2>Our Mission</h2>\n<p>We digitize and deploy the Word, the culture, and the systems of the Kingdom — by designing and developing platforms, media, and communication systems that:</p>\n<ul>\n<li><strong>Preserve the Message</strong> — ensuring the Word of Truth remains visible, accessible, and enduring.</li>\n<li><strong>Empower the Movement</strong> — providing digital tools that enhance ministry administration, communication, and reach.</li>\n<li><strong>Multiply Influence</strong> — using creative media and technology to expand the ministry\'s voice across nations and generations.</li>\n</ul>\n\n<h2>Core Values</h2>\n<ul>\n<li><strong>Divine Innovation</strong> — We create by revelation, not imitation.</li>\n<li><strong>Excellence</strong> — Every product reflects the perfection of the King we represent.</li>\n<li><strong>Integrity</strong> — We communicate truth without distortion.</li>\n<li><strong>Service</strong> — We exist to serve the vision of the House and the Body of Christ.</li>\n<li><strong>Honor</strong> — Every project is handled with reverence for its spiritual significance.</li>\n<li><strong>Expansionism</strong> — We build for growth — scalable, sustainable, and Spirit-breathed.</li>\n</ul>\n\n<h2>Leadership</h2>\n<p>Our ministry is led by <strong>Pastor Emma Mukisa</strong>, Founder & President of Word of Truth Ministries International - an Apostolic Architect, Global Reformer, and Visionary Leader. Under his oversight, <strong>Pastor Caroline Nakiwala</strong> serves as Executive Director, responsible for operational execution, client partnerships, and team synergy.</p>\n\n<h2>Our Distinctive</h2>\n<p>While most agencies focus on branding, we focus on mandate embodiment. We don\'t just build websites or visuals — we translate heavenly blueprints into digital architecture. Our solutions are designed for prophetic continuity, ensuring that what God is doing through His servant is preserved, multiplied, and extended through technology.</p>',
  meta_description = 'WOT Digital Solutions is the digital innovation arm of Word of Truth Ministries International. We build Spirit-led digital solutions that amplify truth and disciple nations through technology.',
  updated_at = NOW()
WHERE slug = 'about';

-- Delete existing sample sermons
DELETE FROM sermons;

-- Insert real WOT sermons
INSERT INTO sermons (title, description, preacher, sermon_date, media_type, media_url, scripture_reference, tags, published)
VALUES
(
  'Living Above The World''s Education System Part 1',
  'Discover how to navigate and transcend worldly educational systems through Kingdom principles. Pastor Emma Mukisa brings powerful revelation on maintaining spiritual excellence while engaging with secular education.',
  'Pastor Emma Mukisa',
  '2025-10-15',
  'youtube',
  'https://www.youtube.com/watch?v=s2wb_LMbF10',
  'Colossians 2:8',
  ARRAY['education', 'kingdom principles', 'wisdom', 'revelation'],
  true
),
(
  'The Believer''s Authority',
  'Understand and activate the authority that has been given to every believer in Christ. This powerful message will equip you to walk in dominion and exercise your God-given authority in every area of life.',
  'Pastor Emma Mukisa',
  '2025-09-22',
  'youtube',
  'https://www.youtube.com/watch?v=VggT86NaLQI',
  'Luke 10:19',
  ARRAY['authority', 'power', 'spiritual warfare', 'dominion'],
  true
);

-- Delete existing sample events
DELETE FROM events;

-- Insert real WOT events
INSERT INTO events (title, description, event_date, event_time, location, published)
VALUES
(
  'Sunday Worship Service',
  'Join us every Sunday for powerful worship, inspiring messages, and authentic fellowship. Experience the presence of God as we gather to worship and receive from His Word.',
  '2025-11-10',
  '10:00:00',
  'WOTMI Headquarter at WOT City Kakiri, Kikuji, Uganda',
  true
),
(
  'WPPC - Word of Truth Pastors and Partners'' Conference',
  'Join us for the Word of Truth Pastors and Partners'' Conference with Pastor Emma Mukisa. A gathering for spiritual leaders and partners to receive fresh revelation, apostolic impartation, and strategic direction for ministry advancement. This is a sacred convergence of those called to carry and multiply the vision of the House.',
  '2025-11-24',
  '09:00:00',
  'WOTMI Headquarter at WOT City Kakiri, Kikuji, Uganda',
  true
),
(
  'Midweek Prayer Meeting',
  'Our midweek prayer gathering where we seek God together, intercede for our community and nation, and contend for breakthrough. Join us as we press into the presence of God through corporate prayer.',
  '2025-11-13',
  '18:00:00',
  'WOTMI Headquarter at WOT City Kakiri, Kikuji, Uganda',
  true
);
