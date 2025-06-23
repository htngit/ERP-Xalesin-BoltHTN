import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface InventoryAdjustmentRequest {
  item_id: string;
  batch_id: string;
  location_id: string;
  quantity_change: number;
  movement_type: 'adjustment' | 'receipt' | 'issue' | 'transfer';
  reference?: string;
  notes?: string;
}

interface StockTransferRequest {
  item_id: string;
  batch_id: string;
  from_location_id: string;
  to_location_id: string;
  quantity: number;
  reference?: string;
  notes?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { action, ...payload } = await req.json();

    switch (action) {
      case 'inventory_adjustment':
        return await handleInventoryAdjustment(supabaseClient, payload as InventoryAdjustmentRequest);
      
      case 'stock_transfer':
        return await handleStockTransfer(supabaseClient, payload as StockTransferRequest);
      
      default:
        return new Response(
          JSON.stringify({ error: 'Invalid action' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
  } catch (error) {
    console.error('Error in inventory operations:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

async function handleInventoryAdjustment(
  supabase: any,
  request: InventoryAdjustmentRequest
): Promise<Response> {
  const { item_id, batch_id, location_id, quantity_change, movement_type, reference, notes } = request;

  // Start transaction
  const { data: movement, error: movementError } = await supabase
    .from('inventory_movements')
    .insert({
      movement_type,
      date: new Date().toISOString().split('T')[0],
    })
    .select()
    .single();

  if (movementError) {
    throw new Error(`Failed to create movement: ${movementError.message}`);
  }

  // Create movement line
  const { error: lineError } = await supabase
    .from('movement_lines')
    .insert({
      movement_id: movement.id,
      item_id,
      location_id,
      batch_id,
      quantity: Math.abs(quantity_change),
    });

  if (lineError) {
    throw new Error(`Failed to create movement line: ${lineError.message}`);
  }

  // Update batch quantity
  const { data: currentBatch, error: batchFetchError } = await supabase
    .from('batches')
    .select('quantity')
    .eq('id', batch_id)
    .single();

  if (batchFetchError) {
    throw new Error(`Failed to fetch batch: ${batchFetchError.message}`);
  }

  const newQuantity = Number(currentBatch.quantity) + quantity_change;
  
  if (newQuantity < 0) {
    throw new Error('Insufficient stock for this operation');
  }

  const { error: updateError } = await supabase
    .from('batches')
    .update({ quantity: newQuantity })
    .eq('id', batch_id);

  if (updateError) {
    throw new Error(`Failed to update batch quantity: ${updateError.message}`);
  }

  return new Response(
    JSON.stringify({ 
      success: true, 
      movement_id: movement.id,
      new_quantity: newQuantity 
    }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
}

async function handleStockTransfer(
  supabase: any,
  request: StockTransferRequest
): Promise<Response> {
  const { item_id, batch_id, from_location_id, to_location_id, quantity, reference, notes } = request;

  // Validate sufficient stock at source location
  const { data: currentBatch, error: batchError } = await supabase
    .from('batches')
    .select('quantity')
    .eq('id', batch_id)
    .single();

  if (batchError) {
    throw new Error(`Failed to fetch batch: ${batchError.message}`);
  }

  if (Number(currentBatch.quantity) < quantity) {
    throw new Error('Insufficient stock for transfer');
  }

  // Create transfer movement
  const { data: movement, error: movementError } = await supabase
    .from('inventory_movements')
    .insert({
      movement_type: 'transfer',
      date: new Date().toISOString().split('T')[0],
    })
    .select()
    .single();

  if (movementError) {
    throw new Error(`Failed to create movement: ${movementError.message}`);
  }

  // Create movement lines for both source (negative) and destination (positive)
  const { error: linesError } = await supabase
    .from('movement_lines')
    .insert([
      {
        movement_id: movement.id,
        item_id,
        location_id: from_location_id,
        batch_id,
        quantity: -quantity, // Negative for outgoing
      },
      {
        movement_id: movement.id,
        item_id,
        location_id: to_location_id,
        batch_id,
        quantity: quantity, // Positive for incoming
      }
    ]);

  if (linesError) {
    throw new Error(`Failed to create movement lines: ${linesError.message}`);
  }

  return new Response(
    JSON.stringify({ 
      success: true, 
      movement_id: movement.id,
      transferred_quantity: quantity 
    }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
}