function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Surprise Lab. Built with ❤️</p>
        <div className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-4">
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#live" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Live</a>
          <a href="#play" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Playground</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
