import React, { useEffect, useMemo, useState } from 'react';
import { Activity, Droplets, Wind, Thermometer } from 'lucide-react';

// Mocked live sensor values (front-end only demo)
function useFakeLiveData() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1200);
    return () => clearInterval(id);
  }, []);

  const sensors = useMemo(() => {
    const rand = (min, max) => (Math.sin(tick + min) * 0.5 + 0.5) * (max - min) + min;
    return [
      { id: 'AQ-01', label: 'Air Quality (PM2.5)', value: Math.round(rand(12, 95)), unit: 'µg/m³', icon: Wind },
      { id: 'WT-17', label: 'Water Salinity', value: (rand(3, 5)).toFixed(2), unit: 'ppt', icon: Droplets },
      { id: 'SL-09', label: 'Soil Moisture', value: Math.round(rand(18, 82)), unit: '%', icon: Activity },
      { id: 'TMP-02', label: 'Ambient Temp', value: (rand(32, 47)).toFixed(1), unit: '°C', icon: Thermometer },
    ];
  }, [tick]);

  return sensors;
}

export default function SensorDashboard() {
  const sensors = useFakeLiveData();

  return (
    <section id="sensors" className="w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Real‑time sensor network</h2>
            <p className="mt-2 max-w-xl text-slate-300">
              A unified view of distributed IoT devices across Kuwait. See health at a glance.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 inline-flex rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 md:mt-0"
          >
            Open full map
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          {sensors.map((s) => (
            <div key={s.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/10">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="text-sm text-slate-300">{s.id}</div>
              </div>
              <div className="mt-3 text-lg font-semibold">{s.label}</div>
              <div className="mt-1 text-2xl font-bold">
                {s.value} <span className="text-base font-semibold text-slate-300">{s.unit}</span>
              </div>
              <div className="mt-4 h-2 w-full overflow-hidden rounded bg-white/10">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
                  style={{ width: `${Math.min(100, Number(s.value))}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="relative col-span-12 h-64 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-400/10 via-sky-400/10 to-indigo-400/10 p-0 md:col-span-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-lg bg-slate-900/60 px-4 py-2 text-sm text-slate-200 ring-1 ring-white/10">
                Interactive Kuwait map coming soon
              </div>
            </div>
          </div>
          <div className="col-span-12 space-y-4 md:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold text-slate-200">Network Health</div>
              <p className="mt-1 text-slate-300">All regions operational. No outages detected.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold text-slate-200">Last sync</div>
              <p className="mt-1 text-slate-300">Updated a few seconds ago.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
