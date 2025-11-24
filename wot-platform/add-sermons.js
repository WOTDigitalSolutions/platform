// Quick script to add sermons to Supabase
// Run with: node add-sermons.js

const fs = require('fs')
const path = require('path')

// Load .env.local manually
const envPath = path.join(__dirname, '.env.local')
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8')
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=')
    if (key && valueParts.length) {
      process.env[key.trim()] = valueParts.join('=').trim()
    }
  })
}

const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Error: Missing Supabase credentials in .env.local')
  console.log('Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

const sermons = [
  {
    title: 'Desire; Principle of Manifestation',
    description: 'Discover the powerful principle of desire and how it manifests in your life. Learn how God-given desires can lead to breakthrough and transformation.',
    preacher: 'Pastor Emma',
    sermon_date: '2025-01-20',
    media_type: 'youtube',
    media_url: 'https://youtu.be/P1Zy6wCl4tg',
    thumbnail_url: null,
    scripture_reference: null,
    tags: ['desire', 'manifestation', 'faith', 'breakthrough'],
    duration: null,
    published: true
  },
  {
    title: 'How to Heal The Sick 2',
    description: 'Part 2 of this powerful series on healing ministry. Learn practical steps and biblical principles for ministering healing to the sick.',
    preacher: 'Pastor Emma',
    sermon_date: '2025-01-21',
    media_type: 'youtube',
    media_url: 'https://youtu.be/tGPS9EhlPes',
    thumbnail_url: null,
    scripture_reference: null,
    tags: ['healing', 'ministry', 'miracles', 'faith', 'supernatural'],
    duration: null,
    published: true
  }
]

async function addSermons() {
  console.log('🚀 Starting to add sermons...\n')

  for (const sermon of sermons) {
    console.log(`📝 Adding: "${sermon.title}"`)

    const { data, error } = await supabase
      .from('sermons')
      .insert([sermon])
      .select()

    if (error) {
      console.error(`   ❌ Error: ${error.message}`)
    } else {
      console.log(`   ✅ Successfully added!`)
      console.log(`   🆔 ID: ${data[0].id}`)
    }
    console.log('')
  }

  console.log('✨ Done! Check your Supabase dashboard to verify.')
}

addSermons().catch(console.error)
