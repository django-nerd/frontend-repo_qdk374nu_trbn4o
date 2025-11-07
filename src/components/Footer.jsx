import React from 'react';
import { MapPin, Clock, PhoneCall, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-gray-900">Polar Bistro</h3>
          <p className="mt-2 text-gray-600">Nordic comfort in the heart of the city. Seasonal, sustainable, soulful.</p>
        </div>
        <div className="space-y-3 text-gray-700">
          <p className="inline-flex items-center gap-2"><MapPin size={18}/> 123 Fjord Lane, Aurora District</p>
          <p className="inline-flex items-center gap-2"><Clock size={18}/> Tue–Sun: 12pm–10pm</p>
          <p className="inline-flex items-center gap-2"><PhoneCall size={18}/> (555) 012-3456</p>
        </div>
        <div className="flex items-start md:justify-end gap-3">
          <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50"><Instagram size={18}/> Instagram</a>
          <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50"><Facebook size={18}/> Facebook</a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} Polar Bistro. All rights reserved.</div>
    </footer>
  );
}
