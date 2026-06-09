// v4 real logos
export default function ChannelSearch() {
  const channels = [
    { name: "TF1",      logo: "/assets/channels/tf1.svg",      color: "#001A65" },
    { name: "France 2", logo: "/assets/channels/france2.png",  color: "#E30D18" },
    { name: "France 3", logo: "/assets/channels/france3.png",  color: "#2E7D32" },
    { name: "Canal+",   logo: "/assets/channels/canalplus.svg",color: "#111111" },
    { name: "France 5", logo: "/assets/channels/france5.png",  color: "#0055A5" },
    { name: "M6",       logo: "/assets/channels/m6.png",       color: "#E6A800" },
    { name: "Arte",     logo: "/assets/channels/arte.png",     color: "#E2001A" },
    { name: "C8",       logo: "/assets/channels/c8.png",       color: "#009BDE" },
    { name: "W9",       logo: "/assets/channels/w9.svg",       color: "#52327C" },
    { name: "TMC",      logo: "/assets/channels/tmc.jpg",      color: "#E4007C" },
    { name: "BFM TV",   logo: "/assets/channels/bfmtv.jpg",   color: "#D80027" },
    { name: "Gulli",    logo: "/assets/channels/gulli.png",    color: "#F57C00" },
  ];

  const doubled = [...channels, ...channels];

  const bigNames = ["TF1","FRANCE 2","FRANCE 3","CANAL+","M6","ARTE","BFM TV","FRANCE 5","C8","W9","TMC","GULLI","NETFLIX","DISNEY+","CANAL+ CINÉMA"];
  const doubledNames = [...bigNames, ...bigNames];

  return (
    <section className="relative bg-blue-50 text-blue-900 py-14 border-b border-blue-200 overflow-hidden" id="channels-section">

      {/* Big scrolling names */}
      <div className="w-full overflow-hidden relative mb-12">
        <div className="animate-scroll whitespace-nowrap flex gap-16 py-3">
          {doubledNames.map((name, i) => (
            <span key={i} className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-blue-700 select-none flex-shrink-0 opacity-30">
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-[10px] uppercase font-sans text-blue-600 font-bold tracking-widest block mb-1">TV EN DIRECT</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-blue-900">Toutes vos chaînes préférées</h2>
        </div>

        {/* Auto-scrolling channel cards */}
        <div className="w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none" />
          <div className="animate-scroll-slow">
            <div className="flex gap-4 px-2 py-4">
              {doubled.map((ch, i) => (
                <div key={i} className="group relative flex-shrink-0 w-[155px] sm:w-[175px] cursor-pointer">
                  {/* Brand glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl scale-90 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: ch.color }}
                  />
                  {/* Card */}
                  <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-md group-hover:shadow-xl group-hover:scale-[1.06] transition-all duration-300 bg-white flex flex-col">
                    {/* Logo area — white bg, logo centered with padding */}
                    <div className="w-full h-[90px] flex items-center justify-center bg-white p-3">
                      <img
                        src={ch.logo}
                        alt={ch.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  {/* Shine sweep */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
