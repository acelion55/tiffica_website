import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://tifficaapp-1.onrender.com/api';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Map form fields to backend Lead schema
    const leadData = {
      name: body.name,
      number: body.phone, // Map 'phone' to 'number'
      email: body.email || '',
      address: body.address || '',
      leadType: 'partner', // Kitchen partner leads
      instantOrder: body.instant || false,
      bulkOrder: body.bulk || false,
      menuDescription: body.description || '',
      mealType: body.dailyTiffin ? 'Both' : 'Lunch', // If daily tiffin checked, set as Both
    };
    
    // Forward to backend API
    const response = await fetch(`${API_URL}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Backend error:', data);
      return NextResponse.json(
        { ok: false, error: data.error || 'Failed to save lead' },
        { status: response.status }
      );
    }

    return NextResponse.json({ ok: true, data });
  } catch (err) {
    console.error('Kitchen leads API error:', err);
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 }
    );
  }
}
