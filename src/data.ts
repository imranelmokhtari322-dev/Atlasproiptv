import { Channel, SportEvent, MediaItem, Testimonial, FAQItem, PricingSetup } from "./types";

export const CHANNELS_DATA: Channel[] = [
  // French channels (FR)
  { id: "tf1", name: "TF1 UHD", category: "FR", playingNow: "Journal de 20h - En direct", quality: "4K", logoColor: "bg-blue-600" },
  { id: "france2", name: "France 2 HD", category: "FR", playingNow: "Complément d'enquête", quality: "FHD", logoColor: "bg-blue-800" },
  { id: "france3", name: "France 3 HD", category: "FR", playingNow: "Plus belle la vie", quality: "FHD", logoColor: "bg-green-700" },
  { id: "canalplus", name: "Canal+ UHD", category: "FR", playingNow: "Le Grand Journal - En direct", quality: "4K", logoColor: "bg-gray-900" },
  { id: "france5", name: "France 5 HD", category: "FR", playingNow: "C dans l'air", quality: "FHD", logoColor: "bg-red-600" },
  { id: "m6", name: "M6 UHD", category: "FR", playingNow: "Mariés au premier regard", quality: "4K", logoColor: "bg-orange-500" },
  { id: "arte", name: "Arte HD", category: "FR", playingNow: "Le dessous des cartes", quality: "FHD", logoColor: "bg-gray-700" },
  { id: "c8", name: "C8 HD", category: "FR", playingNow: "Touche pas à mon poste !", quality: "FHD", logoColor: "bg-cyan-600" },
  { id: "w9", name: "W9 HD", category: "FR", playingNow: "Les Marseillais", quality: "FHD", logoColor: "bg-purple-600" },
  { id: "tmc", name: "TMC HD", category: "FR", playingNow: "Quotidien avec Yann Barthès", quality: "FHD", logoColor: "bg-pink-600" },
  { id: "bfmtv", name: "BFM TV HD", category: "FR", playingNow: "BFM Story - En direct", quality: "FHD", logoColor: "bg-red-700" },
  { id: "gulli", name: "Gulli HD", category: "FR", playingNow: "Miraculous - En cours", quality: "FHD", logoColor: "bg-yellow-500" },

  // Sports Channels (SPORT)
  { id: "canal-sport", name: "Canal+ Sport UHD", category: "SPORT", playingNow: "Ligue 1 : PSG - Marseille En direct", quality: "4K", logoColor: "bg-gray-900", sourceIcon: "/assets/channels/eurosport.png" },
  { id: "eurosport-1", name: "Eurosport 1 4K", category: "SPORT", playingNow: "Roland Garros - Quart de finale En direct", quality: "4K", logoColor: "bg-teal-600", sourceIcon: "/assets/channels/eurosport.png" },
  { id: "eurosport-2", name: "Eurosport 2 HD", category: "SPORT", playingNow: "Tour de France - Étape 8 En direct", quality: "FHD", logoColor: "bg-teal-700", sourceIcon: "/assets/channels/eurosport.png" },
  { id: "rmc-sport", name: "RMC Sport 1 UHD", category: "SPORT", playingNow: "Champions League - Quart de finale En direct", quality: "4K", logoColor: "bg-blue-700", sourceIcon: "/assets/channels/espn.png" },
  { id: "rmc-sport2", name: "RMC Sport 2 HD", category: "SPORT", playingNow: "NBA Play-offs En direct", quality: "FHD", logoColor: "bg-blue-800", sourceIcon: "/assets/channels/espn.png" },
  { id: "f1tv-pro", name: "F1 TV Pro HD", category: "SPORT", playingNow: "Grand Prix de Monaco - Pit Lane En direct", quality: "FHD", logoColor: "bg-red-600", sourceIcon: "/assets/channels/f1.png" },
  { id: "dazn", name: "DAZN Sports 4K", category: "SPORT", playingNow: "Ligue des Champions En direct", quality: "4K", logoColor: "bg-blue-900", sourceIcon: "/assets/channels/dazn.png" },
  { id: "sky-sports-f1", name: "Sky Sports F1 HD", category: "SPORT", playingNow: "Formule 1 : Analyse post-course", quality: "FHD", logoColor: "bg-red-900", sourceIcon: "/assets/channels/sky-sports.png" },

  // Movies / Streaming VoD (MOVIES)
  { id: "netflix-uhd", name: "Netflix UHD Hub", category: "MOVIES", playingNow: "Lupin Saison 4 (VoD)", quality: "4K", logoColor: "bg-neutral-800" },
  { id: "canalplus-cinema", name: "Canal+ Cinéma 4K", category: "MOVIES", playingNow: "Le Comte de Monte-Cristo (VoD)", quality: "4K", logoColor: "bg-gray-900" },
  { id: "disney-plus", name: "Disney+ 4K Hub", category: "MOVIES", playingNow: "Vaiana 2 (VoD)", quality: "4K", logoColor: "bg-blue-900" },
  { id: "prime-video", name: "Amazon Prime 4K", category: "MOVIES", playingNow: "Reacher S3 (VoD)", quality: "4K", logoColor: "bg-sky-700" },
];

