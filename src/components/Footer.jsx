export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-black/60 dark:text-white/60">© {year} Polar. All rights reserved.</p>
        <div className="text-sm text-black/60 dark:text-white/60">AI systems, n8n workflows, and custom LLM builds.</div>
      </div>
    </footer>
  );
}
