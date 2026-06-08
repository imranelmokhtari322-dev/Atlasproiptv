import { Channel, SportEvent, MediaItem, Testimonial, FAQItem, PricingSetup } from "./types";

export const CHANNELS_DATA: Channel[] = [
  // Movistar+ Premium (ES)
  { id: "movistar-laliga1",   name: "Movistar LaLiga UHD",        category: "ES",     playingNow: "LaLiga: Real Madrid vs Barcelona",    quality: "4K",  logoColor: "bg-sky-600" },
  { id: "movistar-laliga2",   name: "Movistar LaLiga 2 HD",       category: "ES",     playingNow: "LaLiga: Atletico vs Sevilla",          quality: "FHD", logoColor: "bg-sky-700" },
  { id: "movistar-laliga3",   name: "Movistar LaLiga 3 HD",       category: "ES",     playingNow: "LaLiga: Valencia vs Villarreal",       quality: "FHD", logoColor: "bg-sky-800" },
  { id: "movistar-champions", name: "Movistar Champions 4K",      category: "ES",     playingNow: "UEFA Champions League En Directo",     quality: "4K",  logoColor: "bg-blue-700" },
  { id: "movistar-estrenos",  name: "Movistar+ Estrenos UHD",     category: "ES",     playingNow: "Estreno: Culpa Tuya",                  quality: "4K",  logoColor: "bg-rose-600" },
  { id: "movistar-series",    name: "Movistar+ Series HD",        category: "ES",     playingNow: "Berlín: Temporada 2",                  quality: "FHD", logoColor: "bg-rose-700" },
  { id: "movistar-accion",    name: "Movistar+ Acción HD",        category: "ES",     playingNow: "Cine de Acción Premium",               quality: "FHD", logoColor: "bg-rose-800" },
  { id: "movistar-cine",      name: "Movistar+ Cine HD",          category: "ES",     playingNow: "La Sociedad de la Nieve",              quality: "FHD", logoColor: "bg-pink-700" },
  { id: "gol-play",           name: "Gol Play HD",                category: "ES",     playingNow: "LaLiga Highlights & Análisis",         quality: "FHD", logoColor: "bg-green-700" },

  // Premium Sports (SPORT)
  { id: "dazn-laliga",        name: "DAZN LaLiga HD",             category: "SPORT",  playingNow: "DAZN LaLiga: Betis vs Athletic",       quality: "FHD", logoColor: "bg-cyan-600" },
  { id: "dazn-f1",            name: "DAZN F1 4K",                 category: "SPORT",  playingNow: "Fórmula 1: GP de España En Directo",   quality: "4K",  logoColor: "bg-cyan-700" },
  { id: "dazn-box",           name: "DAZN Box Office UHD",        category: "SPORT",  playingNow: "Boxeo Premium: Velada del Año",        quality: "4K",  logoColor: "bg-cyan-800" },
  { id: "bein-laliga",        name: "beIN LaLiga HD",             category: "SPORT",  playingNow: "Resumen LaLiga Jornada 28",            quality: "FHD", logoColor: "bg-amber-600" },
  { id: "eurosport-1",        name: "Eurosport 1 4K",             category: "SPORT",  playingNow: "Vuelta a España - Etapa Reina",        quality: "4K",  logoColor: "bg-teal-600" },
  { id: "eurosport-2",        name: "Eurosport 2 HD",             category: "SPORT",  playingNow: "Tenis: Masters 1000 Madrid",           quality: "FHD", logoColor: "bg-teal-700" },
  { id: "movistar-deportes",  name: "Movistar Deportes HD",       category: "SPORT",  playingNow: "Deportes en Directo 24h",              quality: "FHD", logoColor: "bg-sky-900" },
  { id: "sky-sports-f1",      name: "Sky Sports F1 HD",           category: "SPORT",  playingNow: "F1: Análisis y Clasificación",         quality: "FHD", logoColor: "bg-red-900" },
  { id: "eleven-sports",      name: "Eleven Sports 4K",           category: "SPORT",  playingNow: "Premier League En Directo",            quality: "4K",  logoColor: "bg-orange-700" },

  // Premium Streaming / VOD (MOVIES)
  { id: "netflix-uhd",        name: "Netflix UHD",                category: "MOVIES", playingNow: "La Casa de Papel: Korea (VoD)",        quality: "4K",  logoColor: "bg-red-600" },
  { id: "hbo-max",            name: "Max (HBO) 4K",               category: "MOVIES", playingNow: "House of the Dragon T2 (VoD)",         quality: "4K",  logoColor: "bg-violet-800" },
  { id: "disney-plus",        name: "Disney+ 4K",                 category: "MOVIES", playingNow: "Star Wars: The Acolyte (VoD)",         quality: "4K",  logoColor: "bg-blue-800" },
  { id: "prime-video",        name: "Amazon Prime Video 4K",      category: "MOVIES", playingNow: "Zorro: Temporada 1 (VoD)",             quality: "4K",  logoColor: "bg-amber-500" },
  { id: "apple-tv",           name: "Apple TV+ HD",               category: "MOVIES", playingNow: "Severance: Temporada 2 (VoD)",         quality: "FHD", logoColor: "bg-gray-700" },
  { id: "movistar-plus-vod",  name: "Movistar+ Cine Premiere",    category: "MOVIES", playingNow: "Estrenos Exclusivos Movistar+",        quality: "4K",  logoColor: "bg-rose-600" },
];