export const SPORTS_EVENTS: SportEvent[] = [
  {
    id: "sp-1",
    title: "Formule 1 : Grand Prix de Monaco",
    category: "Formule 1",
    time: "Dimanche à 15h00 En direct",
    channel: "Viaplay 1 / Ziggo Sport UHD",
    image: "/assets/sports/formule1.jpg"
  },
  {
    id: "sp-2",
    title: "Eredivisie : Feyenoord vs Ajax (Le Classique)",
    category: "Football",
    time: "Dimanche à 14h30 En direct",
    channel: "ESPN 1 UHD",
    image: "/assets/sports/voetbal.jpg"
  },
  {
    id: "sp-3",
    title: "Giro d'Italia - Étape reine à travers les Alpes",
    category: "Cyclisme",
    time: "Samedi dès 12h30 En direct",
    channel: "Eurosport 1 4K",
    image: "/assets/sports/wielrennen.jpg"
  },
  {
    id: "sp-4",
    title: "Finale Champions League En direct",
    category: "Football",
    time: "Samedi prochain à 21h00 En direct",
    channel: "RTL 7 UHD / SBS 6 UHD",
    image: "/assets/sports/voetbal.jpg"
  },
  {
    id: "sp-5",
    title: "Roland Garros - Finale Hommes",
    category: "Tennis",
    time: "Dimanche à 16h00 En direct",
    channel: "Eurosport 1 & Eurosport 2",
    image: "/assets/sports/tennis.jpg"
  }
];

export const TOP_MOVIES: MediaItem[] = [
  { id: "mov-1",  title: "Le Comte de Monte-Cristo",                  type: "movie", image: "/assets/posters/monte-cristo.jpg",             genre: "Action / Drame",          rating: "4.9" },
  { id: "mov-2",  title: "Un p'tit truc en plus",                     type: "movie", image: "/assets/posters/ptit-truc.jpg",                genre: "Comédie / Famille",       rating: "4.8" },
  { id: "mov-3",  title: "L'Amour ouf",                               type: "movie", image: "/assets/posters/amour-ouf.jpg",                genre: "Drame / Romance",         rating: "4.8" },
  { id: "mov-4",  title: "Emilia Pérez",                              type: "movie", image: "/assets/posters/emilia-perez.jpg",             genre: "Crime / Musical",         rating: "4.7" },
  { id: "mov-5",  title: "La Substance",                              type: "movie", image: "/assets/posters/la-substance.jpg",             genre: "Horreur / Drame",         rating: "4.8" },
  { id: "mov-6",  title: "Anatomie d'une chute",                      type: "movie", image: "/assets/posters/anatomie-chute.jpg",           genre: "Thriller / Drame",        rating: "4.9" },
  { id: "mov-7",  title: "Astérix & Obélix : L'Empire du Milieu",    type: "movie", image: "/assets/posters/asterix.jpg",                  genre: "Comédie / Aventure",      rating: "4.6" },
  { id: "mov-8",  title: "Les Trois Mousquetaires : D'Artagnan",     type: "movie", image: "/assets/posters/mousquetaires-dartagnan.jpg",  genre: "Action / Aventure",       rating: "4.7" },
  { id: "mov-9",  title: "Les Trois Mousquetaires : Milady",         type: "movie", image: "/assets/posters/mousquetaires-milady.jpg",     genre: "Action / Aventure",       rating: "4.7" },
  { id: "mov-10", title: "Intouchables",                              type: "movie", image: "/assets/posters/intouchables.jpg",             genre: "Comédie / Drame",         rating: "4.9" },
  { id: "mov-11", title: "Le Deuxième Acte",                          type: "movie", image: "/assets/posters/deuxieme-acte.jpg",            genre: "Comédie / Méta",          rating: "4.5" },
  { id: "mov-12", title: "Diamant brut",                              type: "movie", image: "/assets/posters/diamant-brut.jpg",             genre: "Drame / Société",         rating: "4.6" },
  { id: "mov-13", title: "Mon crime",                                 type: "movie", image: "/assets/posters/mon-crime.jpg",                genre: "Comédie / Policier",      rating: "4.6" },
  { id: "mov-14", title: "Les Misérables",                            type: "movie", image: "/assets/posters/les-miserables.jpg",           genre: "Drame / Policier",        rating: "4.8" },
  { id: "mov-15", title: "Bac Nord",                                  type: "movie", image: "/assets/posters/bac-nord.jpg",                 genre: "Policier / Thriller",     rating: "4.5" },
];

