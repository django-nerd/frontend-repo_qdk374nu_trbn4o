import React, { useState } from 'react';
import { CalendarDays, Users, Phone } from 'lucide-react';

export default function Reservations() {
  const [form, setForm] = useState({ date: '', time: '', guests: 2, name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm">
          <div className="flex items-start gap-3 mb-6">
            <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700"><CalendarDays /></div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Reserve a Table</h2>
              <p className="text-gray-600">Instant request — we’ll confirm by SMS shortly.</p>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-6">
              <p className="text-lg font-medium text-emerald-700">Thanks {form.name}! We’ve received your request for {form.guests} on {form.date} at {form.time}. We’ll text {form.phone} to confirm.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input type="date" name="date" value={form.date} onChange={onChange} required className="w-full rounded-md border-gray-200 focus:ring-emerald-500 focus:border-emerald-500" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input type="time" name="time" value={form.time} onChange={onChange} required className="w-full rounded-md border-gray-200 focus:ring-emerald-500 focus:border-emerald-500" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-gray-500"/>
                  <input type="number" min="1" max="12" name="guests" value={form.guests} onChange={onChange} required className="w-24 rounded-md border-gray-200 focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" name="name" value={form.name} onChange={onChange} required className="w-full rounded-md border-gray-200 focus:ring-emerald-500 focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-gray-500"/>
                  <input type="tel" name="phone" value={form.phone} onChange={onChange} required className="w-full rounded-md border-gray-200 focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
              </div>
              <div className="col-span-2 flex justify-end">
                <button className="px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Request booking</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