export const SPORTS_EVENTS: SportEvent[] = [
  {
    id: "sp-1",
    title: "Fórmula 1: Gran Premio de España",
    category: "Fórmula 1",
    time: "Domingo a las 15:00 En Directo",
    channel: "Viaplay 1 / DAZN 4K",
    image: "/assets/sports/formule1.jpg"
  },
  {
    id: "sp-2",
    title: "LaLiga: Real Madrid vs Barcelona (El Clásico)",
    category: "Fútbol",
    time: "Domingo a las 21:00 En Directo",
    channel: "Movistar LaLiga UHD",
    image: "/assets/sports/voetbal.jpg"
  },
  {
    id: "sp-3",
    title: "Vuelta a España - Etapa Reina por los Pirineos",
    category: "Ciclismo",
    time: "Sábado desde las 12:30 En Directo",
    channel: "Eurosport 1 4K",
    image: "/assets/sports/wielrennen.jpg"
  },
  {
    id: "sp-4",
    title: "Final de la Champions League En Directo",
    category: "Fútbol",
    time: "El próximo sábado a las 21:00 En Directo",
    channel: "Antena 3 UHD / DAZN 4K",
    image: "/assets/sports/voetbal.jpg"
  },
  {
    id: "sp-5",
    title: "Roland Garros - Final Masculina",
    category: "Tenis",
    time: "Domingo a las 16:00 En Directo",
    channel: "Eurosport 1 & Eurosport 2",
    image: "/assets/sports/tennis.jpg"
  }
];

export const TOP_MOVIES: MediaItem[] = [
  { id: "mov-1", title: "La Sociedad de la Nieve",        type: "movie", image: "/assets/posters/la-sociedad-de-la-nieve.jpg", genre: "Drama / Supervivencia", rating: "4.9" },
  { id: "mov-2", title: "Culpa Mía",                      type: "movie", image: "/assets/posters/culpa-mia.jpg",               genre: "Romance / Drama",       rating: "4.8" },
  { id: "mov-3", title: "Culpa Tuya",                     type: "movie", image: "/assets/posters/culpa-tuya.jpg",              genre: "Romance / Thriller",    rating: "4.7" },
  { id: "mov-4", title: "El 47",                          type: "movie", image: "/assets/posters/el-47.jpg",                   genre: "Drama / Historia",      rating: "4.7" },
  { id: "mov-5", title: "Robot Dreams",                   type: "movie", image: "/assets/posters/robot-dreams.jpg",            genre: "Animación / Drama",     rating: "4.9" },
  { id: "mov-6", title: "Nowhere",                        type: "movie", image: "/assets/posters/nowhere.jpg",                 genre: "Thriller / Supervivencia", rating: "4.6" },
  { id: "mov-7", title: "Campeones",                      type: "movie", image: "/assets/posters/campeones.jpg",               genre: "Comedia / Deporte",     rating: "4.5" },
  { id: "mov-8", title: "El Maestro que Prometió el Mar", type: "movie", image: "/assets/posters/el-maestro.jpg",              genre: "Drama / Historia",      rating: "4.8" },
];