export const TOP_SHOWS: MediaItem[] = [
  { id: "show-1", title: "Lupin (Saison 4)",          type: "show", image: "/assets/tvshows/lupin.jpg",          genre: "Crime / Thriller",        rating: "4.9" },
  { id: "show-2", title: "Le Bureau des Légendes",    type: "show", image: "/assets/tvshows/bureau-legendes.jpg", genre: "Espionnage / Drame",      rating: "4.8" },
  { id: "show-3", title: "Dix Pour Cent",             type: "show", image: "/assets/tvshows/dix-pour-cent.png",  genre: "Comédie / Drame",         rating: "4.7" },
  { id: "show-4", title: "Validé (Saison 3)",         type: "show", image: "/assets/tvshows/valide.jpg",         genre: "Drame / Musique",         rating: "4.6" },
  { id: "show-5", title: "HPI (Saison 4)",            type: "show", image: "/assets/tvshows/hpi.jpg",            genre: "Policier / Comédie",      rating: "4.7" },
  { id: "show-6", title: "En thérapie",               type: "show", image: "/assets/tvshows/en-therapie.png",    genre: "Drame / Psychologie",     rating: "4.8" },
  { id: "show-7", title: "Fais pas ci, fais pas ça",  type: "show", image: "/assets/tvshows/fais-pas-ci.jpg",   genre: "Comédie familiale",       rating: "4.5" },
];

export const TOP_SHOWS_INTL: MediaItem[] = [
  { id: "intl-1", title: "Squid Game S2",           type: "show", image: "/assets/tvshows-intl/squid-game-s2.png",  genre: "Thriller / Drame",        rating: "4.8" },
  { id: "intl-2", title: "La Casa de Papel S5",   type: "show", image: "/assets/tvshows-intl/casa-papel.jpg",    genre: "Action / Crime",          rating: "4.8" },
  { id: "intl-3", title: "Stranger Things S4",    type: "show", image: "/assets/tvshows-intl/stranger-things.jpg",genre: "Sci-Fi / Horreur",        rating: "4.9" },
  { id: "intl-4", title: "Wednesday S2",          type: "show", image: "/assets/tvshows-intl/wednesday.jpg",     genre: "Fantaisie / Comédie",     rating: "4.7" },
  { id: "intl-5", title: "Emily in Paris S4",     type: "show", image: "/assets/tvshows-intl/emily-paris.jpg",   genre: "Comédie / Romance",       rating: "4.5" },
  { id: "intl-6", title: "Narcos S3",             type: "show", image: "/assets/tvshows-intl/narcos.jpg",        genre: "Crime / Drame",           rating: "4.8" },
  { id: "intl-7", title: "Dark (Saison 3)",       type: "show", image: "/assets/tvshows-intl/dark.jpg",          genre: "Sci-Fi / Mystère",        rating: "5.0" },
  { id: "intl-8", title: "La Casa de Papel: Berlin",type: "show",image: "/assets/tvshows-intl/berlin.jpg",       genre: "Action / Thriller",       rating: "4.6" },
  { id: "intl-9", title: "Elite (Saison 8)",      type: "show", image: "/assets/tvshows-intl/elite.jpg",         genre: "Drame / Thriller",        rating: "4.5" },
  { id: "intl-10",title: "Peaky Blinders S6",     type: "show", image: "/assets/tvshows-intl/peaky-blinders.jpg",genre: "Crime / Historique",      rating: "4.9" },
];

