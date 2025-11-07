import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient Overlay - non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80 dark:from-black/70 dark:via-black/10 dark:to-black/90" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/10 px-3 py-1 text-xs font-medium text-black/70 dark:text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 animate-pulse" />
            Introducing Polar — AI Systems & Automation
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Building next‑gen AI products, n8n automations, and custom LLMs
          </h1>
          <p className="mt-5 text-lg text-black/70 dark:text-white/70 max-w-2xl">
            We design, build, and ship production‑grade AI solutions — from autonomous agents and custom model fine‑tuning to enterprise workflow automation.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium shadow hover:shadow-lg transition">Start a Project</a>
            <a href="#services" className="inline-flex items-center rounded-md border border-black/10 dark:border-white/20 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition">Explore Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}
