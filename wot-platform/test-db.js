const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://cydpbrzxpklkdbypnwdw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5ZHBicnp4cGtsa2RieXBud2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA5MTUyMTcsImV4cCI6MjA0NjQ5MTIxN30.j4qp9XUgfDVs1JBnDsNDkVgKHf-bGFDEwTFFXy-L5G8'

const supabase = createClient(supabaseUrl, supabaseKey)

async function testData() {
  console.log('Testing Supabase connection...\n')

  // Test sermons
  const { data: sermons, error: sermonsError } = await supabase
    .from('sermons')
    .select('*')
    .eq('published', true)

  console.log('SERMONS:', sermons?.length || 0, 'found')
  if (sermons && sermons.length > 0) {
    sermons.forEach(s => console.log(`  - "${s.title}" by ${s.preacher}`))
  } else {
    console.log('  (No sermons found)')
  }
  if (sermonsError) console.log('Sermons error:', sermonsError.message)

  // Test events
  const { data: events, error: eventsError } = await supabase
    .from('events')
    .select('*')
    .eq('published', true)

  console.log('\nEVENTS:', events?.length || 0, 'found')
  if (events && events.length > 0) {
    events.forEach(e => console.log(`  - "${e.title}"`))
  } else {
    console.log('  (No events found)')
  }
  if (eventsError) console.log('Events error:', eventsError.message)

  // Test about page
  const { data: page, error: pageError } = await supabase
    .from('pages')
    .select('*')
    .eq('slug', 'about')
    .single()

  console.log('\nABOUT PAGE:', page ? 'Found' : 'Not found')
  if (page) {
    console.log(`  Title: ${page.title}`)
    const preview = page.content.slice(0, 150)
    console.log(`  Content starts with: ${preview}...`)
  }
  if (pageError) console.log('Page error:', pageError.message)
}

testData().then(() => process.exit(0)).catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
