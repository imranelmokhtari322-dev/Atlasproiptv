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
      {step:"1",text:"Abre la App Store en tu Smart TV Samsung o LG."},
      {step:"2",text:"Busca 'IPTV Smarters Pro', 'Flix IPTV' o 'IBO Player' e instala."},
      {step:"3",text:"Selecciona 'Login con Xtream Codes API' o 'Cargar playlist M3U'."},
      {step:"4",text:"Introduce tus credenciales recibidas por correo electrónico."},
    ],
    firestick: [
      {step:"1",text:"Ve a Ajustes → Mi Fire TV → Opciones de desarrollador → Instalar apps desconocidas: ACTIVADO."},
      {step:"2",text:"Busca e instala 'Downloader' en la Amazon Appstore."},
      {step:"3",text:"Abre Downloader y descarga IPTV Smarters Pro o TiviMate."},
      {step:"4",text:"Introduce tus datos de Xtream Codes y ¡empieza a ver!"},
    ],
    android:   [
      {step:"1",text:"Abre Google Play Store en tu Android TV o Shield."},
      {step:"2",text:"Busca 'TiviMate IPTV Player' o 'IPTV Smarters Pro' e instala."},
      {step:"3",text:"Selecciona 'Añadir nueva lista de reproducción' → Login con Xtream Codes."},
      {step:"4",text:"Introduce tus datos de IPTVESPANA. La lista de canales se carga automáticamente."},
    ],
    apple:     [
      {step:"1",text:"Abre la App Store en tu Apple TV, iPad o iPhone."},
      {step:"2",text:"Busca y descarga 'GSE Smart IPTV', 'IPTV Smarters' o 'Aptv'."},
      {step:"3",text:"Ve a 'Remote Playlists' o 'Xtream Codes API' y pulsa '+'."},
      {step:"4",text:"Copia el enlace M3U de tu correo. ¡Sincronizado al instante!"},
    ],
    pc:        [
      {step:"1",text:"Descarga 'VLC Media Player' o 'IPTV Smarters para Windows'."},
      {step:"2",text:"Haz clic en 'Medio' → 'Abrir flujo de red'."},
      {step:"3",text:"Pega la URL de la playlist M3U de tu correo IPTVESPANA."},
      {step:"4",text:"Haz clic en 'Reproducir' y navega por todos los 23.500+ canales en directo."},
    ],
  };
  return (
    <section className="bg-green-50 text-green-900 py-16 border-b border-green-200" id="setup-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-sans text-green-600 font-bold tracking-widest bg-green-50 border border-green-200 px-3 py-1 rounded-full mb-3 inline-block">INSTALACIÓN PASO A PASO</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-green-900 mb-4">Instalación sencilla en cualquier dispositivo</h2>
          <p className="text-green-600 text-sm sm:text-base">Selecciona tu dispositivo y sigue la sencilla guía de 4 pasos.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {devices.map((dev) => (
            <button key={dev.id} onClick={() => setSelectedDevice(dev.id)}
              className={`px-4 py-3 rounded-xl text-xs font-bold tracking-wide transition-all gap-2 flex items-center cursor-pointer ${selectedDevice === dev.id ? "bg-green-600 text-white shadow-md scale-[1.02]" : "bg-green-50 border border-green-200 text-green-600 hover:text-green-900 hover:bg-green-100"}`}>
              {dev.icon}<span>{dev.label}</span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 flex flex-col gap-4 text-left">
            {instructions[selectedDevice].map((inst) => (
              <div key={inst.step} className="p-5 rounded-2xl border border-green-100 bg-white shadow-sm flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-green-100 border border-green-200 text-green-800 flex items-center justify-center font-bold text-sm shrink-0 font-sans">{inst.step}</div>
                <div>
                  <h4 className="text-sm font-bold text-green-900 mb-1 uppercase font-sans tracking-wider">Paso {inst.step}</h4>
                  <p className="text-xs text-green-600 leading-relaxed">{inst.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl border border-green-200 bg-white shadow-sm text-left">
            <div>
              <div className="flex items-center gap-2 text-green-800 font-bold mb-4 font-sans text-xs tracking-wider uppercase">
                <BookOpen className="w-5 h-5" /><span>Garantía de Soporte</span>
              </div>
              <h3 className="text-lg font-extrabold text-green-900 mb-3">¿Necesitas ayuda con la instalación?</h3>
              <p className="text-xs text-green-600 leading-relaxed mb-4">¿No puedes con todo? Nuestro servicio de ayuda está disponible 24/7 por WhatsApp.</p>
              <div className="p-3.5 bg-green-50 border border-green-200 rounded-xl text-xs text-green-600 mb-2.5">
                <span className="font-bold text-green-900">Consejo:</span> Instala <strong className="text-green-900">IPTV Smarters Pro</strong> — el reproductor más estable.
              </div>
            </div>
            <a href="https://wa.me/447449708976" target="_blank" rel="noreferrer" onClick={trackWhatsAppConversion}
              className="mt-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-green-900 font-bold text-xs tracking-wide text-center uppercase shadow-lg block transition-colors">
              Pedir ayuda gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
