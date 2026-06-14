"use client";
import React, { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  address: string;
  instant: boolean;
  bulk: boolean;
  dailyTiffin: boolean;
  description: string;
};

export default function PartnerFormClient() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    address: '',
    instant: false,
    bulk: false,
    dailyTiffin: false,
    description: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (k: keyof FormState, v: any) => setForm((s) => ({ ...s, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/kitchen-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Network error');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', address: '', instant: false, bulk: false, dailyTiffin: false, description: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-2xl font-black mb-4">Let us know</h3>
      <div className="grid grid-cols-1 gap-3">
        <input required value={form.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="Name" className="border px-3 py-2 rounded" />
        <input required value={form.email} onChange={(e) => handleChange('email', e.target.value)} type="email" placeholder="Email" className="border px-3 py-2 rounded" />
        <input required value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="Phone number" className="border px-3 py-2 rounded" />
        <input value={form.address} onChange={(e) => handleChange('address', e.target.value)} placeholder="Address" className="border px-3 py-2 rounded" />

        <div className="flex gap-4 mt-2">
          <label className="flex items-center gap-2"><input type="checkbox" checked={form.instant} onChange={(e) => handleChange('instant', e.target.checked)} /> Instant</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={form.bulk} onChange={(e) => handleChange('bulk', e.target.checked)} /> Bulk</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={form.dailyTiffin} onChange={(e) => handleChange('dailyTiffin', e.target.checked)} /> Daily Tiffin</label>
        </div>

        <textarea value={form.description} onChange={(e) => handleChange('description', e.target.value)} rows={4} placeholder="Description (optional)" className="border px-3 py-2 rounded mt-2" />

        <div className="flex items-center gap-3 mt-4">
          <button type="submit" disabled={status === 'loading'} className="bg-primary text-white px-4 py-2 rounded font-semibold">
            {status === 'loading' ? 'Submitting…' : 'Submit Lead'}
          </button>
          {status === 'success' && <span className="text-green-600 font-medium">Submitted — thank you.</span>}
          {status === 'error' && <span className="text-red-600 font-medium">Submission failed.</span>}
        </div>
      </div>
    </form>
  );
}
