import React from 'react';
import { ChefHat, Utensils, Calendar, ShoppingCart } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate, cartCount, onOpenCart }) {
  const linkClass = (page) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      currentPage === page ? 'text-white bg-emerald-600' : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-emerald-600 text-white"><ChefHat size={20} /></div>
            <span className="font-semibold text-lg tracking-tight">Polar Bistro</span>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <button className={linkClass('home')} onClick={() => onNavigate('home')}>
              Home
            </button>
            <button className={linkClass('menu')} onClick={() => onNavigate('menu')}>
              <span className="inline-flex items-center gap-2"><Utensils size={16}/> Menu</span>
            </button>
            <button className={linkClass('reservations')} onClick={() => onNavigate('reservations')}>
              <span className="inline-flex items-center gap-2"><Calendar size={16}/> Reservations</span>
            </button>
            <button className={linkClass('about')} onClick={() => onNavigate('about')}>
              About
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCart}
              className="relative inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart size={18} className="text-emerald-700"/>
              <span className="text-sm font-medium">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => onNavigate('reservations')}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              Book a table
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
