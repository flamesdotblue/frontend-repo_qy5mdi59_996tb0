import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import SensorDashboard from './components/SensorDashboard';
import AlertsShowcase from './components/AlertsShowcase';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />
      <FeatureGrid />
      <SensorDashboard />
      <AlertsShowcase />

      <footer className="border-t border-white/10 bg-slate-950/80 py-10 text-slate-300">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm">© {new Date().getFullYear()} EnviroLens AI — Kuwait’s environmental safety platform.</p>
            <nav className="flex items-center gap-5 text-sm">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#sensors" className="hover:text-white">Sensors</a>
              <a href="#alerts" className="hover:text-white">Alerts</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