export const WHATSAPP_TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Kees van der Velde",
    avatar: "👨‍💻",
    date: "Hier",
    message: "Bonjour ATlas pro support, je voulais juste vous faire savoir que la configuration sur ma TV LG a réussi en 3 minutes. Le stream F1 est très net sans buffering ! 🏎️💨",
    replyTime: "12:31",
    isVerified: true
  },
  {
    id: "t-2",
    name: "Anouk de Bruijn",
    avatar: "👩‍🦰",
    date: "Aujourd'hui",
    message: "Merci beaucoup pour la réponse rapide hier soir sur WhatsApp. Mon mari est ravi de toutes les chaînes ESPN et moi je regarde des films. Vraiment recommandé !",
    replyTime: "10:14",
    isVerified: true
  },
  {
    id: "t-3",
    name: "Jeroen & Lieke",
    avatar: "💑",
    date: "Il y a 2 jours",
    message: "Meilleur IPTV que j'ai eu jusqu'à présent. Aucun problème pendant la Champions League hier soir. Et l'application sur le Firestick fonctionne super vite.",
    replyTime: "18:45",
    isVerified: true
  },
  {
    id: "t-4",
    name: "Sander Verstappen",
    avatar: "👱‍♂️",
    date: "La semaine dernière",
    message: "Vraiment incroyable combien de chaînes 4K vous avez. Même toutes les chaînes Sky Sports britanniques tournent sans délai. Jamais plus de service coûteux pour moi.",
    replyTime: "14:20",
    isVerified: true
  },
  {
    id: "t-5",
    name: "Mohamed El Kadi",
    avatar: "🧔",
    date: "Il y a 3 jours",
    message: "Forfait commandé et littéralement en 2 minutes j'ai reçu mes identifiants par mail. Très bien organisé, le support répond aussi immédiatement.",
    replyTime: "09:05",
    isVerified: true
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Qu'est-ce que ATlas pro IPTV et comment ça fonctionne exactement ?",
    answer: "Atlas Pro IPTV est un fournisseur IPTV premium qui diffuse la télévision via Internet. Vous n'avez plus besoin d'antenne ni de câbles coaxiaux. Avec notre abonnement, vous accédez directement via une application pratique sur votre Smart TV, téléphone, tablette ou ordinateur à plus de 23 000 chaînes en direct, dont toutes les chaînes françaises (TF1, France 2, Canal+, M6, BFM TV…), les chaînes sportives (RMC Sport, Eurosport, Canal+ Sport) et une immense bibliothèque de films et de séries (VOD)."
  },
  {
    id: "faq-2",
    question: "L'installation est-elle compliquée et quels appareils sont supportés ?",
    answer: "Non, l'installation est très simple et se fait en moins de 5 minutes ! ATlas pro fonctionne sur pratiquement tous les appareils : Smart TV (Samsung, LG, Sony avec des applications comme IPTV Smarters, Flix IPTV ou IBOTV), Amazon Fire TV Stick, box Android TV, Apple TV, smartphones (iOS/Android), tablettes, Chromecast et PC. Après la commande, nous vous envoyons un guide clair étape par étape par e-mail, et notre support vous aide directement via WhatsApp si vous rencontrez des difficultés."
  },
  {
    id: "faq-3",
    question: "Suis-je lié à un contrat ou abonnement de longue durée ?",
    answer: "Absolument pas. Chez ATlas pro, nous proposons exclusivement des forfaits prépayés flexibles. Vous choisissez vous-même si vous souhaitez regarder pendant 1, 3, 6 ou 12 mois. Après cette période, l'abonnement s'arrête automatiquement, sauf si vous choisissez de le renouveler. Pas de prélèvements automatiques et pas de reconduction tacite. Vous n'êtes donc engagé à rien !"
  },
  {
    id: "faq-4",
    question: "En combien de temps mon compte IPTV sera-t-il activé ?",
    answer: "Nous livrons extrêmement rapidement ! Nos systèmes activent votre compte directement après réception du paiement. Les identifiants de connexion (lien de playlist M3U et détails du serveur Xtream Codes API) sont envoyés automatiquement à votre adresse e-mail dans les 3 à 5 minutes. Si vous n'avez rien reçu dans les 10 minutes, vérifiez votre dossier spam ou envoyez-nous directement un message via WhatsApp !"
  },
  {
    id: "faq-5",
    question: "Ai-je besoin de vitesses Internet spéciales pour un streaming 4K/UHD sans buffering ?",
    answer: "Pour un streaming fluide en 4K/UHD, nous recommandons une connexion Internet stable d'au moins 25 Mbps. Pour les streams HD/FHD, 15 Mbps est largement suffisant. Nos serveurs innovants utilisent une technologie de compression avancée et des codecs H.265, ce qui maintient les streams stables et rend le buffering pratiquement inexistant."
  },
  {
    id: "faq-6",
    question: "Puis-je utiliser l'abonnement ATlas pro sur plusieurs appareils en même temps ?",
    answer: "Par défaut, notre abonnement est adapté à 1 appareil à la fois (1 stream actif). Si vous souhaitez regarder sur plusieurs TV ou appareils simultanément chez vous, vous pouvez facilement passer à 2, 3 ou 4 écrans pour tout votre foyer à prix réduit dans notre configurateur de tarifs."
  },
  {
    id: "faq-7",
    question: "Quels modes de paiement acceptez-vous ?",
    answer: "Comme nous nous adressons au marché français, nous proposons des méthodes de paiement sûres et fiables. Vous pouvez payer via Carte Bancaire (Visa/Mastercard/CB), PayPal et Virement bancaire. Le paiement est 100% sécurisé et vos identifiants vous sont envoyés en quelques minutes après confirmation."
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
      "23 000+ Chaînes (FR/Int En direct)",
      "80 000+ Films & Séries (VOD)",
      "Qualité 4K/UHD & Ultra HDR",
      "Serveurs Stables (99,9% disponibilité)",
      "Support Premium WhatsApp 24/7",
      "M3U playlist & Xtream Codes supportés"
    ]
  },
  "6_months": {
    months: 6,
    bonusMonths: 0,
    pricePerMonth: 9.99,
    originalPricePerMonth: 14.99,
    hasDiscountTag: true,
    discountTagText: "POPULAIRE -33%",
    features: [
      "23 000+ Chaînes (FR/Int En direct)",
      "80 000+ Films & Séries (VOD)",
      "Qualité 4K/UHD & Ultra HDR",
      "Serveurs Stables (99,9% disponibilité)",
      "Support Premium WhatsApp 24/7",
      "M3U playlist & Xtream Codes supportés",
      "EPG Gratuit (Guide TV)"
    ]
  },
  "12_months": {
    months: 12,
    bonusMonths: 0,
    pricePerMonth: 7.50,
    originalPricePerMonth: 14.99,
    hasDiscountTag: true,
    discountTagText: "GRANDE ÉCONOMIE -50%",
    features: [
      "23 000+ Chaînes (FR/Int En direct)",
      "80 000+ Films & Séries (VOD)",
      "Qualité 4K/UHD & Ultra HDR",
      "Serveurs Stables (99,9% disponibilité)",
      "Support Premium WhatsApp 24/7",
      "M3U playlist & Xtream Codes supportés",
      "EPG Gratuit (Guide TV)",
      "Catch-up (Replay)"
    ]
  },
  "12_plus_3_months": {
    months: 12,
    bonusMonths: 3,
    pricePerMonth: 5.20,
    originalPricePerMonth: 14.99,
    hasDiscountTag: true,
    discountTagText: "OFFRE TEMPORAIRE : 12+3 MOIS GRATUITS",
    features: [
      "15 MOIS AU TOTAL (12 achetés, 3 offerts)",
      "23 000+ Chaînes (FR/Int En direct)",
      "80 000+ Films & Séries (VOD)",
      "Qualité 4K/UHD & Ultra HDR",
      "Serveurs Stables (99,9% disponibilité)",
      "Support Premium WhatsApp 24/7",
      "M3U playlist & Xtream Codes",
      "EPG Gratuit (Guide TV)",
      "Catch-up Complet & Pause en Direct"
    ]
  }
};
