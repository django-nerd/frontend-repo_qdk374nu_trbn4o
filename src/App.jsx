import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Footer from './components/Footer';

export default function App() {
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState([]);
  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + (i.qty || 1), 0), [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: (p.qty || 1) + 1 } : p));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const [showCart, setShowCart] = useState(false);

  const CartDrawer = () => (
    <div className={`fixed inset-0 ${showCart ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${showCart ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setShowCart(false)}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[380px] bg-white shadow-2xl border-l border-gray-100 transition-transform ${
          showCart ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-semibold">Your Order</h3>
          <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-gray-700">Close</button>
        </div>
        <div className="p-5 space-y-4 overflow-auto h-[calc(100%-160px)]">
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-600">Qty: {item.qty}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${(item.price * (item.qty || 1)).toFixed(2)}</p>
                  <div className="mt-1 inline-flex rounded-md border border-gray-200 overflow-hidden">
                    <button
                      className="px-2 py-1 text-sm hover:bg-gray-50"
                      onClick={() =>
                        setCart((prev) => prev.map((p) => (p.id === item.id ? { ...p, qty: Math.max(1, (p.qty || 1) - 1) } : p)))
                      }
                    >
                      −
                    </button>
                    <button
                      className="px-2 py-1 text-sm hover:bg-gray-50"
                      onClick={() => setCart((prev) => prev.map((p) => (p.id === item.id ? { ...p, qty: (p.qty || 1) + 1 } : p)))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-5 border-t border-gray-100">
          <div className="flex items-center justify-between font-semibold">
            <span>Total</span>
            <span>
              ${cart.reduce((sum, i) => sum + i.price * (i.qty || 1), 0).toFixed(2)}
            </span>
          </div>
          <button className="mt-4 w-full px-4 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Checkout</button>
        </div>
      </aside>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar currentPage={page} onNavigate={setPage} cartCount={cartCount} onOpenCart={() => setShowCart(true)} />
      {page === 'home' && (
        <>
          <Hero onOrderNow={() => setPage('menu')} />
          <Menu onAddToCart={addToCart} />
        </>
      )}
      {page === 'menu' && <Menu onAddToCart={addToCart} />}
      {page === 'reservations' && <Reservations />}
      {page === 'about' && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">About Polar Bistro</h2>
            <p className="text-gray-700 leading-relaxed">
              At Polar Bistro, we celebrate Nordic simplicity and sustainability. Our chefs craft seasonal menus around ocean-fresh seafood,
              foraged produce, and wood-fired techniques — pairing warmth and innovation in every dish.
            </p>
          </div>
        </section>
      )}
      <Footer />
      <CartDrawer />
    </div>
  );
}
