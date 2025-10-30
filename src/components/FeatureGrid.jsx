import React from 'react';
import { Camera, Radio, BellRing } from 'lucide-react';

const features = [
  {
    title: 'Smart Camera Scanner',
    description:
      'Point your phone and detect environmental hazards in real-time using vision AI—smoke, spills, algal blooms, and more.',
    icon: Camera,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Real-Time Sensor Network',
    description:
      'Live feeds from distributed IoT devices monitor air, water, and soil metrics across Kuwait with high granularity.',
    icon: Radio,
    color: 'from-sky-500 to-cyan-500',
  },
  {
    title: 'Predictive Smart Alerts',
    description:
      'AI models forecast risk hotspots and notify communities and responders before issues escalate.',
    icon: BellRing,
    color: 'from-amber-500 to-orange-500',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Three game‑changing features</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          Built for rapid on‑site assessment, city‑scale visibility, and proactive action.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div
                className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${f.color} opacity-20 blur-3xl`}
                aria-hidden
              />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/10">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-slate-300">{f.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