export const TOP_SHOWS: MediaItem[] = [
  { id: "show-1",  title: "La Casa de Papel",          type: "show", image: "/assets/tvshows/la-casa-de-papel.jpg",      genre: "Crimen / Drama (ES)",        rating: "4.9" },
  { id: "show-2",  title: "Élite",                     type: "show", image: "/assets/tvshows/elite.jpg",                 genre: "Drama / Thriller (ES)",      rating: "4.7" },
  { id: "show-3",  title: "Berlín",                    type: "show", image: "/assets/tvshows/berlin.jpg",                genre: "Crimen / Acción (ES)",       rating: "4.6" },
  { id: "show-4",  title: "La Chica de Nieve",         type: "show", image: "/assets/tvshows/la-chica-de-nieve.jpg",     genre: "Thriller / Misterio (ES)",   rating: "4.8" },
  { id: "show-5",  title: "Sky Rojo",                  type: "show", image: "/assets/tvshows/sky-rojo.jpg",              genre: "Crimen / Acción (ES)",       rating: "4.6" },
  { id: "show-6",  title: "Valeria",                   type: "show", image: "/assets/tvshows/valeria.jpg",               genre: "Comedia / Romance (ES)",     rating: "4.5" },
  { id: "show-7",  title: "Entrevías",                 type: "show", image: "/assets/tvshows/entrevias.jpg",             genre: "Drama / Crimen (ES)",        rating: "4.7" },
  { id: "show-8",  title: "Los Favoritos de Midas",    type: "show", image: "/assets/tvshows/los-favoritos-de-midas.jpg",genre: "Thriller / Drama (ES)",      rating: "4.6" },
  { id: "show-9",  title: "Vis a Vis",                 type: "show", image: "/assets/tvshows/vis-a-vis.jpg",             genre: "Drama / Thriller (ES)",      rating: "4.7" },
  { id: "show-10", title: "El Internado: Las Cumbres", type: "show", image: "/assets/tvshows/el-internado.jpg",          genre: "Misterio / Drama (ES)",      rating: "4.6" },
  { id: "show-11", title: "Intimidad",                 type: "show", image: "/assets/tvshows/intimidad.jpg",             genre: "Drama / Crimen (ES)",        rating: "4.5" },
  { id: "show-12", title: "Zorro",                     type: "show", image: "/assets/tvshows/zorro.jpg",                 genre: "Aventura / Acción (ES)",     rating: "4.5" },
];

export const TOP_SHOWS_INTL: MediaItem[] = [
  { id: "intl-1",  title: "Oppenheimer",            type: "movie", image: "/assets/posters/oppenheimer.jpg",           genre: "Historia / Drama",   rating: "5.0" },
  { id: "intl-2",  title: "Top Gun: Maverick",       type: "movie", image: "/assets/posters/top-gun-maverick.jpg",      genre: "Acción / Thriller",  rating: "4.9" },
  { id: "intl-3",  title: "Avatar: El Camino del Agua", type: "movie", image: "/assets/posters/avatar-2.jpg",           genre: "Sci-Fi / Aventura",  rating: "4.7" },
  { id: "intl-4",  title: "The Dark Knight",         type: "movie", image: "/assets/posters/the-dark-knight.jpg",       genre: "Acción / Crimen",    rating: "5.0" },
  { id: "intl-5",  title: "Inception",               type: "movie", image: "/assets/posters/inception.jpg",             genre: "Sci-Fi / Thriller",  rating: "4.9" },
  { id: "intl-6",  title: "Interstellar",             type: "movie", image: "/assets/posters/interstellar.jpg",          genre: "Sci-Fi / Drama",     rating: "4.9" },
  { id: "intl-7",  title: "Avengers: Endgame",        type: "movie", image: "/assets/posters/avengers-endgame.jpg",      genre: "Acción / Fantasía",  rating: "4.9" },
  { id: "intl-8",  title: "Titanic",                  type: "movie", image: "/assets/posters/titanic.jpg",               genre: "Romance / Drama",    rating: "4.9" },
  { id: "intl-9",  title: "Joker",                    type: "movie", image: "/assets/posters/joker.jpg",                 genre: "Drama / Crimen",     rating: "4.8" },
  { id: "intl-10", title: "Spider-Man: No Way Home",  type: "movie", image: "/assets/posters/spider-man-no-way-home.jpg",genre: "Acción / Aventura",  rating: "4.9" },
];

