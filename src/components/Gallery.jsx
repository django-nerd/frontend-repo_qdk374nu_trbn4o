import { useState } from 'react';

const sampleImages = [
  'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop',
];

export default function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Work gallery</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">A peek at recent builds, prototypes, and systems we shipped.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {sampleImages.map((src, i) => (
            <button key={src} onClick={() => setActive(i)} className={`group relative aspect-[4/3] overflow-hidden rounded-xl border ${active === i ? 'ring-2 ring-purple-500' : 'border-black/10 dark:border-white/10'}`}>
              <img src={src} alt="Polar project" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
