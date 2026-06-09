import { useState } from "react";
import { Tv, Cpu, Tablet, BookOpen, Smartphone, Laptop } from "lucide-react";
import { trackWhatsAppConversion } from "../utils/gtag";

export default function SetupWizard() {
  const [selectedDevice, setSelectedDevice] = useState<"smart_tv"|"firestick"|"android"|"apple"|"pc">("smart_tv");
  const devices = [
    { id: "smart_tv",  label: "Smart TV (Samsung/LG)", icon: <Tv className="w-4 h-4" /> },
    { id: "firestick", label: "Amazon Fire Stick",     icon: <Cpu className="w-4 h-4" /> },
    { id: "android",   label: "Android TV / Box",      icon: <Tablet className="w-4 h-4" /> },
    { id: "apple",     label: "Apple TV / iOS",         icon: <Smartphone className="w-4 h-4" /> },
    { id: "pc",        label: "PC / Mac (Laptop)",      icon: <Laptop className="w-4 h-4" /> },
  ] as const;
  const instructions: Record<string, {step:string;text:string}[]> = {
    smart_tv:  [
      {step:"1",text:"Ouvrez l'App Store sur votre Smart TV Samsung ou LG."},
      {step:"2",text:"Recherchez 'IPTV Smarters Pro', 'Flix IPTV' ou 'IBO Player' et installez."},
      {step:"3",text:"Sélectionnez 'Login avec Xtream Codes API' ou 'Charger playlist M3U'."},
      {step:"4",text:"Entrez vos identifiants reçus par e-mail Atlas Pro IPTV."},
    ],
    firestick: [
      {step:"1",text:"Allez dans Paramètres → Mon Fire TV → Options développeur → Apps inconnues : ACTIVÉ."},
      {step:"2",text:"Recherchez et installez 'Downloader' sur l'Amazon Appstore."},
      {step:"3",text:"Ouvrez Downloader et téléchargez IPTV Smarters Pro ou TiviMate."},
      {step:"4",text:"Entrez vos données Xtream Codes et commencez à regarder !"},
    ],
    android:   [
      {step:"1",text:"Ouvrez le Google Play Store sur votre Android TV ou Shield."},
      {step:"2",text:"Recherchez 'TiviMate IPTV Player' ou 'IPTV Smarters Pro' et installez."},
      {step:"3",text:"Sélectionnez 'Ajouter nouvelle liste de lecture' → Login avec Xtream Codes."},
      {step:"4",text:"Entrez vos données Atlas Pro IPTV. La liste des chaînes se charge automatiquement."},
    ],
    apple:     [
      {step:"1",text:"Ouvrez l'App Store sur votre Apple TV, iPad ou iPhone."},
      {step:"2",text:"Recherchez et téléchargez 'GSE Smart IPTV', 'IPTV Smarters' ou 'Aptv'."},
      {step:"3",text:"Allez dans 'Remote Playlists' ou 'Xtream Codes API' et appuyez sur '+'."},
      {step:"4",text:"Copiez le lien M3U de votre e-mail Atlas Pro IPTV. Synchronisé instantanément !"},
    ],
    pc:        [
      {step:"1",text:"Téléchargez 'VLC Media Player' ou 'IPTV Smarters pour Windows'."},
      {step:"2",text:"Cliquez sur 'Média' → 'Ouvrir un flux réseau'."},
      {step:"3",text:"Collez l'URL de la playlist M3U de votre e-mail Atlas Pro IPTV."},
      {step:"4",text:"Cliquez sur 'Lire' et naviguez parmi 23.500+ chaînes en direct."},
    ],
  };
  return (
    <section className="bg-blue-50 text-blue-900 py-16 border-b border-blue-200" id="setup-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-sans text-blue-600 font-bold tracking-widest bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3 inline-block">INSTALLATION ÉTAPE PAR ÉTAPE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-blue-900 mb-4">Installation facile sur n'importe quel appareil</h2>
          <p className="text-blue-600 text-sm sm:text-base">Sélectionnez votre appareil et suivez le guide simple en 4 étapes.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {devices.map((dev) => (
            <button key={dev.id} onClick={() => setSelectedDevice(dev.id)}
              className={`px-4 py-3 rounded-xl text-xs font-bold tracking-wide transition-all gap-2 flex items-center cursor-pointer ${selectedDevice === dev.id ? "bg-blue-600 text-white shadow-md scale-[1.02]" : "bg-blue-50 border border-blue-200 text-blue-600 hover:text-blue-900 hover:bg-blue-100"}`}>
              {dev.icon}<span>{dev.label}</span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 flex flex-col gap-4 text-left">
            {instructions[selectedDevice].map((inst) => (
              <div key={inst.step} className="p-5 rounded-2xl border border-blue-100 bg-white shadow-sm flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-200 text-blue-800 flex items-center justify-center font-bold text-sm shrink-0 font-sans">{inst.step}</div>
                <div>
                  <h4 className="text-sm font-bold text-blue-900 mb-1 uppercase font-sans tracking-wider">Étape {inst.step}</h4>
                  <p className="text-xs text-blue-600 leading-relaxed">{inst.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl border border-blue-200 bg-white shadow-sm text-left">
            <div>
              <div className="flex items-center gap-2 text-blue-800 font-bold mb-4 font-sans text-xs tracking-wider uppercase">
                <BookOpen className="w-5 h-5" /><span>Garantie de Support</span>
              </div>
              <h3 className="text-lg font-extrabold text-blue-900 mb-3">Besoin d'aide pour l'installation ?</h3>
              <p className="text-xs text-blue-600 leading-relaxed mb-4">Vous bloquez quelque part ? Notre support est disponible 24h/24 sur WhatsApp.</p>
              <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-600 mb-2.5">
                <span className="font-bold text-blue-900">Conseil :</span> Installez <strong className="text-blue-900">IPTV Smarters Pro</strong> — le lecteur le plus stable.
              </div>
            </div>
            <a href="https://wa.me/447449708976" target="_blank" rel="noreferrer" onClick={trackWhatsAppConversion}
              className="mt-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold text-xs tracking-wide text-center uppercase shadow-lg block transition-colors">
              Demander de l'aide gratuitement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
