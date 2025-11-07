import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onOrderNow }) {
  return (
    <section className="relative h-[70vh] min-h-[480px]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8b7S8k5XVf7wQj5q/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
        <div className="bg-white/80 backdrop-blur rounded-xl p-6 md:p-8 shadow-xl border border-white/70">
          <p className="text-emerald-700 font-medium tracking-wide">Welcome to Polar Bistro</p>
          <h1 className="mt-1 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">Nordic-inspired cuisine, crafted with warmth</h1>
          <p className="mt-3 text-gray-600 max-w-2xl">Sustainably sourced seafood, wood-fired specialties, and seasonal produce. Dine in our cozy space or order for pickup.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onOrderNow} className="px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">Order now</button>
            <a href="#menu" className="px-5 py-3 rounded-md border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors">Explore menu</a>
          </div>
        </div>
      </div>
    </section>
  );
}
