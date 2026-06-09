import { motion } from "motion/react";
import { Play, ShieldCheck, Gift, ArrowRight, Phone } from "lucide-react";
import { trackWhatsAppConversion } from "../utils/gtag";

interface HeroProps {
  onScrollTo: (selector: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b-2 border-blue-600" id="hero-section">
      <div className="absolute top-[-20%] left-[-5%] w-[45%] h-[60%] rounded-full bg-blue-400/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40%] h-[50%] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[20%] w-[25%] h-[40%] rounded-full bg-blue-400/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Promo pill */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/20 border border-amber-400/40 text-sm font-semibold text-amber-300 mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          Commandez maintenant et recevez&nbsp;<strong className="uppercase tracking-wide">3 mois gratuits</strong>
        </motion.div>

        {/* Heading block with phone behind */}
        <div className="relative mb-6">

          {/* Phone */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-0">
            <div className="relative w-[210px] rounded-[2.2rem] border-[5px] border-white/30 shadow-2xl overflow-hidden bg-white">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-blue-50 rounded-b-2xl z-20" />
              <div className="px-4 pt-9 pb-4 flex flex-col gap-3 min-h-[340px]">
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-[9px] font-bold tracking-widest uppercase">
                    <span className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />Commencez Aujourd'hui
                  </span>
                </div>
                <div className="text-center flex flex-col gap-0.5">
                  <h3 className="text-2xl font-black text-blue-900 leading-tight">Rejoignez</h3>
                  <h3 className="text-3xl font-black text-blue-700 leading-tight underline decoration-blue-500 decoration-2 underline-offset-4">Atlas Pro IPTV</h3>
                  <p className="text-blue-600 text-xs font-medium mt-1">Un abonnement pour tout.</p>
                </div>
                <button onClick={() => onScrollTo("#pricing-cards")} className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-black text-sm cursor-pointer text-center hover:bg-blue-700 transition-colors">
                  Voir les prix
                </button>
                <div className="border-t border-blue-100" />
                <a href="https://wa.me/447449708976" target="_blank" rel="noreferrer" onClick={trackWhatsAppConversion} className="flex items-center justify-between text-blue-900 hover:opacity-80 transition-opacity group">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center">
                      <Phone className="w-3 h-3 text-blue-700" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-blue-900">Support WhatsApp</div>
                      <div className="text-[9px] text-blue-600">Disponible 24h/24</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="flex justify-center pb-2 pt-1">
                <div className="w-14 h-1 rounded-full bg-blue-200" />
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 text-[clamp(3rem,10vw,7rem)] font-extrabold font-display tracking-tighter leading-[1.05] text-white max-w-2xl">
            Atlas Pro IPTV<br />
            <span className="italic font-serif font-normal text-blue-300">Premium</span> IPTV
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blue-100 text-base sm:text-lg max-w-lg leading-relaxed mb-6">
          La TV comme elle doit être. Pausez ou annulez à tout moment.
        </motion.p>

        {/* Buttons */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-0">
          <button onClick={() => onScrollTo("#pricing-cards")}
            className="px-10 py-5 rounded-full text-blue-900 bg-amber-400 hover:bg-amber-500 transition-all hover:scale-[1.02] shadow-xl text-center cursor-pointer text-lg font-black">
            Voir les prix
          </button>
          <button onClick={() => onScrollTo("#pricing-cards")}
            className="relative px-10 py-5 rounded-full border-2 border-white/30 bg-white/10 hover:bg-white/20 hover:scale-[1.03] flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer group text-white font-black text-lg overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Gift className="w-5 h-5 relative" />
            <span className="relative">Réclamer mes <span className="underline">3 mois</span> offerts</span>
            <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Badges */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-2 text-blue-100 text-sm">
            <Play className="w-4 h-4 text-blue-300 fill-blue-300" /><span>Activation Instantanée</span>
          </div>
          <div className="flex items-center gap-2 text-blue-100 text-sm">
            <ShieldCheck className="w-4 h-4 text-blue-300" /><span>Sans Buffering</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
