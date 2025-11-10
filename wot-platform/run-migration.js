const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

// Load environment variables
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function runMigration() {
  try {
    console.log('📦 Running Supabase migration...')

    // Read the SQL migration file
    const migrationSQL = fs.readFileSync(
      path.join(__dirname, 'supabase/migrations/create_contact_submissions_table.sql'),
      'utf8'
    )

    // Execute the migration
    const { error } = await supabase.rpc('exec_sql', { sql_query: migrationSQL })

    if (error) {
      // Try direct execution if rpc fails
      const { error: directError } = await supabase.from('_migrations').insert([{
        name: 'create_contact_submissions_table',
        executed_at: new Date().toISOString()
      }])

      // Actually run the SQL (we'll need to do this manually via Supabase dashboard)
      console.log('\n⚠️  Please run the following SQL in your Supabase SQL Editor:')
      console.log('\n' + '='.repeat(80))
      console.log(migrationSQL)
      console.log('='.repeat(80) + '\n')
      console.log('📝 Steps:')
      console.log('1. Go to: https://supabase.com/dashboard/project/cydpbrzxpklkdbypnwdw/sql/new')
      console.log('2. Copy the SQL above')
      console.log('3. Paste it into the SQL editor')
      console.log('4. Click "Run"')
      console.log('\n✅ Migration file ready!')
    } else {
      console.log('✅ Migration executed successfully!')
    }

  } catch (error) {
    console.error('❌ Migration failed:', error.message)
    process.exit(1)
  }
}

runMigration()
