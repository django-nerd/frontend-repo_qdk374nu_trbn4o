import { Bot, Workflow, Cpu, AudioLines } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Agents & Apps',
    desc: 'Custom AI copilots, chatbots, and autonomous agents with RAG, tools, and guardrails.',
  },
  {
    icon: Workflow,
    title: 'n8n Automation',
    desc: 'Design and implementation of robust workflows that connect your stack end‑to‑end.',
  },
  {
    icon: Cpu,
    title: 'Custom LLM Builds',
    desc: 'Model selection, fine‑tuning, distillation, and evaluation pipelines tailored to your data.',
  },
  {
    icon: AudioLines,
    title: 'Voice & Realtime AI',
    desc: 'Voice agents, streaming inference, and low‑latency experiences with vector search.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">What we build</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">End‑to‑end delivery from strategy and design to deployment and MLOps.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white dark:bg-neutral-900/60 backdrop-blur">
              <div className="h-10 w-10 rounded-lg bg-black text-white dark:bg-white dark:text-black grid place-content-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-1 text-sm text-black/70 dark:text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
