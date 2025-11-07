import { Rocket, Sparkles } from 'lucide-react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 grid place-content-center text-white shadow-lg shadow-fuchsia-500/30">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-neutral-900 dark:text-white">Surprise Lab</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#live" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Live</a>
          <a href="#play" className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1">
            <Sparkles size={16} /> Play
          </a>
        </nav>
        <a href="#play" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition">
          Try It
        </a>
      </div>
    </header>
  );
}

export default Navbar;
