import { Sparkles, Zap, Shield, Heart } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Generated with Flair',
    desc: 'We craft delightful interfaces with animations and thoughtful details.',
  },
  {
    icon: Zap,
    title: 'Fast & Interactive',
    desc: 'Snappy feedback and smooth motion keep things feeling alive.',
  },
  {
    icon: Shield,
    title: 'Safe to Explore',
    desc: 'Everything runs in a sandbox so you can experiment freely.',
  },
  {
    icon: Heart,
    title: 'Made for Fun',
    desc: 'A friendly space that encourages creativity and play.',
  },
];

function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-white">
          What makes it special
        </h2>
        <p className="mt-3 text-center text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          A tiny showcase of modern UI patterns to make you smile.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/70 dark:bg-neutral-900/60 backdrop-blur shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 grid place-content-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
