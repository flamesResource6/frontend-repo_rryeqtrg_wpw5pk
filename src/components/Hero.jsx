import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-200/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-24 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">Persoonlijk advies</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Hallo!
            </h1>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Ik ben jouw persoonlijke huidverzorgingsexpert, gespecialiseerd in het bieden van op maat gemaakt huidverzorgingsadvies en het aanbevelen van producten die perfect passen bij jouw unieke huidtype.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#quiz" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow-md hover:bg-blue-700 transition">
                Begin met de enquête
              </a>
              <a href="#mission" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-gray-800 font-semibold hover:bg-gray-50 transition">
                Meer lezen
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-1 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-white grid place-items-center">
                <div className="text-center px-6">
                  <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shadow-lg mb-4" />
                  <p className="text-sm text-gray-500">Jouw huid. Jouw plan. Jouw glow.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur rounded-xl shadow-md px-4 py-3 text-sm text-gray-700">
              Gepersonaliseerd & deskundig
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
