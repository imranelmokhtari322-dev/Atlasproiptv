import { useState, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, RefreshCw, Copy } from "lucide-react";
import { PRICING_MAPPING } from "../data";
import { BillingPeriod } from "../types";

export default function PricingCalculator() {
  const [selectedPeriod, setSelectedPeriod] = useState<BillingPeriod>("12_plus_3_months");

  const [timeLeft, setTimeLeft] = useState({ hours: 18, minutes: 27, seconds: 20 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) { seconds--; }
        else { seconds = 59; if (minutes > 0) { minutes--; } else { minutes = 59; hours = hours > 0 ? hours - 1 : 23; } }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const [selectedDevices, setSelectedDevices] = useState<"1"|"2"|"3"|"4">("1");
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"details"|"payment"|"processing"|"success">("details");
  const [email, setEmail] = useState("");
  const [targetDevice, setTargetDevice] = useState("Smart TV (IPTV Smarters / Flix)");
  const [paymentMethod, setPaymentMethod] = useState("ideal");
  const [selectedBank, setSelectedBank] = useState("rabobank");
  const [generatedLine, setGeneratedLine] = useState({ username:"", password:"", m3uUrl:"", host:"http://line.swivtv.net:80" });

  const periodInfo = PRICING_MAPPING[selectedPeriod];
  const deviceAddons = { "1":0,"2":2.25,"3":3.75,"4":4.95 };
  const calculatedMonthlyPrice = Number((periodInfo.pricePerMonth + deviceAddons[selectedDevices]).toFixed(2));
  const totalMonths = periodInfo.months + periodInfo.bonusMonths;
  const calculatedTotalPrice = Number((calculatedMonthlyPrice * periodInfo.months).toFixed(2));

  const handleProcessPayment = (e: FormEvent) => {
    e.preventDefault(); if (!email) return;
    setCheckoutStep("processing");
    const user = `swiv_${Math.random().toString(36).substring(2,8)}`;
    setGeneratedLine({ username:user, password:Math.random().toString(36).substring(2,10), m3uUrl:`http://line.swivtv.net:80/get.php?auth=swivtv_${user}&output=ts`, host:"http://line.swivtv.net:80" });
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
    { id:"3_months" as BillingPeriod, label:"3 Maanden", sub:"€11,99/maand" },
    { id:"6_months" as BillingPeriod, label:"6 Maanden", sub:"€9,99/maand" },
    { id:"12_plus_3_months" as BillingPeriod, label:"12+3 Maanden", sub:"€5,20/maand!", bonus:true },
  ];

  return (
    <section className="relative bg-dark-bg text-green-900 py-16 border-b border-green-100 overflow-hidden" id="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-mono text-green-600 font-bold tracking-widest bg-green-50 border border-green-200 px-3 py-1 rounded-full mb-6 inline-block">PRIJZEN</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-green-900 leading-tight mb-10">
            Eén abonnement,{" "}
            <span className="italic font-serif font-normal text-green-600">eindeloze</span>
            <br />mogelijkheden
          </h2>

          <p className="text-green-700 text-base sm:text-lg font-medium mb-8 leading-relaxed">
            Het is <span className="text-green-900 font-bold italic">"je gaat nooit meer terug"</span> beter.<br />
            <span className="text-green-600 text-sm sm:text-base font-normal">SwivTV vervangt dure Ziggo-pakketten en meerdere streamingdiensten voor één vaste prijs.</span>
          </p>

          {/* Countdown timer */}
          <div className="inline-block bg-white border border-green-200 rounded-2xl px-8 py-6 shadow-md">
            <div className="flex items-center gap-2 justify-center mb-5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-green-600 font-mono">
                Beperkte aanbieding eindigt om middernacht
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              {[
                { val: timeLeft.hours,   label: "UREN"     },
                { val: timeLeft.minutes, label: "MINUTEN"  },
                { val: timeLeft.seconds, label: "SECONDEN" },
              ].map((unit, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="bg-green-50 border border-green-200 rounded-xl w-16 h-16 flex items-center justify-center">
                      <span className="text-3xl font-black font-mono text-green-900">
                        {unit.val.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-[9px] text-green-500 font-mono tracking-widest mt-1 block">{unit.label}</span>
                  </div>
                  {i < 2 && <span className="text-2xl font-black text-green-400 mb-5">:</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-mono text-green-600 font-bold tracking-widest bg-green-50 border border-green-200 px-3 py-1 rounded-full mb-3 inline-block">IPTV ABONNEMENTEN</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-green-900 mb-4">Eén vast tarief, onbeperkt plezier</h2>
          <p className="text-green-600 text-sm sm:text-base">Kies je periode en aantal apparaten. Geen onverwachte kosten.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-green-100 rounded-2xl p-6 sm:p-8 shadow-md mb-12">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex flex-col gap-6">

              {/* Period tabs */}
              <div>
                <label className="text-xs font-bold text-green-600 uppercase tracking-widest block mb-3 font-mono">1. Kies de abonnementsduur:</label>
                <div className="bg-green-50 rounded-2xl p-1.5 flex gap-1">
                  {periods.map((p) => (
                    <button key={p.id} onClick={() => setSelectedPeriod(p.id)}
                      className={`relative flex-1 py-4 rounded-xl text-center font-bold text-sm transition-all cursor-pointer overflow-hidden ${
                        selectedPeriod === p.id
                          ? p.bonus
                            ? "bg-gradient-to-br from-green-600 via-green-500 to-green-700 text-white shadow-lg"
                            : "bg-green-600 text-white shadow-md"
                          : "text-green-500 hover:text-green-700"
                      }`}>
                      {p.bonus && selectedPeriod === p.id && (
                        <span className="absolute top-1.5 right-1.5 bg-white text-green-700 text-[8px] font-black px-1.5 py-0.5 rounded-full">-50%</span>
                      )}
                      <span className="block font-extrabold">{p.label}</span>
                      {p.bonus && <span className="text-[9px] uppercase tracking-widest font-bold opacity-80 block mt-0.5">BESTE DEAL</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Device grid */}
              <div>
                <label className="text-xs font-bold text-green-600 uppercase tracking-widest block mb-3 font-mono">2. Aantal gelijktijdige schermen:</label>
                <div className="bg-green-50 rounded-2xl p-1.5 grid grid-cols-2 gap-1">
                  {["1","2","3","4"].map((dev) => (
                    <button key={dev} onClick={() => setSelectedDevices(dev as "1"|"2"|"3"|"4")}
                      className={`flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                        selectedDevices === dev
                          ? "bg-green-600 text-white shadow-md"
                          : "text-green-500 hover:text-green-700"
                      }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <rect x="2" y="3" width="20" height="14" rx="2"/>
                        <path d="M8 21h8M12 17v4"/>
                      </svg>
                      {dev} {Number(dev) > 1 ? "Apparaten" : "Apparaat"}
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
          <div className="relative rounded-2xl border border-green-400/50 bg-gradient-to-b from-green-700/10 to-white p-8 min-h-[560px] flex flex-col shadow-md">
            <div className="flex justify-center mb-3"><span className="bg-green-700 text-white text-[10px] font-extrabold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-md">BESTE DEAL</span></div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 border border-green-300 text-green-700 text-[10px] font-bold uppercase tracking-widest">
                ✦ PREMIUM VIP +
              </span>
            </div>
            <p className="text-green-600 text-xs font-mono uppercase tracking-widest mb-1">12+3 MAANDEN</p>
            <h3 className="text-2xl font-extrabold text-green-900 mb-4">Premium VIP Pakket</h3>
            <div className="mb-4">
              <span className="text-5xl font-black text-green-900">€{vipPrice.toFixed(2).replace(".",",")}</span>
            </div>
            <p className="text-green-500 text-xs mb-5 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              1 apparaat inbegrepen
            </p>

            <div className="flex flex-col gap-2.5 mb-6 flex-1">
              {[
                "SD/HD/FULL HD/4K/8K/HDR-VR",
                "+80.000 Kanalen + Netflix",
                "RTL, NPO, ZIGGO, SBS, ESPN, Viaplay, VTM",
                "+200.000 Films & Series",
                "Dagelijkse Updates",
                "Alle Sport PPV Events",
                "VIP 24/7 Support",
                "Enterprise Anti-Freeze PRO",
                "Persoonlijke VIP Manager",
                "Alle Apparaten",
                "VPN Inbegrepen",
                "Exclusieve VIP Content",
                "Videoland, Netflix, Amazon, HBO, Apple TV, Hulu",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2.5 text-xs text-green-800">
                  <div className="w-4 h-4 rounded-full bg-green-100 border border-green-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button onClick={() => { setCheckoutStep("details"); setCheckoutModalOpen(true); }}
              className="w-full py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm uppercase tracking-wide transition-all cursor-pointer shadow-lg mt-auto">
              Bestel Nu &rarr;
            </button>
          </div>

          {/* Basis */}
          <div className="relative rounded-2xl border border-green-200 bg-gradient-to-b from-green-50 to-white p-8 min-h-[560px] flex flex-col shadow-sm">
            <div className="flex justify-center mb-4"><span className="bg-green-100 text-green-800 text-[10px] font-extrabold px-4 py-1 rounded-full uppercase tracking-widest border border-green-300">POPULAIR</span></div>
            <div className="flex items-center gap-2 mb-4 mt-2">
              <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-[10px] font-bold uppercase tracking-widest">
                BASIS
              </span>
            </div>
            <p className="text-green-600 text-xs font-mono uppercase tracking-widest mb-1">12 MAANDEN</p>
            <h3 className="text-2xl font-extrabold text-green-900 mb-4">Basis Pakket</h3>
            <div className="mb-4">
              <span className="text-5xl font-black text-green-900">€{normalPrice.toFixed(2).replace(".",",")}</span>
            </div>
            <p className="text-green-500 text-xs mb-5 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              1 apparaat inbegrepen
            </p>

            <div className="flex flex-col gap-2.5 mb-6 flex-1">
              {[
                "SD/HD/FULL HD Kwaliteit",
                "+50.000 Kanalen + Netflix",
                "RTL, NPO, ZIGGO, SBS, ESPN, Viaplay",
                "+140.000 Films & Series",
                "Wekelijkse Updates",
                "24/7 Support NL & BE",
                "100% Anoniem",
                "AntiFreeze Technologie",
                "Alle Apparaten",
                "VPN Inbegrepen",
                "Exclusieve NL & BE Content",
                "Netflix, Amazon, HBO, Apple TV, Hulu",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2.5 text-xs text-green-800">
                  <div className="w-4 h-4 rounded-full bg-green-100 border border-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button onClick={() => { setCheckoutStep("details"); setCheckoutModalOpen(true); }}
              className="w-full py-3.5 rounded-xl bg-green-50 hover:bg-green-100 border border-green-300 text-green-800 font-bold text-sm uppercase tracking-wide transition-all cursor-pointer mt-auto">
              Bestel Nu &rarr;
            </button>
          </div>
        </div>

        <div className="max-w-xl mx-auto border border-dashed border-green-200 rounded-xl p-5 text-center">
          <p className="text-xs text-green-600">Liever eerst proberen? 1 maand kost <strong className="text-green-900">€14.99</strong>.
            <button onClick={() => { setSelectedPeriod("3_months"); setCheckoutStep("details"); setCheckoutModalOpen(true); }} className="text-green-700 underline ml-1.5 font-bold hover:text-green-900">Probeer 1 maand &rarr;</button>
          </p>
        </div>
      </div>

      {/* Checkout Modal */}
      <AnimatePresence>
        {checkoutModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-green-950/70 backdrop-blur-md">
            <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.95}}
              className="relative w-full max-w-lg bg-white border border-green-200 rounded-2xl shadow-2xl p-6 sm:p-8 text-green-900 max-h-[90vh] overflow-y-auto">
              <button onClick={() => setCheckoutModalOpen(false)} className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-green-50 text-green-600 hover:text-green-900 text-xs font-bold">Sluiten</button>

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-green-100 text-xs text-green-500 font-mono">
                {["details","payment","processing","success"].map((step,i)=>(
                  <span key={step} className={checkoutStep===step?"text-green-900 font-bold":"text-green-400"}>
                    {i+1}. {["Account","Betaling","Activatie","Voltooid"][i]}
                  </span>
                ))}
              </div>

              {checkoutStep==="details" && (
                <div className="text-left">
                  <h3 className="text-lg font-bold text-green-900 mb-2">Configureer je Account</h3>
                  <p className="text-xs text-green-600 mb-5">We sturen je inloggegevens direct naar je e-mail.</p>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="text-xs font-bold text-green-600 block mb-1.5 font-mono">E-mailadres:</label>
                      <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="jouw@email.nl"
                        className="w-full bg-green-50 border border-green-200 rounded-xl py-3 px-4 text-sm text-green-900 placeholder-green-400 focus:outline-none focus:border-green-400"/>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-green-600 block mb-1.5 font-mono">Apparaat:</label>
                      <select value={targetDevice} onChange={e=>setTargetDevice(e.target.value)} className="w-full bg-green-50 border border-green-200 rounded-xl py-3 px-4 text-sm text-green-900 focus:outline-none">
                        <option>Smart TV (IPTV Smarters / Flix)</option>
                        <option>Amazon Firestick (TiviMate)</option>
                        <option>Android Box / Nvidia Shield</option>
                        <option>Apple TV / iPhone</option>
                        <option>PC / Mac (VLC)</option>
                      </select>
                    </div>
                    <div className="p-3.5 rounded-xl bg-green-50 border border-green-200 text-xs text-green-600">
                      <span className="font-bold text-green-900">Pakket:</span> {totalMonths} Maanden, {selectedDevices} Scherm(en) — <strong className="text-green-900">€{calculatedTotalPrice.toFixed(2)}</strong>
                    </div>
                    <button onClick={() => { if(email.includes("@")){setCheckoutStep("payment");}else{alert("Vul een geldig e-mailadres in!");}}}
                      className="w-full mt-4 py-3.5 rounded-xl bg-green-600 text-white hover:bg-green-700 font-bold text-sm text-center transition-colors">
                      Ga naar betalen &rarr;
                    </button>
                  </div>
                </div>
              )}

              {checkoutStep==="payment" && (
                <div className="text-left">
                  <h3 className="text-lg font-bold text-green-900 mb-2">Kies betaalmethode</h3>
                  <form onSubmit={handleProcessPayment} className="flex flex-col gap-4 mt-5">
                    {[{id:"ideal",label:"iDEAL (Nederland)",badge:"Populair"},{id:"bancontact",label:"Bancontact (België)",badge:""},{id:"paypal",label:"PayPal",badge:""},{id:"cc",label:"Creditcard (Visa/MC)",badge:""}].map(pm=>(
                      <div key={pm.id} onClick={()=>setPaymentMethod(pm.id)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod===pm.id?"bg-green-50 border-green-400":"bg-white border-green-100 hover:border-green-200"}`}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold flex items-center gap-2 text-green-900">
                            <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${paymentMethod===pm.id?"border-green-600":"border-green-300"}`}>
                              {paymentMethod===pm.id&&<span className="w-2 h-2 bg-green-600 rounded-full"/>}
                            </span>
                            {pm.label}
                          </span>
                          {pm.badge&&<span className="bg-green-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">{pm.badge}</span>}
                        </div>
                        {pm.id==="ideal"&&paymentMethod==="ideal"&&(
                          <select value={selectedBank} onChange={e=>setSelectedBank(e.target.value)} className="mt-3 w-full bg-white border border-green-200 rounded-lg py-2 px-3 text-xs text-green-900">
                            {["rabobank","ing","abn","sns","bunq","revolut"].map(b=><option key={b} value={b}>{b.charAt(0).toUpperCase()+b.slice(1)}</option>)}
                          </select>
                        )}
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <button type="button" onClick={()=>setCheckoutStep("details")} className="w-1/3 py-3.5 border border-green-200 rounded-xl text-green-600 font-bold text-sm">Terug</button>
                      <button type="submit" className="w-2/3 py-3.5 rounded-xl bg-green-600 text-white hover:bg-green-700 font-bold text-sm transition-colors">Voldoe €{calculatedTotalPrice.toFixed(2)}</button>
                    </div>
                  </form>
                </div>
              )}

              {checkoutStep==="processing" && (
                <div className="py-8 flex flex-col items-center justify-center text-center">
                  <RefreshCw className="w-12 h-12 text-green-600 animate-spin mb-4"/>
                  <h3 className="text-lg font-bold text-green-900 mb-2">Verwerken...</h3>
                  <p className="text-xs text-green-600 max-w-sm">Verbinding met bank. We activeren je IPTV lijn.</p>
                </div>
              )}

              {checkoutStep==="success" && (
                <div className="text-left py-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 border border-green-300 text-green-600 flex items-center justify-center mb-4 mx-auto">
                    <Check className="w-6 h-6 stroke-[3]"/>
                  </div>
                  <h3 className="text-xl font-bold text-green-900 text-center mb-1">Betaling Geslaagd!</h3>
                  <p className="text-xs text-green-600 text-center mb-5">Jouw SwivTV lijn is per direct geactiveerd.</p>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex flex-col gap-3 text-xs mb-5">
                    {[{label:"Host:",val:generatedLine.host},{label:"Gebruikersnaam:",val:generatedLine.username},{label:"Wachtwoord:",val:generatedLine.password}].map((item,i)=>(
                      <div key={i} className={`flex justify-between items-center py-1 ${i<2?"border-b border-green-100":""}`}>
                        <span className="text-green-500">{item.label}</span>
                        <span className="font-mono text-green-900 font-bold select-all">{item.val}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center py-1 border-t border-green-100">
                      <span className="text-green-500">M3U URL:</span>
                      <button onClick={()=>navigator.clipboard.writeText(generatedLine.m3uUrl).then(()=>alert("Gekopieerd!"))} className="text-green-700 font-bold flex items-center gap-1 font-mono text-[10px] hover:text-green-900">
                        <Copy className="w-3 h-3"/> Kopieer
                      </button>
                    </div>
                  </div>
                  <button onClick={()=>setCheckoutModalOpen(false)} className="w-full py-3.5 rounded-xl bg-green-600 text-white hover:bg-green-700 font-bold text-sm transition-colors">
                    Klaar, veel kijkplezier!
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
