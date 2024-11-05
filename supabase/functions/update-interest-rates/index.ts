import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const COLLECT_API_KEY = Deno.env.get('COLLECT_API_KEY')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')

const supabase = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!)

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    console.log('Fetching interest rates from API...')
    
    const response = await fetch('https://api.collectapi.com/economy/creditInterest', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `apikey ${COLLECT_API_KEY}`
      }
    })

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    
    if (!data.result || !Array.isArray(data.result)) {
      throw new Error('Invalid API response format')
    }

    console.log(`Received ${data.result.length} bank rates`)

    // Update rates in database
    for (const rate of data.result) {
      const { error } = await supabase
        .from('bank_interest_rates')
        .upsert({
          bank_name: rate.bank,
          interest_rate: rate.rate,
          last_updated: new Date().toISOString()
        }, {
          onConflict: 'bank_name'
        })

      if (error) {
        console.error(`Error updating ${rate.bank}:`, error)
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: `Updated ${data.result.length} bank rates` 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})