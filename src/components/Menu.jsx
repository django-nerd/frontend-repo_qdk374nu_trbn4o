import React from 'react';
import { Star } from 'lucide-react';

const categories = [
  {
    name: 'Signatures',
    items: [
      { id: 'sig1', name: 'Arctic Char', desc: 'Citrus cure, dill oil, pickled fennel', price: 22, rating: 4.8 },
      { id: 'sig2', name: 'Reindeer Ragù', desc: 'Hand-cut pappardelle, juniper, parmesan snow', price: 24, rating: 4.9 },
      { id: 'sig3', name: 'Wood-Fired Cod', desc: 'Brown butter, capers, crushed potatoes', price: 26, rating: 4.7 },
    ],
  },
  {
    name: 'Small Plates',
    items: [
      { id: 'sp1', name: 'Smoked Beet Tartare', desc: 'Hazelnut cream, rye crunch', price: 12, rating: 4.6 },
      { id: 'sp2', name: 'Gravlax Toast', desc: 'Cured salmon, crème fraîche, dill', price: 13, rating: 4.8 },
      { id: 'sp3', name: 'Forest Mushrooms', desc: 'Thyme, garlic, sourdough', price: 11, rating: 4.5 },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { id: 'd1', name: 'Cloudberry Panna Cotta', desc: 'Vanilla bean, polar honey', price: 9, rating: 4.9 },
      { id: 'd2', name: 'Cardamom Bun', desc: 'Warm, buttery, soft', price: 6, rating: 4.7 },
    ],
  },
];

export default function Menu({ onAddToCart }) {
  return (
    <section id="menu" className="py-16 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Our Menu</h2>
            <p className="text-gray-600">Seasonal dishes crafted from sustainable Nordic ingredients.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <h3 className="font-semibold text-lg text-emerald-700 mb-4">{cat.name}</h3>
              <ul className="space-y-4">
                {cat.items.map((item) => (
                  <li key={item.id} className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <span className="inline-flex items-center gap-1 text-xs text-amber-600">
                          <Star size={14} fill="#f59e0b" className="text-amber-500"/>
                          {item.rating}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${item.price.toFixed(2)}</p>
                      <button
                        onClick={() => onAddToCart(item)}
                        className="mt-2 px-3 py-1.5 text-sm rounded-md bg-emerald-600 text-white hover:bg-emerald-700"
                      >
                        Add
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
