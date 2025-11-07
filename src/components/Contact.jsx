import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company'),
      services: Array.from(e.currentTarget.querySelectorAll('input[name="services"]:checked')).map(i => i.value),
      message: form.get('message'),
      source: 'website'
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold">Start a project</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">Tell us a bit about your goals — we’ll get back within one business day.</p>
        </div>
        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input required name="name" placeholder="Your name" className="rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500" />
          <input required type="email" name="email" placeholder="Email" className="rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500" />
          <input name="company" placeholder="Company" className="rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 md:col-span-2" />

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
            {['AI Agents', 'n8n Workflows', 'Custom LLM', 'Voice AI'].map((s) => (
              <label key={s} className="flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 px-3 py-2">
                <input type="checkbox" name="services" value={s} />
                <span>{s}</span>
              </label>
            ))}
          </div>

          <textarea name="message" placeholder="Project brief" rows={5} className="md:col-span-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500" />

          <div className="md:col-span-2 flex items-center gap-3">
            <button disabled={status==='loading'} className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium shadow hover:shadow-lg transition">
              {status === 'loading' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'success' && <span className="text-green-600">Thanks! We’ll be in touch.</span>}
            {status === 'error' && <span className="text-red-600">Something went wrong. Try again.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
