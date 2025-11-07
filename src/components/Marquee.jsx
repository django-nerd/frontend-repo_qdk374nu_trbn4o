import { useEffect, useRef } from 'react';

export default function Marquee() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start = 0;
    let raf;

    const step = (t) => {
      const x = (t / 40) % el.scrollWidth;
      el.style.transform = `translateX(-${x}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const items = [
    'AI Agents', 'Custom LLMs', 'RAG Systems', 'n8n Workflows', 'Voice AI', 'Dashboards', 'Chatbots', 'Automation', 'Data Pipelines', 'MLOps'
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent dark:from-black pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent dark:from-black pointer-events-none" />
      <div className="whitespace-nowrap py-3 will-change-transform" ref={ref}>
        {items.concat(items).map((txt, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-2 text-sm text-black/70 dark:text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400" />
            {txt}
          </span>
        ))}
      </div>
    </div>
  );
}
