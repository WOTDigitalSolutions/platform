-- Create analytics_events table for custom event tracking
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_name TEXT NOT NULL,
  properties JSONB DEFAULT '{}'::jsonb,
  user_agent TEXT,
  referrer TEXT,
  pathname TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::TEXT, NOW()) NOT NULL
);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_analytics_events_event_name ON analytics_events(event_name);
CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_analytics_events_pathname ON analytics_events(pathname);

-- Create index on properties for JSON queries
CREATE INDEX IF NOT EXISTS idx_analytics_events_properties ON analytics_events USING GIN (properties);

-- Add Row Level Security (RLS)
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert events (track analytics)
CREATE POLICY "Anyone can insert analytics events" ON analytics_events
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can view analytics (for admin dashboard)
CREATE POLICY "Only authenticated users can view analytics" ON analytics_events
  FOR SELECT
  TO authenticated
  USING (true);

-- Create a view for easy analytics aggregation
CREATE OR REPLACE VIEW analytics_summary AS
SELECT
  event_name,
  COUNT(*) as event_count,
  DATE(created_at) as event_date,
  COUNT(DISTINCT (properties->>'user_id')) as unique_users
FROM analytics_events
GROUP BY event_name, DATE(created_at)
ORDER BY event_date DESC, event_count DESC;

-- Grant access to the view
GRANT SELECT ON analytics_summary TO authenticated;
