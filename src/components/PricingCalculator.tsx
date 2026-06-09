import { useState, FormEvent, useEffect } from "react";
import { trackWhatsAppConversion } from "../utils/gtag";
import { motion, AnimatePresence } from "motion/react";
import { Check, RefreshCw, Copy } from "lucide-react";
import { PRICING_MAPPING } from "../data";
import { BillingPeriod } from "../types";

export default function PricingCalculator() {
  const [selectedPeriod, setSelectedPeriod] = useState<BillingPeriod>("12_plus_3_months");

  const getTimeUntilMidnight = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const diff = Math.floor((midnight.getTime() - now.getTime()) / 1000);
    return { hours: Math.floor(diff / 3600), minutes: Math.floor((diff % 3600) / 60), seconds: diff % 60 };
  };
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight);
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeUntilMidnight()), 1000);
    return () => clearInterval(timer);
  }, []);
  const [selectedDevices, setSelectedDevices] = useState<"1"|"2"|"3"|"4">("1");
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"details"|"payment"|"processing"|"success">("details");
  const [email, setEmail] = useState("");
  const [targetDevice, setTargetDevice] = useState("Smart TV (IPTV Smarters / Flix)");
  const [paymentMethod, setPaymentMethod] = useState("cb");
  const [selectedBank, setSelectedBank] = useState("ing");
  const [generatedLine, setGeneratedLine] = useState({ username:"", password:"", m3uUrl:"", host:"http://line.atlasproiptv.net:80" });

  const periodInfo = PRICING_MAPPING[selectedPeriod];
  const deviceAddons = { "1":0,"2":2.25,"3":3.75,"4":4.95 };
  const calculatedMonthlyPrice = Number((periodInfo.pricePerMonth + deviceAddons[selectedDevices]).toFixed(2));
  const totalMonths = periodInfo.months + periodInfo.bonusMonths;
  const calculatedTotalPrice = Number((calculatedMonthlyPrice * periodInfo.months).toFixed(2));

  const handleProcessPayment = (e: FormEvent) => {
    e.preventDefault(); if (!email) return;
    setCheckoutStep("processing");
    const user = `iptv_${Math.random().toString(36).substring(2,8)}`;
    setGeneratedLine({ username:user, password:Math.random().toString(36).substring(2,10), m3uUrl:`http://line.atlasproiptv.net:80/get.php?auth=atlasproiptv_${user}&output=ts`, host:"http://line.atlasproiptv.net:80" });
    setTimeout(() => setCheckoutStep("success"), 2800);
  };

  const vipPrices: Record<BillingPeriod, Record<string, number>> = {
    "3_months":        { "1": 34.99, "2": 49.99, "3": 69.99, "4": 89.99 },
    "6_months":        { "1": 44.99, "2": 79.99, "3": 99.99, "4": 139.99 },
    "12_months":       { "1": 69.99, "2": 89.99, "3": 109.99, "4": 129.99 },
    "12_plus_3_months":{ "1": 78.00, "2": 124.99, "3": 179.99, "4": 199.99 },
  };
  const normalPrices: Record<BillingPeriod, Record<string, number>> = {
    "3_months":        { "1": 24.99, "2": 39.99, "3": 49.99, "4": 57.99 },
    "6_months":        { "1": 34.99, "2": 49.99, "3": 69.99, "4": 89.99 },
    "12_months":       { "1": 54.99, "2": 69.99, "3": 84.99, "4": 99.99 },
    "12_plus_3_months":{ "1": 69.99, "2": 99.99, "3": 139.99, "4": 179.99 },
  };
  const vipPrice = vipPrices[selectedPeriod][selectedDevices];
  const normalPrice = normalPrices[selectedPeriod][selectedDevices];

  const periods = [
    { id:"3_months" as BillingPeriod, label:"3 Mois", sub:"€11,99/mois" },
    { id:"6_months" as BillingPeriod, label:"6 Mois", sub:"€9,99/mois" },
    { id:"12_plus_3_months" as BillingPeriod, label:"12+3 Mois", sub:"€5,20/mois!", bonus:true },
  ];

  const openWhatsApp = (plan: "VIP" | "Basis", price: number) => {
    const periodLabel = periods.find(p => p.id === selectedPeriod)?.label ?? selectedPeriod;
    const msg = `Bonjour, je souhaite commander le forfait *${plan === "VIP" ? "✦ Premium VIP+" : "Basique"}*. ${periodLabel}, ${selectedDevices} écran(s), €${price.toFixed(2).replace(".", ",")}.`;
    trackWhatsAppConversion();
    window.open(`https://wa.me/447449708976?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-white text-white py-16 border-b-2 border-blue-200 overflow-hidden" id="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-sans text-blue-300 font-bold tracking-widest bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6 inline-block">TARIFS</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-tight mb-10">
            Un abonnement,{" "}
            <span className="italic font-serif font-normal text-blue-300">des possibilités</span>
            <br />infinies
          </h2>

          <p className="text-blue-100 text-base sm:text-lg font-medium mb-8 leading-relaxed">
            C'est le <span className="text-white font-bold italic">"vous ne pourrez plus vous en passer"</span>.<br />
            <span className="text-blue-200 text-sm sm:text-base font-normal">Atlas Pro IPTV remplace les abonnements coûteux et les multiples services de streaming pour un prix fixe.</span>
          </p>

          {/* Countdown timer */}
          <div className="inline-block bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-8 py-6 shadow-md">
            <div className="flex items-center gap-2 justify-center mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-200 font-sans">
                Offre limitée se termine à minuit
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              {[
                { val: timeLeft.hours,   label: "HEURES"   },
                { val: timeLeft.minutes, label: "MINUTES"  },
                { val: timeLeft.seconds, label: "SECONDES" },
              ].map((unit, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="bg-white/20 border border-white/30 rounded-xl w-16 h-16 flex items-center justify-center">
                      <span className="text-3xl font-black text-white font-display">
                        {unit.val.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-[9px] text-blue-300 font-sans tracking-widest mt-1 block">{unit.label}</span>
                  </div>
                  {i < 2 && <span className="text-2xl font-black text-white/50 mb-5">:</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-10" id="pricing-cards">
          <span className="text-xs uppercase font-sans text-blue-600 font-bold tracking-widest bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3 inline-block">ABONNEMENTS IPTV</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-4">Un tarif fixe, divertissement illimité</h2>
          <p className="text-blue-700 text-sm sm:text-base">Choisissez votre durée et le nombre d'écrans. Sans frais cachés.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-blue-100 rounded-2xl p-6 sm:p-8 shadow-md mb-12">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex flex-col gap-6">

              {/* Period tabs */}
              <div>
                <label className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3 font-sans">1. Choisissez la durée de l'abonnement :</label>
                <div className="flex gap-2">
                  {periods.map((p) => (
                    <button key={p.id} onClick={() => setSelectedPeriod(p.id)}
                      className={`relative flex-1 py-4 rounded-2xl text-center font-bold text-sm transition-all cursor-pointer overflow-hidden border-2 ${
                        selectedPeriod === p.id
                          ? p.bonus
                            ? "bg-amber-400 border-amber-400 text-blue-900 shadow-lg"
                            : "bg-blue-600 border-blue-600 text-white shadow-md"
                          : "bg-white border-blue-200 text-blue-600 hover:border-blue-400 hover:text-blue-800"
                      }`}>
                      <span className="absolute top-1.5 right-1.5 bg-blue-900 text-amber-400 text-[8px] font-black px-1.5 py-0.5 rounded-full"
                        style={{ display: p.bonus ? "block" : "none" }}>-50%</span>
                      <span className="block font-extrabold">{p.label}</span>
                      <span className={`text-[9px] uppercase tracking-widest font-bold block mt-0.5 ${selectedPeriod === p.id ? (p.bonus ? "text-blue-800" : "text-blue-200") : "text-blue-400"}`}>
                        {p.sub}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Device grid */}
              <div>
                <label className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3 font-sans">2. Nombre d'écrans simultanés :</label>
                <div className="grid grid-cols-2 gap-2">
                  {["1","2","3","4"].map((dev) => (
                    <button key={dev} onClick={() => setSelectedDevices(dev as "1"|"2"|"3"|"4")}
                      className={`flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm transition-all cursor-pointer border-2 ${
                        selectedDevices === dev
                          ? "bg-blue-600 border-blue-600 text-white shadow-md"
                          : "bg-white border-blue-200 text-blue-600 hover:border-blue-400 hover:text-blue-800"
                      }`}>
                      <svg className={`w-5 h-5 ${selectedDevices === dev ? "text-white" : "text-blue-400"}`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <rect x="2" y="3" width="20" height="14" rx="2"/>
                        <path d="M8 21h8M12 17v4"/>
                      </svg>
                      {dev} {Number(dev) > 1 ? "Écrans" : "Écran"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium & Normal price cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

          {/* Premium VIP */}
          <div className="relative rounded-2xl border border-amber-300 bg-gradient-to-b from-amber-400 to-amber-300 p-8 min-h-[560px] flex flex-col shadow-xl">
            <div className="flex justify-center mb-4"><span className="bg-blue-900 text-amber-400 text-[10px] font-extrabold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-md">MEILLEURE OFFRE</span></div>
            <h3 className="text-3xl font-extrabold font-display text-blue-900 mb-1">✦ PREMIUM VIP +</h3>
            <p className="text-blue-800/70 text-xs font-sans uppercase tracking-widest mb-4">12+3 MOIS</p>
            <div className="mb-4">
              <span onClick={() => openWhatsApp("VIP", vipPrice)}
                className="text-5xl font-black text-blue-900 font-display cursor-pointer hover:text-blue-700 transition-colors">
                €{vipPrice.toFixed(2).replace(".",",")}
              </span>
            </div>
            <p className="text-blue-800/70 text-xs mb-5 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              1 écran inclus
            </p>

            <div className="flex flex-col gap-2.5 mb-6 flex-1">
              {[
                "SD/HD/FULL HD/4K UHD",
                "+80 000 Chaînes + Netflix",
                "TF1, M6, Canal+, BFM TV, Arte, France 2/3/5",
                "+200 000 Films & Séries",
                "Mises à jour Quotidiennes",
                "Tous les Événements Sportifs PPV",
                "Support VIP 24/7",
                "Anti-Buffering Pro",
                "Gestionnaire VIP Personnel",
                "Tous les Appareils",
                "VPN Inclus",
                "Contenu VIP Exclusif",
                "Netflix, Amazon, Canal+, Disney+, Apple TV+",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2.5 text-xs text-blue-900">
                  <div className="w-4 h-4 rounded-full bg-blue-900/15 border border-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-blue-900" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button onClick={() => openWhatsApp("VIP", vipPrice)}
              className="w-full py-3.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-amber-400 font-bold text-sm uppercase tracking-wide transition-all cursor-pointer mt-auto shadow-lg">
              Commander Maintenant &rarr;
            </button>
          </div>

          {/* Basique */}
          <div className="relative rounded-2xl border border-blue-200 bg-gradient-to-b from-blue-50 to-white p-8 min-h-[560px] flex flex-col shadow-sm">
            <h3 className="text-3xl font-extrabold font-display text-blue-900 mb-1 mt-2">Basique</h3>
            <p className="text-blue-600 text-xs font-sans uppercase tracking-widest mb-4">12 MOIS</p>
            <div className="mb-4">
              <span onClick={() => openWhatsApp("Basis", normalPrice)}
                className="text-5xl font-black text-blue-900 cursor-pointer hover:text-blue-700 transition-colors" style={{ fontFamily: "'Sour Gummy', cursive" }}>
                €{normalPrice.toFixed(2).replace(".",",")}
              </span>
            </div>
            <p className="text-blue-500 text-xs mb-5 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              1 écran inclus
            </p>

            <div className="flex flex-col gap-2.5 mb-6 flex-1">
              {[
                "Qualité SD/HD/FULL HD",
                "+50 000 Chaînes + Netflix",
                "TF1, M6, Canal+, RMC Sport, Eurosport",
                "+140 000 Films & Séries",
                "Mises à jour Hebdomadaires",
                "Support 24/7",
                "100% Anonyme",
                "Technologie AntiFreeze",
                "Tous les Appareils",
                "VPN Inclus",
                "Contenu Exclusif",
                "Netflix, Amazon, Disney+, Apple TV+",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2.5 text-xs text-blue-800">
                  <div className="w-4 h-4 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button onClick={() => openWhatsApp("Basis", normalPrice)}
              className="w-full py-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-300 text-blue-800 font-bold text-sm uppercase tracking-wide transition-all cursor-pointer mt-auto">
              Commander Maintenant &rarr;
            </button>
          </div>
        </div>

      </div>

      {/* Checkout Modal */}
      <AnimatePresence>
        {checkoutModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/70 backdrop-blur-md">
            <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.95}}
              className="relative w-full max-w-lg bg-white border border-blue-200 rounded-2xl shadow-2xl p-6 sm:p-8 text-blue-900 max-h-[90vh] overflow-y-auto">
              <button onClick={() => setCheckoutModalOpen(false)} className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-blue-50 text-blue-600 hover:text-blue-900 text-xs font-bold">Fermer</button>

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-blue-100 text-xs text-blue-500 font-sans">
                {["details","payment","processing","success"].map((step,i)=>(
                  <span key={step} className={checkoutStep===step?"text-blue-900 font-bold":"text-blue-400"}>
                    {i+1}. {["Compte","Paiement","Activation","Terminé"][i]}
                  </span>
                ))}
              </div>

              {checkoutStep==="details" && (
                <div className="text-left">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Configurez votre Compte</h3>
                  <p className="text-xs text-blue-600 mb-5">Nous vous envoyons vos identifiants directement par e-mail.</p>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="text-xs font-bold text-blue-600 block mb-1.5 font-sans">Adresse e-mail :</label>
                      <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="vous@email.fr"
                        className="w-full bg-blue-50 border border-blue-200 rounded-xl py-3 px-4 text-sm text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-blue-600 block mb-1.5 font-sans">Appareil :</label>
                      <select value={targetDevice} onChange={e=>setTargetDevice(e.target.value)} className="w-full bg-blue-50 border border-blue-200 rounded-xl py-3 px-4 text-sm text-blue-900 focus:outline-none">
                        <option>Smart TV (IPTV Smarters / Flix)</option>
                        <option>Amazon Firestick (TiviMate)</option>
                        <option>Android Box / Nvidia Shield</option>
                        <option>Apple TV / iPhone</option>
                        <option>PC / Mac (VLC)</option>
                      </select>
                    </div>
                    <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-600">
                      <span className="font-bold text-blue-900">Forfait :</span> {totalMonths} Mois, {selectedDevices} Écran(s) — <strong className="text-blue-900">€{calculatedTotalPrice.toFixed(2)}</strong>
                    </div>
                    <button onClick={() => { if(email.includes("@")){setCheckoutStep("payment");}else{alert("Veuillez entrer une adresse e-mail valide !");}}}
                      className="w-full mt-4 py-3.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-bold text-sm text-center transition-colors">
                      Passer au paiement &rarr;
                    </button>
                  </div>
                </div>
              )}

              {checkoutStep==="payment" && (
                <div className="text-left">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Choisissez votre mode de paiement</h3>
                  <form onSubmit={handleProcessPayment} className="flex flex-col gap-4 mt-5">
                    {[{id:"cb",label:"Carte Bancaire (CB/Visa/MC)",badge:"Populaire"},{id:"paypal",label:"PayPal",badge:""},{id:"virement",label:"Virement Bancaire",badge:""},{id:"crypto",label:"Crypto (Bitcoin/USDT)",badge:""}].map(pm=>(
                      <div key={pm.id} onClick={()=>setPaymentMethod(pm.id)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod===pm.id?"bg-blue-50 border-blue-400":"bg-white border-blue-100 hover:border-blue-200"}`}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold flex items-center gap-2 text-blue-900">
                            <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${paymentMethod===pm.id?"border-blue-600":"border-blue-300"}`}>
                              {paymentMethod===pm.id&&<span className="w-2 h-2 bg-blue-600 rounded-full"/>}
                            </span>
                            {pm.label}
                          </span>
                          {pm.badge&&<span className="bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">{pm.badge}</span>}
                        </div>
                        {pm.id==="cb"&&paymentMethod==="cb"&&(
                          <select value={selectedBank} onChange={e=>setSelectedBank(e.target.value)} className="mt-3 w-full bg-white border border-blue-200 rounded-lg py-2 px-3 text-xs text-blue-900">
                            {["BNP Paribas","Société Générale","Crédit Agricole","LCL","La Banque Postale","Revolut"].map(b=><option key={b} value={b}>{b}</option>)}
                          </select>
                        )}
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <button type="button" onClick={()=>setCheckoutStep("details")} className="w-1/3 py-3.5 border border-blue-200 rounded-xl text-blue-600 font-bold text-sm">Retour</button>
                      <button type="submit" className="w-2/3 py-3.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-bold text-sm transition-colors">Payer €{calculatedTotalPrice.toFixed(2)}</button>
                    </div>
                  </form>
                </div>
              )}

              {checkoutStep==="processing" && (
                <div className="py-8 flex flex-col items-center justify-center text-center">
                  <RefreshCw className="w-12 h-12 text-blue-600 animate-spin mb-4"/>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Traitement en cours...</h3>
                  <p className="text-xs text-blue-600 max-w-sm">Connexion à la banque. Activation de votre ligne IPTV.</p>
                </div>
              )}

              {checkoutStep==="success" && (
                <div className="text-left py-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-300 text-blue-600 flex items-center justify-center mb-4 mx-auto">
                    <Check className="w-6 h-6 stroke-[3]"/>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 text-center mb-1">Paiement Réussi !</h3>
                  <p className="text-xs text-blue-600 text-center mb-5">Votre ligne Atlas Pro IPTV a été activée immédiatement.</p>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex flex-col gap-3 text-xs mb-5">
                    {[{label:"Serveur :",val:generatedLine.host},{label:"Identifiant :",val:generatedLine.username},{label:"Mot de passe :",val:generatedLine.password}].map((item,i)=>(
                      <div key={i} className={`flex justify-between items-center py-1 ${i<2?"border-b border-blue-100":""}`}>
                        <span className="text-blue-500">{item.label}</span>
                        <span className="font-sans text-blue-900 font-bold select-all">{item.val}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center py-1 border-t border-blue-100">
                      <span className="text-blue-500">M3U URL :</span>
                      <button onClick={()=>navigator.clipboard.writeText(generatedLine.m3uUrl).then(()=>alert("Copié !"))} className="text-blue-700 font-bold flex items-center gap-1 font-sans text-[10px] hover:text-blue-900">
                        <Copy className="w-3 h-3"/> Copier
                      </button>
                    </div>
                  </div>
                  <button onClick={()=>setCheckoutModalOpen(false)} className="w-full py-3.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-bold text-sm transition-colors">
                    C'est parti, profitez du stream !
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
