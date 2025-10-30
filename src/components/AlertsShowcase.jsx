import React, { useEffect, useState } from 'react';
import { BellRing, ShieldCheck } from 'lucide-react';

function RiskPill({ level }) {
  const color =
    level === 'High' ? 'bg-red-500/20 text-red-300 ring-red-400/30' : level === 'Medium' ? 'bg-amber-500/20 text-amber-300 ring-amber-400/30' : 'bg-emerald-500/20 text-emerald-300 ring-emerald-400/30';
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${color}`}>
      {level}
    </span>
  );
}

export default function AlertsShowcase() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTime((t) => t + 1), 1500);
    return () => clearInterval(id);
  }, []);

  const rolling = [
    { id: 1, title: 'Dust storm approaching Jahra', level: time % 3 === 0 ? 'High' : 'Medium', area: 'Northwest' },
    { id: 2, title: 'Elevated PM2.5 in Farwaniya', level: time % 2 === 0 ? 'Medium' : 'Low', area: 'Central' },
    { id: 3, title: 'Potential algal bloom near Shuwaikh', level: time % 4 === 0 ? 'High' : 'Low', area: 'Coast' },
  ];

  return (
    <section id="alerts" className="w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Predictive smart alerts</h2>
            <p className="mt-2 max-w-xl text-slate-300">
              AI forecasts risk and notifies responders before hazards escalate.
            </p>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-300/30 md:mt-0">
            <ShieldCheck className="h-4 w-4" />
            Privacy-first design
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {rolling.map((a) => (
            <div key={a.id} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" aria-hidden />
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm text-slate-300">
                  <BellRing className="h-4 w-4" />
                  Forecast
                </div>
                <RiskPill level={a.level} />
              </div>
              <h3 className="mt-3 text-lg font-semibold">{a.title}</h3>
              <p className="mt-1 text-slate-300">Region: {a.area}</p>
              <div className="mt-4 h-20 w-full overflow-hidden rounded bg-white/10">
                <div className="flex h-full w-full items-end gap-1 p-1">
                  {Array.from({ length: 24 }).map((_, i) => {
                    const v = Math.abs(Math.sin((i + time) / 3));
                    const h = 10 + v * 60;
                    const bg = v > 0.75 ? 'bg-red-500' : v > 0.5 ? 'bg-amber-400' : 'bg-emerald-400';
                    return <div key={i} className={`${bg} w-1.5 rounded-sm`} style={{ height: `${h}%` }} />;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
