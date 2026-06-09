import { Mail, Phone, ShieldCheck } from "lucide-react";
import { trackWhatsAppConversion } from "../utils/gtag";

interface FooterProps {
  onScrollTo: (selector: string) => void;
  onOpenReseller: () => void;
}

export default function Footer({ onScrollTo, onOpenReseller }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 border-t-2 border-blue-700 text-blue-300 py-14 md:py-20" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">

          {/* Brand */}
          <div className="md:col-span-4 flex flex-col items-start gap-5">
            <div className="cursor-pointer" onClick={() => onScrollTo("#hero-section")}>
              <span className="text-3xl font-extrabold font-display tracking-tight text-white">Atlas Pro IPTV</span>
            </div>
            <p className="text-sm text-blue-300 leading-relaxed max-w-sm">
              Le fournisseur Atlas Pro IPTV le plus stable. TV en direct, sport et VOD sur tous vos appareils.
            </p>
            <div className="flex items-center gap-2.5 mt-1">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 font-sans">Tous les Services Opérationnels 100%</span>
            </div>
          </div>

          {/* Paquetes */}
          <div className="md:col-span-2 flex flex-col items-start gap-4">
            <h4 className="text-xs font-extrabold text-amber-400 uppercase tracking-widest font-sans">Forfaits</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              {["Forfait 3 Mois","Forfait 6 Mois","Offre 12+3 Mois","Essai 1 Mois"].map(l => (
                <button key={l} onClick={() => onScrollTo("#pricing-section")}
                  className="hover:text-amber-400 transition-colors text-left text-blue-300">{l}</button>
              ))}
            </div>
          </div>

          {/* Instalación */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <h4 className="text-xs font-extrabold text-amber-400 uppercase tracking-widest font-sans">Installation</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              {["Samsung & LG Smart TV","Amazon Fire TV Stick","Apple TV / iOS","Formuler & Android Box"].map(l => (
                <button key={l} onClick={() => onScrollTo("#setup-section")}
                  className="hover:text-amber-400 transition-colors text-left text-blue-300">{l}</button>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <h4 className="text-xs font-extrabold text-amber-400 uppercase tracking-widest font-sans">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <button onClick={onOpenReseller}
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold transition-colors text-left">
                <ShieldCheck className="w-4 h-4 shrink-0" /> Devenir Revendeur
              </button>
              <a href="https://wa.me/447449708976" target="_blank" rel="noreferrer" onClick={trackWhatsAppConversion}
                className="flex items-center gap-2 text-blue-300 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4 shrink-0" /> Support WhatsApp 24h/24
              </a>
              <div className="flex items-center gap-2 text-blue-400 text-sm">
                <Mail className="w-4 h-4 shrink-0" /><span>support@atlasproiptv.net</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-700/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-blue-500">
            &copy; {new Date().getFullYear()} Atlas Pro IPTV Premium IPTV. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] uppercase font-sans tracking-widest text-blue-500 font-bold mr-1">Paiement Sécurisé :</span>
            {["Virement","PayPal","VISA / MC","Crypto"].map(p => (
              <span key={p} className="text-amber-400 font-bold text-[10px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">{p}</span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
