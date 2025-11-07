import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Q0Y6zA1E9r4rYpGd/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Welcome to the Surprise Lab
          </h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
            A playful space powered by AI. Click around the live canvas, then craft your own surprises.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#play" className="px-5 py-3 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium hover:opacity-90 transition">Start Playing</a>
            <a href="#features" className="px-5 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">Learn More</a>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6),transparent_60%)]" />
      </div>
    </section>
  );
}

export default Hero;
