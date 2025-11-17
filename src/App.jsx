import React from 'react';
import Hero from './components/Hero';
import Mission from './components/Mission';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 inline-block" />
            <span className="font-bold">SkinGlow</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#mission" className="text-gray-600 hover:text-gray-900">Missie</a>
            <a href="#quiz" className="text-gray-600 hover:text-gray-900">Enquête</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Mission />
        <CTA />
      </main>

      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} SkinGlow. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-4">
            <a href="#mission" className="hover:text-gray-700">Missie</a>
            <a href="#quiz" className="hover:text-gray-700">Enquête</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