export const WHATSAPP_TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Carlos Martínez",
    avatar: "👨‍💻",
    date: "Ayer",
    message: "Hola soporte IPTVESPANA, quería deciros que la configuración en mi LG TV tardó menos de 3 minutos. ¡El stream de F1 es muy nítido sin buffering! 🏎️💨",
    replyTime: "12:31",
    isVerified: true
  },
  {
    id: "t-2",
    name: "María López",
    avatar: "👩‍🦰",
    date: "Hoy",
    message: "Muchísimas gracias por la respuesta rápida anoche en WhatsApp. Mi marido está encantado con todos los canales de LaLiga y yo veo las series españolas. ¡Totalmente recomendado!",
    replyTime: "10:14",
    isVerified: true
  },
  {
    id: "t-3",
    name: "Javier & Ana",
    avatar: "💑",
    date: "Hace 2 días",
    message: "El mejor IPTV que he tenido hasta ahora. Sin cortes durante El Clásico anoche. Y la app en el Firestick funciona rapidísimo.",
    replyTime: "18:45",
    isVerified: true
  },
  {
    id: "t-4",
    name: "Alejandro García",
    avatar: "👱‍♂️",
    date: "La semana pasada",
    message: "Es increíble la cantidad de canales 4K que tienen. Incluso todos los canales Sky Sports británicos funcionan sin retraso. Ya nunca más pagaré Movistar, demasiado caro.",
    replyTime: "14:20",
    isVerified: true
  },
  {
    id: "t-5",
    name: "Mohamed El Kadi",
    avatar: "🧔",
    date: "Hace 3 días",
    message: "Pedí el paquete y literalmente en 2 minutos recibí las credenciales por correo. Muy bien organizado, el soporte también responde de inmediato.",
    replyTime: "09:05",
    isVerified: true
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Qué es IPTVESPANA y cómo funciona exactamente?",
    answer: "IPTVESPANA es un proveedor de IPTV premium que transmite televisión a través de internet. Ya no necesitas antena ni cables de coaxial. Con nuestra suscripción obtienes acceso directo a través de una práctica app en tu Smart TV, teléfono, tablet u ordenador a más de 20.000+ canales en directo, incluyendo todos los canales españoles, canales deportivos (ESPN, Movistar+, DAZN) y una enorme biblioteca de películas y series (VOD)."
  },
  {
    id: "faq-2",
    question: "¿Es complicada la instalación y qué dispositivos son compatibles?",
    answer: "No, la instalación es muy sencilla y está lista en menos de 5 minutos. IPTVESPANA funciona en prácticamente cualquier dispositivo: Smart TV (Samsung, LG, Sony con apps como IPTV Smarters, Flix IPTV o IBOTV), Amazon Fire TV Stick, cajas Android TV, Apple TV, smartphones (iOS/Android), tablets, Chromecast y PC. Tras la compra te enviamos una guía clara paso a paso por correo, y nuestro soporte te ayuda directamente por WhatsApp si tienes alguna duda."
  },
  {
    id: "faq-3",
    question: "¿Estoy atado a un contrato o suscripción larga?",
    answer: "En absoluto. En IPTVESPANA utilizamos exclusivamente paquetes de prepago flexibles. Tú eliges si quieres ver 1, 3, 6 o 12 meses. Tras este período la suscripción se detiene automáticamente, a menos que elijas renovar. Sin domiciliaciones automáticas y sin renovaciones silenciosas. ¡No estás atado a nada!"
  },
  {
    id: "faq-4",
    question: "¿Qué tan rápido se activa mi cuenta IPTV?",
    answer: "¡Entregamos extremadamente rápido! Nuestros sistemas activan tu cuenta directamente al recibir el pago. Las credenciales (enlace de playlist M3U y detalles de la API Xtream Codes) se envían automáticamente en 3 a 5 minutos a tu dirección de correo. Si no has recibido nada en 10 minutos, comprueba tu carpeta de spam o envíanos un mensaje directo por WhatsApp."
  },
  {
    id: "faq-5",
    question: "¿Necesito velocidades de internet especiales para hacer streaming 4K/UHD sin buffering?",
    answer: "Para hacer streaming fluido en 4K/UHD recomendamos una conexión a internet estable de al menos 25 Mbps. Para streams HD/FHD con 15 Mbps es más que suficiente. Nuestros innovadores servidores utilizan tecnología de compresión avanzada y códecs H.265, lo que mantiene los streams estables y hace que el buffering sea prácticamente cosa del pasado."
  },
  {
    id: "faq-6",
    question: "¿Puedo usar la suscripción IPTVESPANA en varios dispositivos a la vez?",
    answer: "De forma estándar, nuestra suscripción es para 1 dispositivo a la vez (1 stream activo). Si quieres ver en varias televisiones o dispositivos simultáneamente en casa, puedes actualizar fácilmente a 2, 3 o 4 pantallas en nuestro configurador de precios con un gran descuento."
  },
  {
    id: "faq-7",
    question: "¿Qué métodos de pago aceptáis?",
    answer: "Ofrecemos métodos de pago muy seguros y de confianza. Puedes pagar cómodamente a través de PayPal, Creditcard (Visa/Mastercard), Bancontact y Transferencia bancaria."
  }
];

