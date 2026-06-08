export default function ChannelSearch() {
  const channelLogos = [
    { name: "Movistar Plus+",           logo: "/assets/channels/movistar-plus.svg",     invert: false },
    { name: "LaLiga TV por M+",        logo: "/assets/channels/laliga-tv.svg",          invert: false },
    { name: "Liga de Campeones por M+",logo: "/assets/channels/liga-campeones.svg",     invert: false },
    { name: "Estrenos por M+",         logo: "/assets/channels/estrenos-movistar.svg",  invert: false },
    { name: "DAZN LaLiga",             logo: "/assets/channels/dazn-laliga.svg",        invert: false },
    { name: "Star Channel",            logo: "/assets/channels/star-channel.svg",       invert: false },
    { name: "Warner TV",               logo: "/assets/channels/warner-tv.svg",          invert: false },
    { name: "AXN",                     logo: "/assets/channels/axn.svg",                invert: false },
    { name: "Calle 13",                logo: "/assets/channels/calle13.svg",            invert: false },
    { name: "Canal Hollywood",         logo: "/assets/channels/canal-hollywood.svg",    invert: false },
    { name: "National Geographic",     logo: "/assets/channels/national-geographic.svg",invert: false },
    { name: "Syfy",                    logo: "/assets/channels/syfy.svg",               invert: false },
  ];

  const doubled = [...channelLogos, ...channelLogos];

  const bigNames = ["MOVISTAR PLUS+","LALIGA TV","LIGA DE CAMPEONES","DAZN LALIGA","ESTRENOS M+","STAR CHANNEL","WARNER TV","AXN","CALLE 13","CANAL HOLLYWOOD","NATIONAL GEOGRAPHIC","SYFY"];
  const doubledNames = [...bigNames, ...bigNames];

  return (
    <section className="relative bg-green-50 text-green-900 py-14 border-b border-green-200 overflow-hidden" id="channels-section">

      {/* Big scrolling names */}
      <div className="w-full overflow-hidden relative mb-12">
        <div className="animate-scroll whitespace-nowrap flex gap-16 py-3">
          {doubledNames.map((name, i) => (
            <span key={i} className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-green-700 select-none flex-shrink-0 opacity-30">
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-[10px] uppercase font-sans text-green-600 font-bold tracking-widest block mb-1">TV EN DIRECTO</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-green-900">Todos tus canales favoritos</h2>
        </div>

        {/* Auto-scrolling logos */}
        <div className="w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-green-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-green-50 to-transparent z-10 pointer-events-none" />
          <div className="animate-scroll-slow">
            <div className="flex gap-5 px-2">
              {doubled.map((ch, i) => (
                <div key={i} className="bg-green-50 border border-green-200 rounded-2xl flex items-center justify-center w-[140px] h-[90px] sm:w-[160px] sm:h-[100px] hover:bg-green-100 hover:scale-105 transition-all duration-200 cursor-pointer flex-shrink-0">
                  <img src={ch.logo} alt={ch.name} className="w-[75%] h-[75%] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
