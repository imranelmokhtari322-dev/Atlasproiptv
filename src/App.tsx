import { useState, useEffect, FormEvent } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ChannelSearch from "./components/ChannelSearch";
import SportsAndEntertainment from "./components/SportsAndEntertainment";
import PricingCalculator from "./components/PricingCalculator";
import Advantages from "./components/Advantages";
import WhatsAppReviews from "./components/WhatsAppReviews";
import SetupWizard from "./components/SetupWizard";
import FAQ from "./components/FAQ";
import ResellerModal from "./components/ResellerModal";
import Footer from "./components/Footer";
import SportCategories from "./components/SportCategories";
import { MessageSquare, X, Send, ChevronUp } from "lucide-react";

export default function App() {
  const [resellerOpen, setResellerOpen] = useState(false);
  const [whatsappWidgetOpen, setWhatsappWidgetOpen] = useState(false);
  const [widgetMsg, setWidgetMsg] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScrollTo = (selector: string) => {
    const elementId = selector.substring(1);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleWhatsappWidgetSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!widgetMsg.trim()) return;
    const cleanMsg = encodeURIComponent(widgetMsg);
    window.open(`https://wa.me/447449708976?text=${cleanMsg}`, "_blank", "noopener,noreferrer");
    setWidgetMsg("");
    setWhatsappWidgetOpen(false);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-white/20 selection:text-white flex flex-col font-sans" id="app-root-container">

      <Header
        onScrollTo={handleScrollTo}
        onOpenReseller={() => setResellerOpen(true)}
      />

      <main className="flex-grow" id="main-content-flow">
        <Hero onScrollTo={handleScrollTo} />
        <ChannelSearch />
        <SportCategories />
        <SportsAndEntertainment />
        <PricingCalculator />
        <Advantages />
        <WhatsAppReviews />
        <SetupWizard />
        <FAQ />
      </main>

      <Footer
        onScrollTo={handleScrollTo}
        onOpenReseller={() => setResellerOpen(true)}
      />

      <ResellerModal
        isOpen={resellerOpen}
        onClose={() => setResellerOpen(false)}
      />

      {/* Floating WhatsApp widget */}
      <div className="fixed bottom-6 right-6 z-40" id="whatsapp-sticky-widget">

        {whatsappWidgetOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden text-left">
            <div className="px-4 py-3 bg-[#005c4b] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-800 border border-emerald-600/40 flex items-center justify-center text-sm">👩‍💻</div>
                <div>
                  <h4 className="text-xs font-bold text-white">Ana de IPTVESPANA</h4>
                  <span className="text-[9px] text-emerald-300 block">Responde normalmente en 2 min.</span>
                </div>
              </div>
              <button onClick={() => setWhatsappWidgetOpen(false)} className="p-1 rounded-full text-white/60 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 bg-sky-50 flex flex-col gap-2 min-h-[120px]">
              <div className="self-start max-w-[90%] rounded-r-xl rounded-bl-xl bg-white border border-gray-100 text-xs p-3 shadow-sm text-left">
                <p className="leading-relaxed text-gray-700">¡Hola! Bienvenido al soporte de IPTVESPANA. Te ayudo con la instalación o cualquier pregunta sobre canales. ¿Qué necesitas?</p>
                <span className="text-[8px] text-gray-400 block text-right mt-1 font-sans">Ahora</span>
              </div>
            </div>

            <form onSubmit={handleWhatsappWidgetSubmit} className="p-3 bg-gray-50 border-t border-gray-100 flex items-center gap-2">
              <input
                type="text" value={widgetMsg} onChange={(e) => setWidgetMsg(e.target.value)} placeholder="Escribe tu mensaje..."
                className="flex-1 bg-white border border-gray-200 rounded-lg py-2 px-3 text-xs text-gray-900 focus:outline-none focus:border-cyan-400 font-sans"
              />
              <button type="submit" className="p-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 shrink-0" aria-label="Enviar">
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}

        <button
          onClick={() => setWhatsappWidgetOpen(!whatsappWidgetOpen)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all text-white cursor-pointer group"
          aria-label="Abrir chat de soporte WhatsApp"
        >
          {whatsappWidgetOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <MessageSquare className="w-6 h-6 stroke-[2.5]" />}
          <span className="absolute right-16 bg-green-900 border border-green-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block pointer-events-none tracking-wide">
            Soporte Live (¡Disponible!)
          </span>
        </button>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-40 w-10 h-10 rounded-full bg-green-800 hover:bg-green-700 border border-green-600 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
          aria-label="Volver arriba"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
