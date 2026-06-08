import { MessageSquare } from "lucide-react";
import { trackWhatsAppConversion } from "../utils/gtag";

interface Review {
  name: string;
  avatar: string;
  time: string;
  message: string;
  reply: string;
}

const REVIEWS: Review[] = [
  {
    name: "Carlos Martínez",
    avatar: "CM",
    time: "12:31",
    message: "Hola! La config en mi LG TV tardó menos de 3 minutos 🔥 El stream de F1 es muy nítido sin buffering!",
    reply: "¡Qué bueno Carlos! Cualquier cosa aquí estamos 24/7 ✅",
  },
  {
    name: "María López",
    avatar: "ML",
    time: "10:14",
    message: "Mi marido ve toda la LaLiga y yo las series españolas. Totalmente recomendado 💯",
    reply: "Gracias María! Disfruten mucho 😊",
  },
  {
    name: "Javier & Ana",
    avatar: "JA",
    time: "18:45",
    message: "Sin cortes durante El Clásico anoche 🙌 La app en el Firestick va rapidísimo.",
    reply: "Perfecto! Eso es lo que queremos escuchar ⚽",
  },
  {
    name: "Alejandro García",
    avatar: "AG",
    time: "14:20",
    message: "Increíble la cantidad de canales 4K. Ya nunca más pagaré Movistar, demasiado caro 😂",
    reply: "Bienvenido a IPTVESPANA! Ahorra y disfruta más 🎉",
  },
  {
    name: "Mohamed El Kadi",
    avatar: "MK",
    time: "09:05",
    message: "En 2 minutos recibí las credenciales por correo. Muy bien organizado 👌",
    reply: "Activación instantánea siempre! Gracias por confiar en nosotros ✅",
  },
  {
    name: "Sofía Ruiz",
    avatar: "SR",
    time: "21:10",
    message: "Llevo 6 meses con vosotros y ningún problema. El mejor IPTV de España sin duda 🏆",
    reply: "6 meses y contando! Gracias Sofía 💚",
  },
  {
    name: "Pedro Sánchez",
    avatar: "PS",
    time: "16:33",
    message: "Champions League en 4K UHD es una pasada. La imagen es perfecta 📺",
    reply: "Champions en 4K como merece verse! 🏆⚽",
  },
  {
    name: "Laura Fernández",
    avatar: "LF",
    time: "11:52",
    message: "Instalación súper fácil en mi Samsung Smart TV. En 5 min ya estaba viendo todo 😍",
    reply: "Así de fácil tiene que ser! Disfruta Laura 📺✨",
  },
  {
    name: "Antonio Morales",
    avatar: "AM",
    time: "20:07",
    message: "Fórmula 1 sin buffering en directo. Esto es lo que necesitaba. 10/10 🏎️",
    reply: "F1 a máxima velocidad, sin cortes! Gracias Antonio 🏎️🔥",
  },
  {
    name: "Isabel Castro",
    avatar: "IC",
    time: "08:44",
    message: "El soporte de WhatsApp responde rapidísimo. Me ayudaron en 2 minutos 🙏",
    reply: "Siempre disponibles para ayudarte! 24/7 aquí 💚",
  },
  {
    name: "Roberto Jiménez",
    avatar: "RJ",
    time: "15:19",
    message: "Contraté el pack de 12 meses. Una ganga total comparado con el cable 💸",
    reply: "La mejor inversión del año! Bienvenido Roberto 🎉",
  },
  {
    name: "Carmen Díaz",
    avatar: "CD",
    time: "22:05",
    message: "Las series españolas en Netflix, Movistar+ y las internacionales. Todo en un sitio 🤩",
    reply: "Todo el entretenimiento en un solo servicio 📺💚",
  },
  {
    name: "Miguel Torres",
    avatar: "MT",
    time: "13:38",
    message: "Vuelta a España y Wimbledon sin cortes. Perfecto para los deportes 🚴🎾",
    reply: "Todos los deportes en directo sin interrupciones! 🏆",
  },
];

const ROW1 = REVIEWS.slice(0, 7);
const ROW2 = REVIEWS.slice(6, 13);

