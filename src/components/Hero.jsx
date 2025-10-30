import React from 'react';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6Vn2-p5q2tq8W-6q/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center md:pt-32">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-300 ring-1 ring-inset ring-emerald-300/30">
          Kuwait Environmental Safety Platform
        </span>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          EnviroLens AI
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Use your smartphone camera and live IoT sensors to instantly detect air, water, and soil hazards. AI-powered insights deliver proactive alerts to keep your community safe.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600"
          >
            Explore Features
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#sensors"
            className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
          >
            View Live Sensors
          </a>
        </div>
      </div>
    </section>
  );
}
