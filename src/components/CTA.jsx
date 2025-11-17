import React from 'react';

const CTA = () => {
  return (
    <section id="quiz" className="bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Begin jouw weg naar een stralende huid!</h3>
        <p className="mt-3 text-gray-700">
          Ben je klaar om de eerste stap te zetten naar een gezondere, stralende huid? Begin met het invullen van mijn huidverzorgingsenquête! De enquête helpt mij om jouw unieke huidtype, problemen en doelen te begrijpen, zodat ik gepersonaliseerde productaanbevelingen en een huidverzorgingsregime kan bieden dat speciaal voor jou is ontworpen.
        </p>
        <div className="mt-8">
          <a href="#" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-blue-700 transition">
            Start de enquête
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