function WhatsAppCard({ review }: { review: Review }) {
  return (
    <div className="flex-shrink-0 w-[280px] rounded-2xl overflow-hidden shadow-xl" style={{ background: "#0b1f13" }}>
      {/* WhatsApp header */}
      <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#1a2e1e" }}>
        <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
          {review.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-bold text-sm leading-tight truncate">{review.name}</p>
          <p className="text-green-400 text-[10px]">✓ Cliente verificado</p>
        </div>
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="#25D366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.858L.057 23.882a.5.5 0 0 0 .614.614l6.086-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.497-5.24-1.369l-.376-.214-3.896.935.968-3.818-.232-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </div>

      {/* Chat body */}
      <div className="px-3 py-3 flex flex-col gap-2" style={{ background: "#0d1b12" }}>
        {/* Customer message */}
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl px-3 py-2" style={{ background: "#1e2e22" }}>
            <p className="text-white text-[12px] leading-relaxed">{review.message}</p>
            <p className="text-right text-[9px] text-green-500 mt-1">{review.time} ✓✓</p>
          </div>
        </div>

        {/* IPTVESPANA reply */}
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl px-3 py-2" style={{ background: "#025c4b" }}>
            <p className="text-[9px] text-green-300 font-bold mb-0.5">IPTVESPANA</p>
            <p className="text-white text-[12px] leading-relaxed">{review.reply}</p>
            <p className="text-right text-[9px] text-green-400 mt-1">{review.time} ✓✓</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ reviews, reverse = false }: { reviews: Review[]; reverse?: boolean }) {
  const doubled = [...reviews, ...reviews];
  return (
    <div style={{ overflowX: "hidden", width: "100%", padding: "8px 0" }}>
      <div className={reverse ? "animate-scroll-right" : "animate-scroll"} style={{ display: "flex", gap: 16, alignItems: "stretch" }}>
        {doubled.map((r, i) => (
          <WhatsAppCard key={i} review={r} />
        ))}
      </div>
    </div>
  );
}

export default function WhatsAppReviews() {
  return (
    <section className="bg-gradient-to-br from-emerald-800 to-green-900 text-white py-16 border-b-2 border-green-700" style={{ overflowX: "hidden" }} id="reviews-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-sans text-emerald-300 font-bold tracking-widest bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-3 inline-block">23.000+ CLIENTES SATISFECHOS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-green-200 text-sm sm:text-base">Mensajes reales de clientes satisfechos por WhatsApp.</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%" }}>
        <MarqueeRow reviews={ROW1} />
        <MarqueeRow reviews={ROW2} reverse />
      </div>

      <div className="mt-10 text-center">
        <p className="text-xs text-green-200 mb-4 inline-flex items-center gap-1.5 justify-center">
          <MessageSquare className="w-4 h-4" /> ¿Tienes una pregunta y quieres hablar en directo con soporte?
        </p><br />
        <a href="https://wa.me/447449708976" target="_blank" rel="noreferrer" onClick={trackWhatsAppConversion}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 text-green-900 hover:bg-amber-500 font-bold text-xs tracking-wide transition-all uppercase shadow-lg">
          Iniciar Chat de WhatsApp &rarr;
        </a>
      </div>

      {/* Payment methods */}
      <div className="max-w-3xl mx-auto px-4 mt-14">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300 font-sans bg-white/10 border border-white/20 px-3 py-1 rounded-full inline-block mb-3">Métodos de Pago</span>
          <h3 className="text-2xl font-extrabold font-display text-white">Paga como quieras</h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <path d="M7 5h7a5 5 0 0 1 0 10H9l-1 5H5L7 5z" fill="white" fillOpacity="0.9"/>
              <path d="M10 10h6a3 3 0 0 1 0 6h-4l-.5 3H9l1-9z" fill="white" fillOpacity="0.5"/>
            </svg>
            <span className="text-sm font-extrabold text-white">PayPal</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
            <svg viewBox="0 0 32 12" className="h-4 w-auto">
              <text x="0" y="10" fontSize="12" fontWeight="900" fill="white" fontFamily="Arial" letterSpacing="1.5">VISA</text>
            </svg>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
            <svg viewBox="0 0 34 22" className="h-5 w-auto">
              <circle cx="11" cy="11" r="10" fill="white" fillOpacity="0.9"/>
              <circle cx="23" cy="11" r="10" fill="white" fillOpacity="0.5"/>
            </svg>
            <span className="text-sm font-extrabold text-white">Mastercard</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="white" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 8h20L12 3z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 8v9M9 8v9M15 8v9M19 8v9"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 17h20v3H2z"/>
            </svg>
            <span className="text-sm font-extrabold text-white">Transferencia Bancaria</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <rect width="24" height="24" rx="5" fill="white" fillOpacity="0.15"/>
              <text x="5" y="18" fontSize="16" fontWeight="900" fill="white" fontFamily="Arial">B</text>
            </svg>
            <span className="text-sm font-extrabold text-white">Bizum</span>
          </div>
        </div>
      </div>
    </section>
  );
}
