import { useEffect, useState } from 'react';

function randomEmoji() {
  const list = ['✨', '🚀', '🎈', '💡', '🧩', '🌈', '🎉', '🪄'];
  return list[Math.floor(Math.random() * list.length)];
}

function Playground() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const initial = Array.from({ length: 16 }, () => ({ id: crypto.randomUUID(), emoji: randomEmoji() }));
    setItems(initial);
  }, []);

  const shuffle = () => {
    setItems(prev => [...prev].sort(() => Math.random() - 0.5));
  };

  const mutate = () => {
    setItems(prev => prev.map(it => ({ ...it, emoji: randomEmoji() })));
  };

  return (
    <section id="play" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Playground</h2>
            <p className="text-neutral-600 dark:text-neutral-300">Shuffle and remix the grid for a tiny burst of joy.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={shuffle} className="px-4 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition">Shuffle</button>
            <button onClick={mutate} className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">Remix</button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {items.map(item => (
            <div key={item.id} className="aspect-square rounded-xl bg-gradient-to-br from-indigo-50 to-fuchsia-50 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-800 grid place-content-center text-4xl">
              <span role="img" aria-label="emoji">{item.emoji}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Playground;
