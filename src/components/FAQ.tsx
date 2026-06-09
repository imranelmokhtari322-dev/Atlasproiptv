import { useState } from "react";
import { FAQ_DATA } from "../data";
import { HelpCircle, ChevronRight, MessageCircle } from "lucide-react";
import { trackWhatsAppConversion } from "../utils/gtag";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="bg-blue-50 text-blue-900 py-16 border-b-2 border-blue-200" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-sans text-blue-600 font-bold tracking-widest bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3 inline-block">QUESTIONS FRÉQUENTES</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-blue-900 mb-4">Questions fréquentes et réponses</h2>
          <p className="text-blue-600 text-sm sm:text-base">Vous ne trouvez pas votre question ? Posez-la sur WhatsApp !</p>
        </div>
        <div className="flex flex-col gap-3 text-left">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.id} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "bg-white border-blue-300 shadow-sm" : "bg-white border-blue-100 hover:border-blue-200"}`}>
                <button onClick={() => setOpenIndex(isOpen ? null : idx)} className="w-full px-5 py-4 flex items-center justify-between gap-4 font-bold text-sm sm:text-base cursor-pointer text-left">
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 shrink-0 ${isOpen ? "text-blue-600" : "text-blue-400"}`} />
                    <span className={isOpen ? "text-blue-900" : "text-blue-700"}>{faq.question}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-blue-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-90 text-blue-600" : ""}`} />
                </button>
                {isOpen && <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-blue-600 leading-relaxed border-t border-blue-100"><p>{faq.answer}</p></div>}
              </div>
            );
          })}
        </div>
        <div className="mt-10 p-5 rounded-2xl bg-blue-50 border border-blue-200 inline-flex items-center gap-4 flex-col sm:flex-row justify-between w-full">
          <div className="flex items-center gap-3 text-left">
            <MessageCircle className="w-5 h-5 text-blue-600 shrink-0" />
            <p className="text-xs text-blue-600">Vous avez une question spécifique ? Envoyez-nous un message WhatsApp directement.</p>
          </div>
          <a href="https://wa.me/447449708976" target="_blank" rel="noreferrer" onClick={trackWhatsAppConversion}
            className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold text-xs tracking-wide whitespace-nowrap text-center transition-colors">
            Poser une question sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