export const PRICING_MAPPING = {
  "3_months": {
    months: 3,
    bonusMonths: 0,
    pricePerMonth: 11.99,
    originalPricePerMonth: 14.99,
    hasDiscountTag: false,
    features: [
      "23.000+ Canales (ES/Int En Directo)",
      "80.000+ Películas y Series (VOD)",
      "4K/UHD & Calidad Ultra HDR",
      "Servidores Estables (99.9% Uptime)",
      "Soporte Premium WhatsApp 24/7",
      "M3U playlist y Xtream Codes compatible"
    ]
  },
  "6_months": {
    months: 6,
    bonusMonths: 0,
    pricePerMonth: 9.99,
    originalPricePerMonth: 14.99,
    hasDiscountTag: true,
    discountTagText: "POPULAR -33%",
    features: [
      "23.000+ Canales (ES/Int En Directo)",
      "80.000+ Películas y Series (VOD)",
      "4K/UHD & Calidad Ultra HDR",
      "Servidores Estables (99.9% Uptime)",
      "Soporte Premium WhatsApp 24/7",
      "M3U playlist y Xtream Codes compatible",
      "EPG Gratis (Guía de TV)"
    ]
  },
  "12_months": {
    months: 12,
    bonusMonths: 0,
    pricePerMonth: 7.50,
    originalPricePerMonth: 14.99,
    hasDiscountTag: true,
    discountTagText: "GRAN AHORRO -50%",
    features: [
      "23.000+ Canales (ES/Int En Directo)",
      "80.000+ Películas y Series (VOD)",
      "4K/UHD & Calidad Ultra HDR",
      "Servidores Estables (99.9% Uptime)",
      "Soporte Premium WhatsApp 24/7",
      "M3U playlist y Xtream Codes compatible",
      "EPG Gratis (Guía de TV)",
      "Catch-up (TV a la carta)"
    ]
  },
  "12_plus_3_months": {
    months: 12,
    bonusMonths: 3,
    pricePerMonth: 5.20,
    originalPricePerMonth: 14.99,
    hasDiscountTag: true,
    discountTagText: "OFERTA TEMPORAL: 12+3 MESES GRATIS",
    features: [
      "15 MESES EN TOTAL (compra 12, 3 gratis)",
      "23.000+ Canales (ES/Int En Directo)",
      "80.000+ Películas y Series (VOD)",
      "4K/UHD & Calidad Ultra HDR",
      "Servidores Estables (99.9% Uptime)",
      "Soporte Premium WhatsApp 24/7",
      "M3U playlist y Xtream Codes",
      "EPG Gratis (Guía de TV)",
      "Catch-up Completo y Pausa en Directo"
    ]
  }
};
