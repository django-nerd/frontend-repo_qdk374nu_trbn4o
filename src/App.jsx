import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Playground from './components/Playground';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />
      <main>
        <Hero />
        <section id="live" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/60 backdrop-blur">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Live Preview</h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">This section demonstrates a simple interactive grid below. Try the controls!</p>
            </div>
          </div>
        </section>
        <Features />
        <Playground />
      </main>
      <Footer />
    </div>
  );
}

export default App;
