"use client";
import { useState, useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import AIGasSpecialistChat from "@/components/AIGasSpecialistChat";
import { Menu, X, ChevronDown, ChevronUp, ArrowRight, Phone, Mail, MapPin, Wrench, Sparkles, Truck, Headphones, ClipboardList, Lightbulb, CheckCircle, MessageCircle, ArrowUp, Heart, Users } from "lucide-react";

const C = { g1: "#1a3c1a", g2: "#2d5a1e", g3: "#3a7a28", gL: "#f7faf7", gold: "#c9a84c", goldL: "#fdf8ec", bg: "#ffffff", off: "#f7faf7", dark: "#1a2a1a", body: "#3d4f3a", muted: "#7a8c74", border: "#dce8d8", white: "#fff" };
const R = 12, SH = "0 1px 8px rgba(26,60,26,0.06)", SH2 = "0 4px 16px rgba(26,60,26,0.1)";

const LOGO = "data:image/webp;base64,UklGRjgFAABXRUJQVlA4ICwFAADwFwCdASpQAFAAPplCl0glpCIhL1qrsLATCWwAz4/N8d3tjqSB70WbZ7njNNp3o6fa8p4rRKn+g4cZXbBXTWzTvITqGrSvFNpZF9WE1LbtOz8Q3k5CU/nufZOALCMKURjjtcS8Z9KaBErK1Mrmn7JNQp3GM+jpsMHdPPbLu7Tp6Hpr0lnoRDV6zO308cMfa5Or7wHRP3BCgbhUQJ8HhSN27NL/Zpa05LhBzEGWH+Pl/MG1v3SKZ3TNN70bFYFhgGZ7xFNV4QAmAAD+/u1QEpLfqe1cWaZwYU7CJLjctIkhBf3ILEL3L8cvbhGYOI1fZrwbHWMLjMnd9XVBWG+4qe3qF3WIjcE8DrNAYP36sm1IQBdZJbDpw9worJid92WWlWoD7X9xnh1lalwfK9+/giyob+YbEc0+wS4dngao7guRuXLqszeio1zNxXHxWwNhX1ECFfmiuk8jU2hI/QUjfDR9awJNFSnIvfR/sOd0JVLNHgqhEr3aMxF8ueHINYJbSsas28hs+Ce0zO+ccYzsTYOi3Evop3A1uf2cKc6kYV/ZQ9I2sE7yJ89M8q+s/nElpt1eZpZzleSxADnUaCGVJ8dEg+FZc0mIKVm9V7Bt6+Do3LMzAFLR7nBMV5bTZKyuHQ3GO5Vhm13zbwFLbitXqSl0GoltoJI/WoS5X5YqoxKoORE34aEIf95DW0muJhu5ghR9HTcKHbXBBd0svtr7/H7+TPwLiwVb+OtUmI0kb2JZ4zjDUhzvV0diPX+nH4x5zNCcIiMf9erSk00GWF6zz7X+3P9XHs+0uEFI/ib4xp74Ck8Xvvr9+qvaNb7kVv77BdYOUzPs3eIh2Ia2fVFWRCeZx5wLfM9tdWhTt0PbIs/kEA7Tka2u0WX5chNwH1Hfvwv/xeWftg5H03MUBauUUZT8TvPCjSRKCKTz55VHjxP0xbXmzcdCwGtvehCwVVs1T9Uopo3Y81Ga46tgTJhHdrZ75N+4nUS+PFF0DoH1DXGqzx1/iJSccjoAvJXZi7Qai/qNlvpj+5g9/rA2F1Dp0s1utxhkXxYclP5Av3F/YO4VfhAe19MXvBs8ytPkTc4IS2m2zABDVfavWOXish4GspNJr2Kr/lCXIx1scGp47wdUk769i3BV+N5/xqQhqCPOaatmzhrfIdr58YWbOynSdjbmBBUm3eVqZAzjON9J6Fqw06NQFCKqthPa8nutk5xij/fTA4P3GUjIpqZJTSvFfxKANpXEHDneQrwyxDaihS0PoUEORKLAo/q26Vwow7blm7jox12pGJgE9MG8CCV7sF5vAcjxPGmnH29gil0tc3yDtub887hrJRUe2LyZJ9L43Z9GWKRxXz/GQIFL6HskQJ9hak60waLJkrEbWtmvkcNw27ztStWaxbG+ToNNRgAa2iK22uqwBcXKFCtguXC+1iDOQWxmPG+Utf9/Q3qRAWSZISI9rdml6s6sUP4aViVrgJ3A3vhApC5rWZYU0YnMlJq6+rrSuMZLCRNKCzWDRX5j7gwqZNd2ziWfKEUkk5O3vt2xRwrSOrGGYaSr86AkdxtUAmIhAMdM/Yoh5n/XM7nAK8o4jk+sZyV3xAK+DNgZ/mOlaj758N40/2+nth4rQCE31g+oa8dPioeoVOXIn3JVpVvm2vzWvyvq4i2xUQj1USqxCkJ4MrM7H/thr6bfXvKm2f7C2unR9Nj4CtELdy1reM3Z8MdPp6cyURY/F5HRlaYnJmFrC9rM32LfjXsx/uA5rhhKSiiJDOcDUcAA";

/* ═══ IMAGES — Pexels free photos (no copyright, free commercial use) ═══ */
/* Pexels License: Free to use, no attribution required */
const IMG = {
  hero: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
  stove1: "https://images.pexels.com/photos/6996084/pexels-photo-6996084.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  stove2: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  flame: "https://images.pexels.com/photos/6368848/pexels-photo-6368848.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  boiler: "https://images.pexels.com/photos/3846254/pexels-photo-3846254.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  factory: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  kitchen: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  cylinder: "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  induction: "https://images.pexels.com/photos/6996088/pexels-photo-6996088.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  restaurant: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  pipes: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  pellets: "https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  warehouse: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  engineer: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
};

/* Fallback colors for product cards if images fail to load */
const PROD_COLORS = ["#2d5a1e","#3a7a28","#1a3c1a","#4a9a35","#2d5a1e","#3a7a28","#1a3c1a","#4a9a35","#2d5a1e","#3a7a28"];
const PROD_ICONS = ["🔥","🍳","🔧","🏭","♻️","⚗️","⚡","📦","🔄","🛢️"];

const PRODUCTS = [
  { name: "Ethanol Commercial Stove", cat: "Kitchen", tag: "Restaurants · Dhabas", desc: "Clean-burning, instant ignition. Drop-in LPG replacement with identical flame control. Zero soot, zero smoke.", img: IMG.stove1, badge: "Most Popular", price: "₹3,000 – ₹8,000" },
  { name: "High-Capacity Multi-Burner", cat: "Kitchen", tag: "Hotels · Canteens", desc: "Industrial-grade multi-ring burner for high-volume cooking. Handles heavy wok, tandoor, and large vessel loads.", img: IMG.stove2, badge: "", price: "₹15,000 – ₹50,000" },
  { name: "CNG/CBG Conversion Kit", cat: "Conversion", tag: "Any Existing LPG Setup", desc: "Convert existing LPG burners to CNG or compressed biogas. 2-hour install. PESO-aligned. Fully reversible.", img: IMG.cylinder, badge: "Quick Install", price: "₹8,000 – ₹25,000" },
  { name: "Industrial Biomass Boiler", cat: "Industrial", tag: "Factories · Laundries", desc: "Complete boiler conversion from LPG/diesel to biomass pellets. 25-40% savings — highest of any alternative.", img: IMG.factory, badge: "Best Savings", price: "₹1,00,000 – ₹8,00,000" },
  { name: "Biomass Pellet Storage & Feeder", cat: "Industrial", tag: "Factory Boilers", desc: "Automated hopper with screw-feed mechanism. 7-day storage capacity. Weather-sealed. Continuous fuel supply.", img: IMG.pellets, badge: "", price: "₹30,000 – ₹1,50,000" },
  { name: "Methanol Industrial Burner", cat: "Industrial", tag: "Furnaces · Process Heat", desc: "High-temperature methanol combustion for industrial process heating. Made from Indian coal and biomass feedstock.", img: IMG.flame, badge: "", price: "₹50,000 – ₹3,00,000" },
  { name: "Commercial Induction System", cat: "Kitchen", tag: "Hospitals · Modern Kitchens", desc: "Zero-fuel, zero-emission cooking. Complete independence from gas supply. Precise temperature control.", img: IMG.induction, badge: "Zero Fuel", price: "₹50,000 – ₹3,00,000" },
  { name: "CNG Cascade Storage System", cat: "Industrial", tag: "Campuses · Hotels · Factories", desc: "High-pressure CNG/CBG cascade with auto-manifold switching. 250-bar storage. Direct bulk LPG replacement.", img: IMG.pipes, badge: "", price: "₹2,00,000 – ₹8,00,000" },
  { name: "Dual-Fuel Hybrid System", cat: "Conversion", tag: "Hospitals · Hotels · Critical Ops", desc: "CBG/CNG primary + electric induction backup. Auto-switches on interruption. Guaranteed zero downtime.", img: IMG.engineer, badge: "Zero Downtime", price: "₹1,00,000 – ₹5,00,000" },
  { name: "Ethanol Bulk Storage Tank", cat: "Industrial", tag: "Large Kitchens · Canteens", desc: "500L-2000L ethanol storage with safety valves, level indicator, and auto-feed to multiple stoves.", img: IMG.warehouse, badge: "", price: "₹40,000 – ₹2,00,000" },
];

const FUELS = [
  { name: "CNG", full: "Compressed Natural Gas", cal: "52 MJ/kg", flame: "1,950°C", save: "10-20%", best: "Hotels · Large Kitchens", pros: "Identical to LPG behavior, piped or cascade, government-backed", store: "Cascade/Pipeline", safe: "Very High", avail: "Via GAIL Gas" },
  { name: "CBG", full: "Compressed Biogas", cal: "52 MJ/kg", flame: "1,900°C", save: "10-20%", best: "Hotels · Kitchens", pros: "Renewable, identical to CNG, 100% Indian supply, SATAT-backed", store: "Cylinders/Cascade", safe: "Very High", avail: "Good" },
  { name: "Ethanol", full: "Bio-Ethanol", cal: "30 MJ/kg", flame: "1,920°C", save: "15-25%", best: "Restaurants · Dhabas", pros: "Zero soot, instant ignition, easy storage, cheapest kitchen fuel", store: "Jerry cans/Drums", safe: "High", avail: "Excellent" },
  { name: "Methanol", full: "Methyl Alcohol", cal: "23 MJ/kg", flame: "1,870°C", save: "20-30%", best: "Factories · Furnaces", pros: "Made from Indian coal/biomass, very low NOx, BIS IS 18698", store: "Tanks/Drums", safe: "Moderate", avail: "Growing" },
  { name: "Biomass", full: "Pellets/Briquettes", cal: "18 MJ/kg", flame: "1,200°C", save: "25-40%", best: "Factory Boilers", pros: "Cheapest fuel, abundant in Karnataka, no license needed", store: "Hopper/Bags", safe: "Very High", avail: "Excellent" },
  { name: "Electric", full: "Induction Cooking", cal: "N/A", flame: "Precise", save: "20-30%", best: "Modern Kitchens", pros: "Zero fuel dependency, zero emission, safest option available", store: "Grid power", safe: "Highest", avail: "Universal" },
];

const FAQS = [
  { q: "What alternatives to LPG do you offer?", a: "We supply CBG (Compressed Biogas), ethanol, methanol, biomass pellets, and commercial induction systems. Our AI advisor helps you choose the right one for your specific setup." },
  { q: "Can you convert my existing stoves and burners?", a: "Yes — this is our core strength. We modify your existing LPG equipment to run on alternative fuels. Most cases don't require replacing your equipment. We also supply brand new systems." },
  { q: "How quickly can you get my business running?", a: "Kitchen conversions: 24-72 hours. Factory boilers: 3-7 days. We prepare everything off-site to minimize your downtime." },
  { q: "Will the fuel change affect my food quality?", a: "Not at all. CBG and ethanol produce clean, consistent heat identical to LPG. Our technicians calibrate your equipment to match your existing flame profiles perfectly." },
  { q: "How much will I actually save?", a: "15-40% on fuel costs depending on the fuel type. Biomass pellets offer the highest savings. We calculate exact savings before you commit — no surprises." },
  { q: "Do you supply fuel on an ongoing basis?", a: "Yes. Monthly supply contracts with guaranteed delivery. Most clients choose 6-12 month agreements. You never have to worry about sourcing fuel yourself." },
  { q: "What is methanol and is it safe?", a: "Methanol is a clean-burning industrial fuel produced from Indian coal or biomass. BIS has issued standards for its use. Our systems include all required safety mechanisms." },
  { q: "Do you serve areas outside Bangalore?", a: "Currently focused on Bangalore and surrounding industrial areas. Expanding to Chennai, Hyderabad, and Pune within 6 months." },
];

const CONVERSIONS = [
  { from: "LPG Stove", to: "Ethanol", best: "Restaurants", time: "1-2 days", save: "15-25%" },
  { from: "LPG Burner", to: "CBG", best: "Hotels", time: "2-3 days", save: "10-20%" },
  { from: "LPG/Diesel Boiler", to: "Biomass", best: "Factories", time: "3-7 days", save: "25-40%" },
  { from: "LPG/Diesel", to: "Methanol", best: "Industrial", time: "3-5 days", save: "20-30%" },
  { from: "Any Gas Stove", to: "Induction", best: "Kitchens", time: "1-2 days", save: "20-30%" },
  { from: "Any System", to: "Hybrid", best: "Hospitals", time: "5-7 days", save: "15-25%" },
];


type AssessmentResult = {
  fuel: string;
  why: string;
  alt: string;
  cost: string;
  save: string;
  time: string;
  payback: string;
};

type SectionProps = {
  children?: ReactNode;
  id?: string;
  bg?: string;
  style?: CSSProperties;
};

export default function GasShield() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [prodCat, setProdCat] = useState("All");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [aiForm, setAiForm] = useState({ biz: "", fuel: "", vol: 20 });
  const [aiResult, setAiResult] = useState<AssessmentResult | null>(null);
  const [aiLoad, setAiLoad] = useState(false);
  const [form, setForm] = useState({ name: "", business: "", type: "", spend: "", urgency: "", desc: "" });
  const [formDone, setFormDone] = useState(false);

  useEffect(() => { const h = () => { setScrolled(window.scrollY > 50); setShowTop(window.scrollY > 500); }; window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  const nav = [{ l: "Solutions", id: "solutions" }, { l: "Products", id: "products" }, { l: "Fuel Compare", id: "compare" }, { l: "Packages", id: "packages" }, { l: "Contact", id: "contact" }];
  const prods = prodCat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.cat === prodCat);

  const runAssess = () => {
    if (!aiForm.biz || !aiForm.fuel) return;
    setAiLoad(true); setAiResult(null);
    setTimeout(() => {
      const f = aiForm.biz === "Factory", h = aiForm.biz === "Hotel" || aiForm.biz === "Hospital", hi = aiForm.vol > 50;
      setAiResult({
        fuel: f ? "Biomass Pellets" : h ? "CBG" : "Ethanol",
        why: f ? "Lowest cost per unit heat for industrial boilers" : h ? "Clean combustion identical to LPG" : "Clean-burning, instant ignition, minimal changes",
        alt: f ? "Methanol · CBG" : h ? "Ethanol · Hybrid" : "CBG · Induction",
        cost: f ? (hi ? "₹5L – ₹15L" : "₹1.5L – ₹5L") : h ? "₹1L – ₹4L" : hi ? "₹40K – ₹1.2L" : "₹15K – ₹60K",
        save: f ? "₹80K – ₹3L/mo" : h ? "₹30K – ₹1.5L/mo" : hi ? "₹15K – ₹60K/mo" : "₹5K – ₹20K/mo",
        time: f ? "5-7 days" : "2-4 days", payback: f ? "3-6 months" : "4-8 months",
      });
      setAiLoad(false);
    }, 2000);
  };

  function Sec({ children, id, bg, style: s }: SectionProps) {
    const ref = useRef<HTMLElement | null>(null); const [v, setV] = useState(false);
    useEffect(() => { if (!ref.current) return; const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 }); o.observe(ref.current); return () => o.disconnect(); }, []);
    return <section ref={ref} id={id} style={{ padding: "88px 24px", background: bg || C.bg, opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(12px)", transition: "all 0.7s ease", ...(s || {}) }}><div style={{ maxWidth: 1200, margin: "0 auto" }}>{children}</div></section>;
  }

  const card = { background: C.white, border: `1px solid ${C.border}`, borderRadius: R, boxShadow: SH };
  const btn1 = { padding: "14px 28px", borderRadius: R, border: "none", background: `linear-gradient(135deg, ${C.g3}, ${C.g2})`, color: "#fff", fontSize: 15, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 4px 14px rgba(58,122,40,0.2)" };
  const btn2 = { ...btn1, background: "transparent", border: `2px solid ${C.g3}`, color: C.g2, boxShadow: "none" };
  const pill = (a: boolean) => ({ padding: "8px 18px", borderRadius: R, border: `1.5px solid ${a ? C.g2 : C.border}`, background: a ? C.gL : C.white, color: a ? C.g2 : C.body, fontSize: 13, fontWeight: 600, cursor: "pointer" });
  const input = { width: "100%", padding: "12px 16px", borderRadius: R, border: `1px solid ${C.border}`, fontSize: 14, color: C.dark, background: C.white };
  const label = { fontSize: 13, fontWeight: 600, color: C.g1, display: "block", marginBottom: 6 };

  return (
    <div style={{ fontFamily: "'DM Sans',-apple-system,sans-serif", color: C.body, background: C.bg }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');html{scroll-behavior:smooth}*{margin:0;padding:0;box-sizing:border-box}::selection{background:${C.gL};color:${C.g1}}input,select,textarea,button{font-family:inherit}input:focus,select:focus,textarea:focus{outline:2px solid ${C.g3};outline-offset:2px}@media(max-width:768px){.dsk{display:none!important}.mob{display:flex!important}.grid2{grid-template-columns:1fr!important}.grid3{grid-template-columns:1fr!important}.grid5{grid-template-columns:repeat(3,1fr)!important}}img{display:block;max-width:100%}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pdot{0%,100%{opacity:1}50%{opacity:.3}}`}</style>

      {/* NAV */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: "10px 24px", background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.5)", boxShadow: scrolled ? "0 1px 6px rgba(26,60,26,0.06)" : "none", transition: "all 0.3s", backdropFilter: "blur(12px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div onClick={() => go("hero")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <img src={LOGO} alt="Gas Shield" style={{ width: 36, height: 36, objectFit: "contain" }} />
            <div><div style={{ fontSize: 17, fontWeight: 700, color: C.g1 }}>Gas Shield</div><div style={{ fontSize: 9, color: C.muted, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600 }}>Solutions</div></div>
          </div>
          <nav className="dsk" style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {nav.map(n => <span key={n.id} onClick={() => go(n.id)} style={{ fontSize: 13, fontWeight: 500, color: C.body, cursor: "pointer" }}>{n.l}</span>)}
            <button onClick={() => go("advisor")} style={{ ...btn1, padding: "10px 20px", fontSize: 13 }}><Sparkles size={14} /> Free Assessment</button>
          </nav>
          <button className="mob" onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", alignItems: "center" }}>{menuOpen ? <X size={22} color={C.g1} /> : <Menu size={22} color={C.g1} />}</button>
        </div>
      </header>

      {menuOpen && <div style={{ position: "fixed", inset: 0, zIndex: 1001, background: "rgba(0,0,0,0.25)" }} onClick={() => setMenuOpen(false)}><div onClick={e => e.stopPropagation()} style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "75%", maxWidth: 280, background: C.white, padding: "72px 24px 24px" }}>
        <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 18, right: 18, background: "none", border: "none", cursor: "pointer" }}><X size={20} color={C.g1} /></button>
        {nav.map(n => <button key={n.id} onClick={() => go(n.id)} style={{ display: "block", width: "100%", padding: "16px 0", fontSize: 16, fontWeight: 600, color: C.g1, background: "none", border: "none", borderBottom: `1px solid ${C.border}`, textAlign: "left", cursor: "pointer" }}>{n.l}</button>)}
        <a href="tel:+918147644747" style={{ display: "block", marginTop: 24, textAlign: "center", ...btn1, textDecoration: "none", justifyContent: "center" }}><Phone size={16} /> +91 8147644747</a>
      </div></div>}

      {/* HERO */}
      <section id="hero" style={{ minHeight: "92vh", display: "flex", alignItems: "center", padding: "100px 24px 60px", background: `linear-gradient(170deg, ${C.white} 0%, ${C.gL} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-10%", top: "10%", width: "55%", height: "80%", borderRadius: 28, overflow: "hidden", opacity: 0.12, background: `linear-gradient(135deg, ${C.g2}20, ${C.g3}10)` }}><img src={IMG.factory} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { e.target.style.display = "none"; }} /></div>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(58,122,40,0.08)", border: "1px solid rgba(58,122,40,0.15)", borderRadius: 20, padding: "5px 14px", fontSize: 11, fontWeight: 700, color: C.g3, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>
              <Heart size={12} fill={C.g3} /> We Stand With Indian Businesses
            </div>
            <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, color: C.g1, lineHeight: 1.12, marginBottom: 16 }}>Your Business Doesn't Stop.<br /><span style={{ color: C.g3 }}>We Make Sure of It.</span></h1>
            <p style={{ fontSize: 17, color: C.body, lineHeight: 1.75, marginBottom: 12 }}>During this energy crisis, we're standing alongside Indian restaurants, hotels, and factories — converting existing stoves to alternative fuels and guaranteeing supply within 72 hours.</p>
            <p style={{ fontSize: 14, color: C.gold, fontWeight: 600, fontStyle: "italic", marginBottom: 28 }}>"Aap akele nahi hain. Hum aapke saath hain." — You're not alone. We are with you.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
              <button onClick={() => go("advisor")} style={btn1}>Get Free Assessment <ArrowRight size={16} /></button>
              <a href="tel:+918147644747" style={{ ...btn2, textDecoration: "none" }}><Phone size={16} /> +91 8147644747</a>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["🏭 50+ Businesses Served", "⚡ 72-Hour Conversion", "🇮🇳 100% Indian Supply", "💰 Save 15-40%"].map((b, i) => <span key={i} style={{ padding: "5px 12px", borderRadius: 16, background: "rgba(255,255,255,0.8)", border: `1px solid ${C.border}`, fontSize: 11, fontWeight: 600, color: C.g1 }}>{b}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* EMOTIONAL BANNER */}
      <div style={{ background: `linear-gradient(135deg, ${C.g2}, ${C.g1})`, padding: "20px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <Heart size={20} color={C.gold} fill={C.gold} />
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.9)", flex: 1, lineHeight: 1.6 }}><strong style={{ color: "#fff" }}>To every restaurant owner, factory manager, and hotel operator affected by the LPG crisis:</strong> We understand your pain. Your business is your family's livelihood. Gas Shield is here — not just as a vendor, but as your energy partner. We won't rest until you're running again.</p>
          <button onClick={() => go("contact")} style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.1)", color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>Talk to Us →</button>
        </div>
      </div>

      {/* THREE PILLARS */}
      <Sec id="solutions" bg={C.off}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: C.g1, marginBottom: 10 }}>Three Ways We Keep You Running</h2>
          <p style={{ fontSize: 15, color: C.muted, maxWidth: 600, margin: "0 auto" }}>Fuel delivery, system conversion, or AI guidance — choose what you need today.</p>
        </div>
        <div className="grid3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { icon: <Truck size={24} color={C.g2} />, t: "Fuel Delivery", b: "CBG, CNG, ethanol, methanol, biomass pellets — from verified Indian producers to your doorstep. Monthly contracts with guaranteed delivery.", f: "Never worry about supply again", img: IMG.cylinder, emoji: "🚛" },
            { icon: <Wrench size={24} color={C.g2} />, t: "72-Hour Conversion", b: "We convert your existing stoves, burners, and boilers — or install brand new systems. Minimal downtime, maximum savings.", f: "Existing + New systems", img: IMG.stove1, emoji: "🔧" },
            { icon: <Sparkles size={24} color={C.g2} />, t: "AI Energy Advisor", b: "Chat with our AI advisor about anything — fuel options, costs, business advice, or just to talk. We're here 24/7.", f: "Not just estimates — real guidance", img: IMG.kitchen, emoji: "🤖" },
          ].map((c, i) => (
            <div key={i} style={{ ...card, overflow: "hidden", transition: "all 0.3s" }} onMouseOver={e => { e.currentTarget.style.boxShadow = SH2; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseOut={e => { e.currentTarget.style.boxShadow = SH; e.currentTarget.style.transform = ""; }}>
              <div style={{ height: 140, overflow: "hidden", background: `linear-gradient(135deg, ${C.g2}15, ${C.g3}10)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <img src={c.img} alt={c.t} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} onError={e => { e.target.style.display = "none"; }} />
                <span style={{ fontSize: 48, opacity: 0.25, position: "relative" }}>{c.emoji}</span>
              </div>
              <div style={{ padding: 22, borderLeft: `3px solid ${C.g3}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}><div style={{ width: 40, height: 40, borderRadius: 10, background: C.gL, display: "flex", alignItems: "center", justifyContent: "center" }}>{c.icon}</div><h3 style={{ fontSize: 16, fontWeight: 700, color: C.g1 }}>{c.t}</h3></div>
                <p style={{ fontSize: 13, color: C.body, lineHeight: 1.7, marginBottom: 10 }}>{c.b}</p>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.g3, fontStyle: "italic" }}>{c.f}</span>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      {/* AI ADVISOR */}
      <Sec id="advisor">
        <div style={{ textAlign: "center", marginBottom: 44 }}><div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: C.g3, marginBottom: 8 }}>AI-POWERED</div><h2 style={{ fontSize: 28, fontWeight: 700, color: C.g1, marginBottom: 10 }}>Your Free Energy Assessment</h2><p style={{ fontSize: 15, color: C.muted, maxWidth: 540, margin: "0 auto" }}>Tell us your setup. Get instant recommendations — or open the AI Gas Specialist for fuel guidance, conversion questions, and next steps.</p></div>
        <div className="grid2" style={{ display: "grid", gridTemplateColumns: aiResult || aiLoad ? "1fr 1fr" : "1fr", gap: 28, maxWidth: 920, margin: "0 auto" }}>
          <div style={{ ...card, padding: 28 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div><label style={label}>Business Type</label><div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{["Restaurant", "Hotel", "Factory", "Hospital", "Bakery", "Laundry"].map(t => <button key={t} onClick={() => setAiForm(d => ({ ...d, biz: t }))} style={pill(aiForm.biz === t)}>{t}</button>)}</div></div>
              <div><label style={label}>Current Fuel</label><div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{["LPG", "Diesel", "Furnace Oil", "Natural Gas", "Methanol"].map(f => <button key={f} onClick={() => setAiForm(d => ({ ...d, fuel: f }))} style={pill(aiForm.fuel === f)}>{f}</button>)}</div></div>
              <div><label style={label}>Monthly Cylinders: <strong style={{ color: C.g2 }}>{aiForm.vol}</strong></label><input type="range" min="1" max="500" value={aiForm.vol} onChange={e => setAiForm(d => ({ ...d, vol: +e.target.value }))} style={{ width: "100%", accentColor: C.g3 }} /><div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: C.muted }}><span>1</span><span>250</span><span>500</span></div></div>
              <button onClick={runAssess} disabled={!aiForm.biz || !aiForm.fuel} style={{ ...btn1, width: "100%", justifyContent: "center", opacity: (!aiForm.biz || !aiForm.fuel) ? 0.5 : 1 }}><Sparkles size={16} /> Get Assessment</button>
              <p style={{ fontSize: 11, color: C.muted, textAlign: "center" }}>Or open the AI Gas Specialist below for branded chat support on fuels, compatibility, conversion, and supply planning →</p>
            </div>
          </div>
          {(aiLoad || aiResult) && (
            <div style={{ ...card, padding: 28, borderTop: `3px solid ${C.g3}` }}>
              {aiLoad ? <div style={{ textAlign: "center", padding: 48 }}><div style={{ width: 40, height: 40, border: `3px solid ${C.gL}`, borderTopColor: C.g3, borderRadius: "50%", margin: "0 auto 16px", animation: "spin 1s linear infinite" }} /><p style={{ fontSize: 15, fontWeight: 600, color: C.g1 }}>Analyzing your setup…</p></div> : aiResult && <>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}><CheckCircle size={18} color={C.g3} /><h3 style={{ fontSize: 16, fontWeight: 700, color: C.g1 }}>Your Energy Assessment</h3></div>
                {[{ l: "Recommended Fuel", v: aiResult.fuel, s: aiResult.why }, { l: "Alternatives", v: aiResult.alt }, { l: "Conversion Cost", v: aiResult.cost }, { l: "Monthly Savings", v: aiResult.save }, { l: "Timeline", v: aiResult.time }, { l: "Payback", v: aiResult.payback }].map((r, i) => <div key={i} style={{ padding: "10px 0", borderBottom: i < 5 ? `1px solid ${C.border}` : "none" }}><div style={{ fontSize: 10, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: 1.5 }}>{r.l}</div><div style={{ fontSize: 15, fontWeight: 700, color: C.g2 }}>{r.v}</div>{r.s && <div style={{ fontSize: 11, color: C.body }}>{r.s}</div>}</div>)}
                <button onClick={() => go("contact")} style={{ ...btn1, marginTop: 14, width: "100%", justifyContent: "center", fontSize: 13 }}>Schedule Free Visit</button>
              </>}
            </div>
          )}
        </div>
      </Sec>

      {/* PRODUCTS */}
      <Sec id="products" bg={C.off}>
        <div style={{ textAlign: "center", marginBottom: 44 }}><h2 style={{ fontSize: 28, fontWeight: 700, color: C.g1, marginBottom: 10 }}>Equipment & Conversion Solutions</h2><p style={{ fontSize: 15, color: C.muted }}>Real stoves, real burners, real boilers — converting Indian businesses every day.</p></div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>{["All", "Kitchen", "Industrial", "Conversion"].map(f => <button key={f} onClick={() => setProdCat(f)} style={pill(prodCat === f)}>{f}</button>)}</div>
        <div className="grid3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {prods.map((p, pi) => {
            const idx = PRODUCTS.indexOf(p);
            return (
            <div key={pi} style={{ ...card, overflow: "hidden", transition: "all 0.3s" }} onMouseOver={e => { e.currentTarget.style.boxShadow = SH2; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseOut={e => { e.currentTarget.style.boxShadow = SH; e.currentTarget.style.transform = ""; }}>
              <div style={{ height: 200, background: `linear-gradient(135deg, ${PROD_COLORS[idx % PROD_COLORS.length]}22, ${PROD_COLORS[idx % PROD_COLORS.length]}11)`, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} onError={e => { e.target.style.display = "none"; }} />
                <span style={{ fontSize: 56, opacity: 0.3, position: "relative", zIndex: 1 }}>{PROD_ICONS[idx % PROD_ICONS.length]}</span>
                {p.badge && <span style={{ position: "absolute", top: 10, right: 10, background: C.g2, color: "#fff", fontSize: 9, fontWeight: 700, padding: "4px 10px", borderRadius: 6, letterSpacing: 0.5, textTransform: "uppercase", zIndex: 2 }}>{p.badge}</span>}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 50, background: "linear-gradient(to top, rgba(26,60,26,0.3), transparent)", zIndex: 2 }} />
              </div>
              <div style={{ padding: 18 }}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: C.g1, marginBottom: 4 }}>{p.name}</h4>
                <p style={{ fontSize: 12, color: C.body, lineHeight: 1.6, marginBottom: 8, minHeight: 36 }}>{p.desc}</p>
                <div style={{ display: "flex", gap: 6, marginBottom: 10 }}><span style={{ fontSize: 10, color: C.muted, background: C.gL, padding: "2px 8px", borderRadius: 4 }}>{p.tag}</span><span style={{ fontSize: 10, color: C.white, background: C.g3, padding: "2px 8px", borderRadius: 4 }}>{p.cat}</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: `1px solid ${C.border}`, paddingTop: 10, marginBottom: 10 }}>
                  <div><span style={{ fontSize: 10, color: C.muted, display: "block" }}>Estimated Price</span><span style={{ fontSize: 14, fontWeight: 700, color: C.g2 }}>{p.price}</span></div>
                  <button onClick={() => go("advisor")} style={{ fontSize: 10, fontWeight: 600, color: C.g3, background: C.gL, border: `1px solid ${C.g3}30`, padding: "4px 10px", borderRadius: 6, cursor: "pointer" }}>Instant AI Quote →</button>
                </div>
                <button onClick={() => go("contact")} style={{ width: "100%", fontSize: 12, fontWeight: 600, color: "#fff", background: C.g3, border: "none", padding: "9px", borderRadius: 8, cursor: "pointer" }}>Talk to Us</button>
              </div>
            </div>
          );})}
        </div>
        <div style={{ marginTop: 24, padding: 20, background: C.goldL, borderRadius: R, border: `1px solid ${C.gold}30`, textAlign: "center" }}>
          <p style={{ fontSize: 13, color: C.body, lineHeight: 1.7, marginBottom: 6 }}>
            <strong style={{ color: C.g1 }}>These prices are tentative estimates</strong> based on standard configurations. Your actual cost may be lower depending on your setup.
          </p>
          <p style={{ fontSize: 13, color: C.body, lineHeight: 1.7, marginBottom: 8 }}>
            For an instant, personalized quote — try our <strong style={{ color: C.g3, cursor: "pointer" }} onClick={() => go("advisor")}>AI Fuel Advisor</strong> or <strong style={{ color: C.g3, cursor: "pointer" }} onClick={() => go("contact")}>Instant Assessment</strong> tool above.
          </p>
          <p style={{ fontSize: 14, color: C.gold, fontWeight: 600, fontStyle: "italic" }}>
            We will be happy to work with you to reduce costs even further as we navigate this emergency — united, together. 🙏
          </p>
        </div>
      </Sec>

      {/* FUEL COMPARISON TABLE */}
      <Sec id="compare">
        <div style={{ textAlign: "center", marginBottom: 44 }}><h2 style={{ fontSize: 28, fontWeight: 700, color: C.g1, marginBottom: 10 }}>Fuel Comparison — Technical Specs</h2><p style={{ fontSize: 15, color: C.muted }}>Every fuel compared side-by-side. Data-driven decisions for your business.</p></div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 3px", minWidth: 800, fontSize: 13 }}>
            <thead><tr style={{ background: C.g2 }}>{["Fuel", "Full Name", "Energy", "Flame Temp", "Savings vs LPG", "Best For", "Storage", "Safety", "Availability"].map(h => <th key={h} style={{ padding: "12px 10px", textAlign: "left", fontSize: 10, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: 1 }}>{h}</th>)}</tr></thead>
            <tbody>{FUELS.map((f, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? C.gL : C.white }}>
                <td style={{ padding: "12px 10px", fontWeight: 700, color: C.g2, borderRadius: `${R}px 0 0 ${R}px` }}>{f.name}</td>
                <td style={{ padding: "12px 10px", color: C.body }}>{f.full}</td>
                <td style={{ padding: "12px 10px", fontWeight: 600, color: C.g1 }}>{f.cal}</td>
                <td style={{ padding: "12px 10px", color: C.body }}>{f.flame}</td>
                <td style={{ padding: "12px 10px", fontWeight: 700, color: C.g3 }}>{f.save}</td>
                <td style={{ padding: "12px 10px", color: C.body }}>{f.best}</td>
                <td style={{ padding: "12px 10px", color: C.muted }}>{f.store}</td>
                <td style={{ padding: "12px 10px" }}><span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 600, background: f.safe === "Highest" ? "#d4edda" : f.safe === "Very High" ? C.gL : "#fff8e1", color: f.safe === "Highest" ? "#155724" : f.safe === "Very High" ? C.g2 : "#856404" }}>{f.safe}</span></td>
                <td style={{ padding: "12px 10px", borderRadius: `0 ${R}px ${R}px 0`, color: C.body }}>{f.avail}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </Sec>

      {/* INDUSTRY-FUEL MATCHING — Which fuel fits which business */}
      <Sec bg={C.off}>
        <div style={{ textAlign: "center", marginBottom: 44 }}><h2 style={{ fontSize: 28, fontWeight: 700, color: C.g1, marginBottom: 10 }}>Which Fuel Fits Your Business?</h2><p style={{ fontSize: 15, color: C.muted }}>Every business is different. Here is our recommended fuel by industry type, capacity, and application.</p></div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 3px", minWidth: 900, fontSize: 13 }}>
            <thead><tr style={{ background: C.g2 }}>{["Industry", "Application", "Capacity", "Recommended Fuel", "Heat Output", "Why This Fuel", "System Type"].map(h => <th key={h} style={{ padding: "12px 8px", textAlign: "left", fontSize: 10, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: 1 }}>{h}</th>)}</tr></thead>
            <tbody>{[
              ["Small Restaurant", "Cooking", "1-5 burners", "Ethanol", "3-8 kW/burner", "Cheapest conversion, instant swap, zero soot", "Stove replacement"],
              ["Large Restaurant", "Cooking", "5-15 burners", "Ethanol or CNG", "5-15 kW/burner", "High volume, consistent flame, easy refill", "Multi-burner + tank"],
              ["Hotel Kitchen", "Cooking + Hot Water", "10-30 burners", "CNG/CBG", "10-25 kW/burner", "LPG-identical behavior, cascade supply", "Cascade + conversion kit"],
              ["Hospital", "Kitchen + Boiler + Laundry", "Mixed loads", "Dual-Fuel Hybrid", "Variable", "Zero downtime critical, auto-switching", "CBG + Electric backup"],
              ["Small Factory", "Boiler (steam/hot water)", "100-500 kg/hr steam", "Biomass Pellets", "3,500-4,200 kcal/kg", "Cheapest fuel, 25-40% savings, abundant", "Pellet burner + hopper"],
              ["Medium Factory", "Process heating", "500-2000 kg/hr", "Biomass or Methanol", "4,200+ kcal/kg", "High heat output, continuous operation", "Boiler conversion"],
              ["Large Factory", "Furnace / Kiln / Dryer", "2000+ kg/hr", "Methanol", "5,400 kcal/kg", "Highest temperature, low NOx, BIS certified", "Methanol burner system"],
              ["Bakery", "Ovens + Cooking", "2-8 burners", "Ethanol or CNG", "5-12 kW/burner", "Precise heat, food-safe, clean burning", "Stove + oven conversion"],
              ["Laundry / Dry Clean", "Boiler (steam press)", "200-800 kg/hr", "Biomass Pellets", "3,500+ kcal/kg", "Cheapest per kg of steam generated", "Biomass boiler"],
              ["Food Processor", "Cooking + Drying", "Mixed industrial", "Biomass + Ethanol", "Mixed", "Biomass for heat, ethanol for cooking lines", "Hybrid installation"],
              ["Campus / Institution", "Kitchen + Hot Water", "Large centralized", "CNG Cascade", "Centralized supply", "Single cascade feeds multiple points", "Cascade + manifold"],
            ].map((row, ri) => (
              <tr key={ri} style={{ background: ri % 2 === 0 ? C.gL : C.white }}>
                {row.map((cell, ci) => <td key={ci} style={{ padding: "10px 8px", fontSize: 12, color: ci === 3 ? C.g3 : C.body, fontWeight: ci === 0 || ci === 3 ? 700 : 400, borderRadius: ci === 0 ? `${R}px 0 0 ${R}px` : ci === 6 ? `0 ${R}px ${R}px 0` : 0 }}>{cell}</td>)}
              </tr>
            ))}</tbody>
          </table>
        </div>
        <p style={{ textAlign: "center", fontSize: 12, color: C.muted, marginTop: 16, fontStyle: "italic" }}>This is general guidance. Our AI advisor and on-site assessment provide recommendations specific to your exact setup, equipment, and consumption patterns.</p>
      </Sec>

      {/* PARTNER & SUPPLIER REASSURANCE */}
      <Sec>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="grid2">
          <div style={{ ...card, padding: 28, borderLeft: `4px solid ${C.g3}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}><Users size={22} color={C.g3} /><h3 style={{ fontSize: 18, fontWeight: 700, color: C.g1 }}>To Our Suppliers & Partners</h3></div>
            <p style={{ fontSize: 14, color: C.body, lineHeight: 1.8, marginBottom: 12 }}>We understand that trust is earned, not demanded. Gas Shield is committed to being the kind of partner you want to work with — transparent, reliable, and growth-oriented.</p>
            <p style={{ fontSize: 14, color: C.body, lineHeight: 1.8, marginBottom: 12 }}>We pay on time. We communicate clearly. We bring guaranteed volume because our clients are signed and waiting. When you grow, we grow. This is a long-term partnership, not a one-time transaction.</p>
            <p style={{ fontSize: 13, color: C.g3, fontWeight: 600, fontStyle: "italic" }}>"Your fuel powers Indian businesses. Our platform ensures it reaches them. Together, we are building India's energy resilience."</p>
          </div>
          <div style={{ ...card, padding: 28, borderLeft: `4px solid ${C.gold}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}><Heart size={22} color={C.gold} fill={C.gold} /><h3 style={{ fontSize: 18, fontWeight: 700, color: C.g1 }}>To Our Clients</h3></div>
            <p style={{ fontSize: 14, color: C.body, lineHeight: 1.8, marginBottom: 12 }}>We know this crisis isn't just about fuel — it's about your employees' livelihoods, your family's security, and the community that depends on your business staying open.</p>
            <p style={{ fontSize: 14, color: C.body, lineHeight: 1.8, marginBottom: 12 }}>Gas Shield exists because of you. We will not rest until your kitchen is cooking, your factory is running, and your business is thriving again. We are available 24/7 during this crisis.</p>
            <p style={{ fontSize: 13, color: C.gold, fontWeight: 600, fontStyle: "italic" }}>"Aap akele nahi hain. Hum aapke saath hain, aaj bhi aur kal bhi." — You are not alone. We are with you, today and tomorrow.</p>
          </div>
        </div>
      </Sec>

      {/* PACKAGES */}
      <Sec id="packages" bg={C.off}>
        <div style={{ textAlign: "center", marginBottom: 44 }}><h2 style={{ fontSize: 28, fontWeight: 700, color: C.g1, marginBottom: 10 }}>Choose Your Plan</h2><p style={{ fontSize: 15, color: C.muted }}>Flexible options that fit your business. No hidden costs, no pressure.</p></div>
        <div className="grid3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { name: "Free Contract", sub: "Pay as you go", color: C.g3, pop: false, feat: ["No lock-in period", "Best fuel prices in market", "Huge savings vs LPG", "Standard conversion fees apply", "Delivery within 48 hours", "Phone + email support"], cta: "Get Started" },
            { name: "6-Month Plan", sub: "Most flexible", color: C.g2, pop: true, feat: ["Discounted conversion fees", "10% fuel price discount", "Priority delivery scheduling", "Dedicated support line", "Free quarterly maintenance", "72-hour emergency response"], cta: "Talk to Advisor" },
            { name: "12-Month Plan", sub: "Maximum value", color: C.g1, pop: false, feat: ["ZERO conversion fees", "15-20% fuel discount", "Dedicated account manager", "Free annual maintenance (AMC)", "Same-day emergency response", "Price lock guarantee"], cta: "Request Enterprise Quote" },
          ].map((p, i) => (
            <div key={i} style={{ ...card, borderTop: `4px solid ${p.color}`, position: "relative", padding: 24, transition: "all 0.3s" }} onMouseOver={e => { e.currentTarget.style.boxShadow = SH2; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseOut={e => { e.currentTarget.style.boxShadow = SH; e.currentTarget.style.transform = ""; }}>
              {p.pop && <span style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: C.gold, color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 14px", borderRadius: 20 }}>Recommended</span>}
              <h3 style={{ fontSize: 20, fontWeight: 800, color: p.color, marginBottom: 2 }}>{p.name}</h3>
              <p style={{ fontSize: 13, color: C.muted, marginBottom: 18 }}>{p.sub}</p>
              {p.feat.map((f, j) => <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}><CheckCircle size={14} color={C.g3} /><span style={{ fontSize: 13, color: C.body }}>{f}</span></div>)}
              <button onClick={() => go("contact")} style={{ ...btn1, width: "100%", justifyContent: "center", marginTop: 16, fontSize: 13, background: p.pop ? `linear-gradient(135deg, ${C.g3}, ${C.g2})` : C.g3 }}>{p.cta}</button>
            </div>
          ))}
        </div>
      </Sec>

      {/* CONVERSION TABLE */}
      <Sec>
        <div style={{ textAlign: "center", marginBottom: 44 }}><h2 style={{ fontSize: 28, fontWeight: 700, color: C.g1, marginBottom: 10 }}>Conversion Services</h2><p style={{ fontSize: 15, color: C.muted }}>From assessment to ongoing fuel supply — we handle everything.</p></div>
        <div className="grid5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, marginBottom: 36 }}>
          {[{ n: "1", icon: <ClipboardList size={18} color={C.g2} />, t: "Assess" }, { n: "2", icon: <Lightbulb size={18} color={C.g2} />, t: "Recommend" }, { n: "3", icon: <Wrench size={18} color={C.g2} />, t: "Convert" }, { n: "4", icon: <Truck size={18} color={C.g2} />, t: "Supply" }, { n: "5", icon: <Headphones size={18} color={C.g2} />, t: "Support" }].map((s, i) => <div key={i} style={{ textAlign: "center" }}><div style={{ width: 40, height: 40, borderRadius: 10, background: C.gL, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 6px", position: "relative" }}>{s.icon}<span style={{ position: "absolute", top: -3, right: -3, width: 16, height: 16, borderRadius: "50%", background: C.g2, color: "#fff", fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.n}</span></div><span style={{ fontSize: 12, fontWeight: 600, color: C.g1 }}>{s.t}</span></div>)}
        </div>
        <div style={{ overflowX: "auto" }}><table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 3px", minWidth: 500, fontSize: 13 }}><thead><tr>{["From", "To", "Best For", "Timeline", "Savings"].map(h => <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontSize: 10, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: 1 }}>{h}</th>)}</tr></thead><tbody>{CONVERSIONS.map((c, i) => <tr key={i} style={{ background: i % 2 === 0 ? C.gL : C.white }}><td style={{ padding: "10px 12px", fontWeight: 600, color: C.g1, borderRadius: `${R}px 0 0 ${R}px` }}>{c.from}</td><td style={{ padding: "10px 12px", fontWeight: 700, color: C.g3 }}>{c.to}</td><td style={{ padding: "10px 12px", color: C.body }}>{c.best}</td><td style={{ padding: "10px 12px", color: C.body }}>{c.time}</td><td style={{ padding: "10px 12px", fontWeight: 700, color: C.g3, borderRadius: `0 ${R}px ${R}px 0` }}>{c.save}</td></tr>)}</tbody></table></div>
      </Sec>

      {/* TRUST */}
      <Sec bg={C.off}>
        <div className="grid3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, textAlign: "center", marginBottom: 32 }}>
          {[{ n: "50+", l: "Businesses Served" }, { n: "72 hrs", l: "Avg. Conversion" }, { n: "15-40%", l: "Cost Savings" }].map((s, i) => <div key={i}><div style={{ fontSize: 36, fontWeight: 800, color: C.g2 }}>{s.n}</div><div style={{ fontSize: 13, color: C.muted }}>{s.l}</div></div>)}
        </div>
        <div style={{ maxWidth: 640, margin: "0 auto", ...card, borderLeft: `3px solid ${C.gold}`, padding: 22 }}>
          <p style={{ fontSize: 15, color: C.g1, fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>"We were days away from shutting our kitchen. Gas Shield converted our existing burners to ethanol in 48 hours. Food quality is identical — our customers didn't notice any difference."</p>
          <span style={{ fontSize: 12, fontWeight: 600, color: C.muted }}>— Restaurant Owner, Koramangala, Bangalore</span>
        </div>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 20 }}>{["🇮🇳 Made in India", "🔧 PESO-Aligned", "🌱 Clean Energy"].map((b, i) => <span key={i} style={{ padding: "6px 14px", borderRadius: 8, background: C.gL, fontSize: 12, fontWeight: 600, color: C.g2 }}>{b}</span>)}</div>
      </Sec>

      {/* FAQ */}
      <Sec>
        <div style={{ textAlign: "center", marginBottom: 44 }}><h2 style={{ fontSize: 28, fontWeight: 700, color: C.g1 }}>Common Questions</h2></div>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>{FAQS.map((f, i) => <div key={i} style={{ borderBottom: `1px solid ${C.border}` }}><button onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{ width: "100%", padding: "16px 0", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}><span style={{ fontSize: 14, fontWeight: 600, color: C.g1, paddingRight: 16 }}>{f.q}</span>{faqOpen === i ? <ChevronUp size={16} color={C.muted} /> : <ChevronDown size={16} color={C.muted} />}</button>{faqOpen === i && <div style={{ padding: "0 0 16px", fontSize: 13, color: C.body, lineHeight: 1.7 }}>{f.a}</div>}</div>)}</div>
      </Sec>

      {/* CONTACT */}
      <Sec id="contact" bg={C.off}>
        <div style={{ textAlign: "center", marginBottom: 44 }}><h2 style={{ fontSize: 28, fontWeight: 700, color: C.g1, marginBottom: 10 }}>Let's Talk</h2><p style={{ fontSize: 15, color: C.muted }}>No obligation. No pressure. Just a conversation about what's right for your business.</p></div>
        <div className="grid2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, maxWidth: 920, margin: "0 auto" }}>
          <div style={{ ...card, padding: 24 }}>
            {formDone ? <div style={{ textAlign: "center", padding: 40 }}><CheckCircle size={40} color={C.g3} style={{ margin: "0 auto 12px" }} /><h3 style={{ fontSize: 18, fontWeight: 700, color: C.g1, marginBottom: 6 }}>Thank you!</h3><p style={{ fontSize: 14, color: C.body }}>We'll call within 2-4 hours. For immediate help: <strong>+91 8147644747</strong></p></div> : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div><label style={label}>Your Name</label><input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} style={input} /></div>
                <div><label style={label}>Business Name</label><input value={form.business} onChange={e => setForm(p => ({ ...p, business: e.target.value }))} style={input} /></div>
                <div><label style={label}>Business Type</label><select value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))} style={input}><option value="">Select...</option>{["Restaurant", "Hotel", "Factory", "Hospital", "Bakery", "Laundry", "Other"].map(o => <option key={o}>{o}</option>)}</select></div>
                <div><label style={label}>How urgent?</label>{["Need help this week", "Planning this month", "Exploring options"].map(u => <label key={u} style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 13, color: C.body, marginBottom: 4 }}><input type="radio" name="urg" checked={form.urgency === u} onChange={() => setForm(p => ({ ...p, urgency: u }))} style={{ accentColor: C.g3 }} />{u}</label>)}</div>
                <button onClick={() => setFormDone(true)} style={{ ...btn1, width: "100%", justifyContent: "center" }}>Request Free Assessment</button>
              </div>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, justifyContent: "center" }}>
            {[
              { icon: <Phone size={18} color={C.g2} />, l: "Call", v: "+91 8147644747" },
              { icon: <MessageCircle size={18} color="#25D366" />, l: "WhatsApp", v: "+91 8147644747" },
              { icon: <Mail size={18} color={C.g2} />, l: "Email", v: "operations@gasshieldsolutions.com" },
              { icon: <MapPin size={18} color={C.g2} />, l: "Office", v: "HP No.51(1), 5th Main Rd, 5th Block, Jayanagar, Bangalore - 560041" },
            ].map((c, i) => <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}><div style={{ width: 40, height: 40, borderRadius: 10, background: C.gL, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{c.icon}</div><div><div style={{ fontSize: 11, color: C.muted, fontWeight: 600 }}>{c.l}</div><div style={{ fontSize: 14, fontWeight: 600, color: C.g1 }}>{c.v}</div></div></div>)}
            <div style={{ ...card, padding: 16, borderLeft: `3px solid ${C.gold}`, marginTop: 8 }}><p style={{ fontSize: 13, color: C.body, fontStyle: "italic" }}>"We typically respond within 2-4 hours. For emergencies, call directly — we answer 24/7 during the crisis."</p></div>
          </div>
        </div>
      </Sec>

      {/* FOOTER */}
      <footer style={{ background: C.g1, padding: "44px 24px 20px", color: "rgba(255,255,255,0.6)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, marginBottom: 24 }} className="grid3">
          <div><div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}><img src={LOGO} alt="Logo" style={{ width: 24, height: 24 }} /><span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>Gas Shield Solutions</span></div><p style={{ fontSize: 12, lineHeight: 1.6 }}>India's Alternative Energy Platform<br />www.gasshieldsolutions.com</p></div>
          <div><div style={{ fontSize: 12, fontWeight: 600, color: "#fff", marginBottom: 10 }}>Quick Links</div>{nav.map(n => <div key={n.id} onClick={() => go(n.id)} style={{ fontSize: 12, marginBottom: 6, cursor: "pointer" }}>{n.l}</div>)}</div>
          <div><div style={{ fontSize: 12, fontWeight: 600, color: "#fff", marginBottom: 10 }}>Contact</div><p style={{ fontSize: 12, marginBottom: 4 }}>📞 +91 8147644747</p><p style={{ fontSize: 12, marginBottom: 4 }}>✉️ operations@gasshieldsolutions.com</p><p style={{ fontSize: 12 }}>📍 Jayanagar, Bangalore - 560041</p></div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16, display: "flex", justifyContent: "space-between" }}><span style={{ fontSize: 11 }}>© 2026 Gas Shield Solutions OPC Pvt Ltd</span><span style={{ fontSize: 11 }}>Made in India 🇮🇳</span></div>
      </footer>

      {/* WHATSAPP */}
      <a href="https://wa.me/918147644747" target="_blank" rel="noopener noreferrer" style={{ position: "fixed", bottom: 20, right: 20, width: 50, height: 50, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 3px 12px rgba(37,211,102,0.3)", zIndex: 998 }}><MessageCircle size={22} color="#fff" fill="#fff" /></a>

      <AIGasSpecialistChat
        colors={{
          primary: C.g3,
          secondary: C.g2,
          surface: C.gL,
          text: C.g1,
          muted: C.muted,
          border: C.border,
          white: C.white,
        }}
        radius={R}
      />


      {showTop && <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ position: "fixed", bottom: 136, right: 82, width: 36, height: 36, borderRadius: R, background: C.white, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 997 }}><ArrowUp size={16} color={C.g2} /></button>}
    </div>
  );
}
