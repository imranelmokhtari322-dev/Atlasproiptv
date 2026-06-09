import { Star, Calendar, Monitor } from "lucide-react";

export default function Advantages() {
  const cards = [
    {
      icon: <Star className="w-6 h-6 text-amber-500" />,
      bg: "bg-amber-50 border-amber-200",
      iconBg: "bg-amber-100 border-amber-200",
      title: "Qualité Premium",
      description: "Qualité de streaming 4K premium, quand vous voulez sur toutes vos chaînes préférées."
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100 border-blue-200",
      title: "Flexible",
      description: "Choisissez 3, 6 ou 12 mois. Totalement flexible et adapté à vos besoins."
    },
    {
      icon: <Monitor className="w-6 h-6 text-blue-500" />,
      bg: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100 border-blue-200",
      title: "Tous les Appareils",
      description: "Fonctionne sur Smart TV, Fire Stick, téléphone, tablette, PC et pratiquement toute box."
    }
  ];

  return (
    <section className="bg-white text-blue-900 py-16 border-b-2 border-blue-200" id="advantages-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, i) => (
            <div key={i} className={`p-6 rounded-2xl border ${card.bg} shadow-sm flex flex-col gap-4`}>
              <div className={`w-12 h-12 rounded-2xl ${card.iconBg} border flex items-center justify-center`}>
                {card.icon}
              </div>
              <h3 className="text-lg font-extrabold text-blue-900">{card.title}</h3>
              <p className="text-sm text-blue-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <span className="text-xs uppercase font-sans text-blue-600 font-bold tracking-widest bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-6 inline-block">
            23.000+ CLIENTS ATLAS PRO IPTV SATISFAITS
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-blue-900 leading-tight">
            Atlas Pro IPTV<br />Premium
          </h2>
        </div>

      </div>
    </section>
  );
}
