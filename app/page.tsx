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
  hero: "https://images.pexels.com/photos/3229014/pexels-photo-3229014.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
  stove1: "https://images.pexels.com/photos/3722212/pexels-photo-3722212.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  stove2: "https://images.pexels.com/photos/21661595/pexels-photo-21661595.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  flame: "https://images.pexels.com/photos/6126281/pexels-photo-6126281.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  boiler: "https://images.pexels.com/photos/372796/pexels-photo-372796.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  factory: "https://images.pexels.com/photos/28806603/pexels-photo-28806603.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  kitchen: "https://images.pexels.com/photos/30120987/pexels-photo-30120987.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  cylinder: "https://images.pexels.com/photos/11489637/pexels-photo-11489637.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  induction: "https://images.pexels.com/photos/7019014/pexels-photo-7019014.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  restaurant: "https://images.pexels.com/photos/5251019/pexels-photo-5251019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  pipes: "https://images.pexels.com/photos/2310904/pexels-photo-2310904.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  pellets: "https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  warehouse: "https://images.pexels.com/photos/18885403/pexels-photo-18885403.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  engineer: "https://images.pexels.com/photos/8961126/pexels-photo-8961126.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  tanker: "https://images.pexels.com/photos/9739039/pexels-photo-9739039.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
};

/* Fallback colors for product cards if images fail to load */
const PROD_COLORS = ["#2d5a1e","#3a7a28","#1a3c1a","#4a9a35","#2d5a1e","#3a7a28","#1a3c1a","#4a9a35","#2d5a1e","#3a7a28"];
const PROD_ICONS = ["🔥","🍳","🔧","🏭","♻️","⚗️","⚡","📦","🔄","🛢️"];

const PRODUCTS = [
  { name: "Ethanol Commercial Burner", cat: "Kitchen", tag: "Restaurants · Dhabas", desc: "Clean-combustion ethanol burner with instant ignition and precision flame regulation. Direct drop-in LPG replacement — zero soot, zero particulate emissions.", img: IMG.stove1, badge: "Most Popular", price: "₹3,000 – ₹8,000" },
  { name: "High-Capacity Multi-Burner", cat: "Kitchen", tag: "Hotels · Canteens", desc: "Industrial-grade multi-ring burner system engineered for high-throughput commercial cooking. Rated for heavy wok, tandoor, and large-vessel thermal loads.", img: IMG.stove2, badge: "", price: "₹15,000 – ₹50,000" },
  { name: "CNG/CBG Conversion Kit", cat: "Conversion", tag: "Any Existing LPG Setup", desc: "Precision retrofit kit for converting LPG burners to CNG or compressed biogas operation. 2-hour installation, PESO-compliant, fully reversible.", img: IMG.cylinder, badge: "Quick Install", price: "₹8,000 – ₹25,000" },
  { name: "Industrial Biomass Boiler", cat: "Industrial", tag: "Factories · Laundries", desc: "Complete boiler conversion from LPG/diesel to biomass pellet combustion. Delivers 25–40% fuel cost reduction — highest savings across all alternative fuel pathways.", img: IMG.factory, badge: "Best Savings", price: "₹1,00,000 – ₹8,00,000" },
  { name: "Biomass Pellet Storage & Feeder", cat: "Industrial", tag: "Factory Boilers", desc: "Automated hopper system with screw-feed mechanism and 7-day storage capacity. Weather-sealed enclosure ensures continuous fuel delivery to combustion system.", img: IMG.pellets, badge: "", price: "₹30,000 – ₹1,50,000" },
  { name: "Methanol Industrial Burner", cat: "Industrial", tag: "Furnaces · Process Heat", desc: "High-temperature methanol combustion system for industrial process heating. BIS IS 18698 compliant. Sourced from Indian coal and biomass feedstock.", img: IMG.flame, badge: "", price: "₹50,000 – ₹3,00,000" },
  { name: "Commercial Induction System", cat: "Kitchen", tag: "Hospitals · Modern Kitchens", desc: "Zero-combustion, zero-emission electric cooking system. Full independence from fuel supply chains with precision temperature regulation across all cooking modes.", img: IMG.induction, badge: "Zero Fuel", price: "₹50,000 – ₹3,00,000" },
  { name: "CNG Cascade Storage System", cat: "Industrial", tag: "Campuses · Hotels · Factories", desc: "High-pressure CNG/CBG cascade storage at 250 bar with auto-manifold switching. Engineered as a direct volumetric replacement for bulk LPG installations.", img: IMG.pipes, badge: "", price: "₹2,00,000 – ₹8,00,000" },
  { name: "Dual-Fuel Hybrid System", cat: "Conversion", tag: "Hospitals · Hotels · Critical Ops", desc: "CBG/CNG primary fuel line with electric induction backup. Automatic switchover on supply interruption — engineered for guaranteed zero-downtime operation.", img: IMG.engineer, badge: "Zero Downtime", price: "₹1,00,000 – ₹5,00,000" },
  { name: "Ethanol Bulk Storage Vessel", cat: "Industrial", tag: "Large Kitchens · Canteens", desc: "500L–2000L ethanol storage vessel with integrated safety valves, level indication, and auto-feed distribution to multiple burner connection points.", img: IMG.warehouse, badge: "", price: "₹40,000 – ₹2,00,000" },
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
  { q: "What alternative fuels does Gas Shield support?", a: "We engineer transitions to CBG (Compressed Biogas), CNG, ethanol, methanol, biomass pellets, and commercial induction systems. Our AI assessment tool evaluates your specific operational parameters to recommend the optimal fuel pathway." },
  { q: "Can existing LPG equipment be retrofitted?", a: "Yes — retrofit engineering is our core competency. We modify existing LPG burners, stoves, and boilers to operate on alternative fuels without full equipment replacement. We also supply and commission new purpose-built systems." },
  { q: "What is the typical conversion timeline?", a: "Commercial kitchen conversions: 24–72 hours. Industrial boiler retrofits: 3–7 days. All fabrication and pre-assembly is completed off-site to minimise operational downtime during installation." },
  { q: "Does the fuel transition affect cooking output or food quality?", a: "No measurable impact. CBG and ethanol deliver clean, consistent thermal output identical to LPG. Our engineers calibrate each installation to match existing flame profiles and heat distribution." },
  { q: "What cost savings can be expected?", a: "15–40% reduction in fuel expenditure depending on fuel type and consumption volume. Biomass pellets deliver the highest margin. We provide a detailed cost-benefit analysis before any commitment." },
  { q: "Do you help with fuel procurement?", a: "Yes. We coordinate with verified fuel suppliers and logistics partners on your behalf, facilitating procurement agreements and delivery scheduling. Most clients operate on 6–12 month supply arrangements with priority scheduling." },
  { q: "What is methanol and what are the safety requirements?", a: "Methanol is a high-temperature industrial fuel produced from Indian coal or biomass feedstock. BIS IS 18698 governs its use. All Gas Shield methanol systems include mandatory safety interlocks, ventilation specs, and flame-detection controls." },
  { q: "What geographies does Gas Shield currently serve?", a: "Currently operational across Bangalore and surrounding industrial corridors. Expansion to Chennai, Hyderabad, and Pune is scheduled within the next two quarters." },
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
  const nav = [{ l: "Services", id: "solutions" }, { l: "Catalogue", id: "products" }, { l: "Fuel Data", id: "compare" }, { l: "Plans", id: "packages" }, { l: "Contact", id: "contact" }];
  const prods = prodCat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.cat === prodCat);

  const runAssess = () => {
    if (!aiForm.biz || !aiForm.fuel) return;
    setAiLoad(true); setAiResult(null);
    setTimeout(() => {
      const biz = aiForm.biz;
      const vol = aiForm.vol;
      const isFactory = biz === "Factory";
      const isHotel = biz === "Hotel";
      const isHospital = biz === "Hospital";
      const isLaundry = biz === "Laundry";
      const isIndustrial = isFactory || isLaundry;
      const isHighVol = vol > 50;
      const isMedVol = vol > 15;

      let fuel: string, why: string, alt: string, cost: string, save: string, time: string, payback: string;

      if (isIndustrial) {
        fuel = isHighVol ? "Biomass Pellets" : "Methanol";
        why = isHighVol ? "Lowest cost per unit heat (3,500–4,200 kcal/kg). 25–40% savings on boiler operations — highest margin across all alternatives" : "High-temperature combustion (1,870°C) with low NOx. BIS IS 18698 compliant. Ideal for process heating applications";
        alt = isHighVol ? "Methanol · CBG Cascade" : "Biomass · CBG";
        cost = isHighVol ? "₹5L – ₹15L" : vol > 30 ? "₹2L – ₹6L" : "₹1L – ₹4L";
        save = isHighVol ? "₹80K – ₹3L/mo" : vol > 30 ? "₹40K – ₹1.5L/mo" : "₹20K – ₹80K/mo";
        time = isHighVol ? "5–7 days" : "3–5 days";
        payback = isHighVol ? "3–5 months" : "4–7 months";
      } else if (isHospital) {
        fuel = "Dual-Fuel Hybrid (CBG + Induction)";
        why = "Zero-downtime architecture with automatic fuel switchover. Critical for healthcare facilities requiring uninterrupted thermal supply";
        alt = "CNG Cascade · Full Induction";
        cost = isMedVol ? "₹2L – ₹5L" : "₹1L – ₹3L";
        save = isMedVol ? "₹40K – ₹1.5L/mo" : "₹15K – ₹60K/mo";
        time = "5–7 days";
        payback = "5–8 months";
      } else if (isHotel) {
        fuel = isHighVol ? "CNG/CBG Cascade" : "CBG";
        why = isHighVol ? "Centralised high-pressure supply (250 bar) feeding multiple kitchen points. Identical LPG flame behaviour with 10–20% cost reduction" : "Clean combustion identical to LPG. Renewable, SATAT-backed supply. Drop-in conversion for existing burners";
        alt = isHighVol ? "Ethanol · Hybrid System" : "Ethanol · Induction";
        cost = isHighVol ? "₹3L – ₹8L" : "₹80K – ₹2.5L";
        save = isHighVol ? "₹50K – ₹2L/mo" : "₹20K – ₹80K/mo";
        time = isHighVol ? "4–6 days" : "2–4 days";
        payback = "4–7 months";
      } else {
        fuel = "Ethanol";
        why = "Lowest conversion cost with instant ignition and zero particulate emissions. Drop-in replacement requiring minimal equipment modification";
        alt = isMedVol ? "CBG · CNG" : "Induction · CBG";
        cost = isHighVol ? "₹40K – ₹1.5L" : isMedVol ? "₹15K – ₹60K" : "₹8K – ₹30K";
        save = isHighVol ? "₹20K – ₹80K/mo" : isMedVol ? "₹10K – ₹40K/mo" : "₹5K – ₹20K/mo";
        time = "1–3 days";
        payback = "3–6 months";
      }

      setAiResult({ fuel, why, alt, cost, save, time, payback });
      setAiLoad(false);
    }, 1800);
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
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');html{scroll-behavior:smooth}*{margin:0;padding:0;box-sizing:border-box}::selection{background:${C.gL};color:${C.g1}}input,select,textarea,button{font-family:inherit}input:focus,select:focus,textarea:focus{outline:2px solid ${C.g3};outline-offset:2px}@media(max-width:768px){.dsk{display:none!important}.mob{display:flex!important}.grid2{grid-template-columns:1fr!important}.grid3{grid-template-columns:1fr!important}.grid5{grid-template-columns:repeat(3,1fr)!important}.hero-grid{grid-template-columns:1fr!important}}img{display:block;max-width:100%}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pdot{0%,100%{opacity:1}50%{opacity:.3}}@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes countUp{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}h1,h2,h3,h4{font-family:'Inter','DM Sans',sans-serif;letter-spacing:-0.02em}table th{font-family:'Inter','DM Sans',sans-serif}.nav-link{position:relative;transition:color 0.2s}.nav-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;background:${C.g3};transition:width 0.3s}.nav-link:hover::after{width:100%}.nav-link:hover{color:${C.g2}!important}.hero-stat{animation:countUp 0.6s ease-out both}.hero-stat:nth-child(1){animation-delay:0.1s}.hero-stat:nth-child(2){animation-delay:0.2s}.hero-stat:nth-child(3){animation-delay:0.3s}.hero-stat:nth-child(4){animation-delay:0.4s}.glow-btn{position:relative;overflow:hidden;transition:transform 0.2s,box-shadow 0.2s}.glow-btn:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(58,122,40,0.3)!important}.glow-btn::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent);animation:shimmer 3s infinite}`}</style>

      {/* NAV */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: "10px 24px", background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.5)", boxShadow: scrolled ? "0 1px 6px rgba(26,60,26,0.06)" : "none", transition: "all 0.3s", backdropFilter: "blur(12px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div onClick={() => go("hero")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <img src={LOGO} alt="Gas Shield" style={{ width: 40, height: 40, objectFit: "contain" }} />
            <div><div style={{ fontSize: 18, fontWeight: 800, color: C.g1, letterSpacing: -0.5 }}>Gas Shield</div><div style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ fontSize: 9, fontWeight: 800, color: C.g3, letterSpacing: 2.5 }}>GSS</span><span style={{ fontSize: 9, color: C.muted, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 600 }}>Solutions</span></div></div>
          </div>
          <nav className="dsk" style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {nav.map(n => <span key={n.id} className="nav-link" onClick={() => go(n.id)} style={{ fontSize: 13, fontWeight: 600, color: C.body, cursor: "pointer", paddingBottom: 4 }}>{n.l}</span>)}
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
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 24px 60px", background: `linear-gradient(135deg, ${C.g1} 0%, #0d2a0d 50%, ${C.g2}30 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `url(${IMG.hero})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.08 }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: `linear-gradient(90deg, ${C.g1}, transparent)`, zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: `linear-gradient(to top, ${C.g1}, transparent)`, zIndex: 1 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2, width: "100%" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div style={{ animation: "fadeUp 0.8s ease-out both" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(58,122,40,0.2)", border: "1px solid rgba(58,122,40,0.3)", borderRadius: 24, padding: "6px 16px", fontSize: 11, fontWeight: 700, color: C.g3, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 24, backdropFilter: "blur(8px)" }}>
                Powering India's Energy Transition
              </div>
              <h1 style={{ fontSize: "clamp(32px, 5.5vw, 56px)", fontWeight: 900, color: "#fff", lineHeight: 1.08, marginBottom: 20, letterSpacing: -1 }}>Alternative Fuel<br />Engineering for<br /><span style={{ color: C.g3, background: `linear-gradient(135deg, ${C.g3}, #5cb832)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Indian Industry.</span></h1>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: 32, maxWidth: 480 }}>We engineer fuel transitions for commercial kitchens, hotels, and industrial facilities — converting existing equipment to alternative fuels with commissioning in 72 hours.</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
                <button className="glow-btn" onClick={() => go("advisor")} style={{ ...btn1, padding: "16px 32px", fontSize: 15, borderRadius: 28 }}>Get Free Assessment <ArrowRight size={16} /></button>
                <a href="tel:+918147644747" style={{ ...btn2, textDecoration: "none", padding: "16px 28px", borderRadius: 28, borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}><Phone size={16} /> +91 8147644747</a>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { val: "50+", lab: "Facilities Commissioned", icon: "🏭" },
                { val: "72hr", lab: "Average Conversion Time", icon: "⚡" },
                { val: "15–40%", lab: "Fuel Cost Reduction", icon: "📉" },
                { val: "24/7", lab: "Engineering Support", icon: "🛠️" },
              ].map((s, i) => (
                <div key={i} className="hero-stat" style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.08)", transition: "all 0.3s" }} onMouseOver={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateX(8px)"; }} onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = ""; }}>
                  <span style={{ fontSize: 28, width: 44, textAlign: "center" }}>{s.icon}</span>
                  <div><div style={{ fontSize: 24, fontWeight: 800, color: "#fff", letterSpacing: -0.5 }}>{s.val}</div><div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>{s.lab}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT BAR */}
      <div style={{ background: C.g3, padding: "14px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          {[{ v: "CNG", l: "Pipeline & Cascade" }, { v: "CBG", l: "SATAT Certified" }, { v: "Ethanol", l: "Zero Soot" }, { v: "Biomass", l: "25–40% Savings" }, { v: "Methanol", l: "BIS Compliant" }].map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 800, color: "#fff" }}>{f.v}</span>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.6)" }}>{f.l}</span>
              {i < 4 && <span style={{ color: "rgba(255,255,255,0.2)", marginLeft: 12 }}>|</span>}
            </div>
          ))}
        </div>
      </div>

      {/* THREE PILLARS */}
      <Sec id="solutions" bg={C.off}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: C.g3, marginBottom: 8, textTransform: "uppercase" }}>What We Do</div>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: C.g1, marginBottom: 12, letterSpacing: -0.5 }}>Core Engineering Services</h2>
          <div style={{ width: 48, height: 3, background: `linear-gradient(90deg, ${C.g3}, ${C.g2})`, borderRadius: 2, margin: "0 auto 16px" }} />
          <p style={{ fontSize: 15, color: C.muted, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>Supplier coordination, system conversion engineering, and intelligent energy advisory — tailored to your operational requirements.</p>
        </div>
        <div className="grid3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { icon: <Truck size={24} color={C.g2} />, t: "Supplier Coordination", b: "We coordinate with verified fuel suppliers and logistics partners to connect your facility with CBG, CNG, ethanol, methanol, and biomass sources — ensuring seamless procurement and delivery scheduling.", f: "Managed procurement network", img: IMG.tanker, emoji: "🚛" },
            { icon: <Wrench size={24} color={C.g2} />, t: "Conversion Engineering", b: "On-site retrofit of existing stoves, burners, and boilers to alternative fuel operation — or turnkey installation of new systems. Minimal operational downtime.", f: "72-hour turnaround", img: IMG.stove1, emoji: "🔧" },
            { icon: <Sparkles size={24} color={C.g2} />, t: "AI Energy Assessment", b: "Intelligent fuel analysis covering compatibility modelling, cost projection, and conversion pathways. Available 24/7 for technical guidance and next-step planning.", f: "Data-driven recommendations", img: IMG.kitchen, emoji: "🤖" },
          ].map((c, i) => (
            <div key={i} style={{ ...card, overflow: "hidden", transition: "all 0.3s" }} onMouseOver={e => { e.currentTarget.style.boxShadow = SH2; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseOut={e => { e.currentTarget.style.boxShadow = SH; e.currentTarget.style.transform = ""; }}>
              <div style={{ height: 140, overflow: "hidden", background: `linear-gradient(135deg, ${C.g2}15, ${C.g3}10)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <img src={c.img} alt={c.t} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} onError={e => { e.currentTarget.style.display = "none"; }} />
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
        <div style={{ textAlign: "center", marginBottom: 44 }}><div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: C.g3, marginBottom: 8 }}>AI-POWERED</div><h2 style={{ fontSize: 28, fontWeight: 700, color: C.g1, marginBottom: 10 }}>Instant Energy Assessment</h2><p style={{ fontSize: 15, color: C.muted, maxWidth: 540, margin: "0 auto" }}>Input your operational parameters. Receive an engineered fuel recommendation — or consult the AI Gas Specialist for detailed technical guidance.</p></div>
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
        <div style={{ textAlign: "center", marginBottom: 44 }}><div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: C.g3, marginBottom: 8, textTransform: "uppercase" }}>Our Catalogue</div><h2 style={{ fontSize: 32, fontWeight: 800, color: C.g1, marginBottom: 12, letterSpacing: -0.5 }}>Equipment & Conversion Solutions</h2><div style={{ width: 48, height: 3, background: `linear-gradient(90deg, ${C.g3}, ${C.g2})`, borderRadius: 2, margin: "0 auto 16px" }} /><p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7 }}>Engineered solutions for commercial kitchens, industrial boilers, and process heating — deployed across Indian businesses daily.</p></div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>{["All", "Kitchen", "Industrial", "Conversion"].map(f => <button key={f} onClick={() => setProdCat(f)} style={pill(prodCat === f)}>{f}</button>)}</div>
        <div className="grid3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {prods.map((p, pi) => {
            const idx = PRODUCTS.indexOf(p);
            return (
            <div key={pi} style={{ ...card, overflow: "hidden", transition: "all 0.3s" }} onMouseOver={e => { e.currentTarget.style.boxShadow = SH2; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseOut={e => { e.currentTarget.style.boxShadow = SH; e.currentTarget.style.transform = ""; }}>
              <div style={{ height: 200, background: `linear-gradient(135deg, ${PROD_COLORS[idx % PROD_COLORS.length]}22, ${PROD_COLORS[idx % PROD_COLORS.length]}11)`, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} onError={e => { e.currentTarget.style.display = "none"; }} />
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
            <strong style={{ color: C.g1 }}>Indicative pricing</strong> based on standard configurations. Final cost determined after site assessment and engineering review.
          </p>
          <p style={{ fontSize: 13, color: C.body, lineHeight: 1.7, marginBottom: 8 }}>
            For a personalised estimate — use our <strong style={{ color: C.g3, cursor: "pointer" }} onClick={() => go("advisor")}>AI Energy Assessment</strong> tool or <strong style={{ color: C.g3, cursor: "pointer" }} onClick={() => go("contact")}>request a consultation</strong>.
          </p>
          <p style={{ fontSize: 14, color: C.gold, fontWeight: 600, fontStyle: "italic" }}>
            Volume-based and contract-term pricing available for long-term partnerships.
          </p>
        </div>
      </Sec>

      {/* FUEL COMPARISON TABLE */}
      <Sec id="compare">
        <div style={{ textAlign: "center", marginBottom: 44 }}><div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: C.g3, marginBottom: 8, textTransform: "uppercase" }}>Technical Data</div><h2 style={{ fontSize: 32, fontWeight: 800, color: C.g1, marginBottom: 12, letterSpacing: -0.5 }}>Fuel Performance Specifications</h2><div style={{ width: 48, height: 3, background: `linear-gradient(90deg, ${C.g3}, ${C.g2})`, borderRadius: 2, margin: "0 auto 16px" }} /><p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7 }}>Side-by-side technical comparison across all supported fuel types. Engineer your transition with data.</p></div>
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
        <div style={{ textAlign: "center", marginBottom: 44 }}><div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: C.g3, marginBottom: 8, textTransform: "uppercase" }}>Industry Matrix</div><h2 style={{ fontSize: 32, fontWeight: 800, color: C.g1, marginBottom: 12, letterSpacing: -0.5 }}>Industry-Specific Fuel Mapping</h2><div style={{ width: 48, height: 3, background: `linear-gradient(90deg, ${C.g3}, ${C.g2})`, borderRadius: 2, margin: "0 auto 16px" }} /><p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7 }}>Recommended fuel pathways mapped by industry segment, thermal capacity, and operational application.</p></div>
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
            <p style={{ fontSize: 14, color: C.body, lineHeight: 1.8, marginBottom: 12 }}>Gas Shield operates on a foundation of operational transparency, payment reliability, and mutual growth. We are committed to building partnerships that scale with your capacity.</p>
            <p style={{ fontSize: 14, color: C.body, lineHeight: 1.8, marginBottom: 12 }}>We deliver on payment terms. We communicate proactively. We bring committed offtake volume from signed clients across multiple industry verticals. When your supply grows, our reach expands.</p>
            <p style={{ fontSize: 13, color: C.g3, fontWeight: 600, fontStyle: "italic" }}>"Your fuel powers Indian businesses. Our engineering platform ensures it reaches them. Together, we are building India's energy resilience."</p>
          </div>
          <div style={{ ...card, padding: 28, borderLeft: `4px solid ${C.gold}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}><Heart size={22} color={C.gold} fill={C.gold} /><h3 style={{ fontSize: 18, fontWeight: 700, color: C.g1 }}>To Our Clients</h3></div>
            <p style={{ fontSize: 14, color: C.body, lineHeight: 1.8, marginBottom: 12 }}>Your operation is more than a facility — it represents livelihoods, families, and communities that depend on continuity. We understand the urgency behind every transition request.</p>
            <p style={{ fontSize: 14, color: C.body, lineHeight: 1.8, marginBottom: 12 }}>Gas Shield exists to keep your kitchen cooking, your factory producing, and your business operating without interruption. Our engineering and support teams are available 24/7.</p>
            <p style={{ fontSize: 13, color: C.gold, fontWeight: 600, fontStyle: "italic" }}>"Aap akele nahi hain. Hum aapke saath hain, aaj bhi aur kal bhi." — You are not alone. We are with you, today and tomorrow.</p>
          </div>
        </div>
      </Sec>

      {/* PACKAGES */}
      <Sec id="packages" bg={C.off}>
        <div style={{ textAlign: "center", marginBottom: 44 }}><div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: C.g3, marginBottom: 8, textTransform: "uppercase" }}>Pricing</div><h2 style={{ fontSize: 32, fontWeight: 800, color: C.g1, marginBottom: 12, letterSpacing: -0.5 }}>Choose Your Plan</h2><div style={{ width: 48, height: 3, background: `linear-gradient(90deg, ${C.g3}, ${C.g2})`, borderRadius: 2, margin: "0 auto 16px" }} /><p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7 }}>Flexible engagement models built for every scale of operation. No hidden costs.</p></div>
        <div className="grid3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { name: "Flex Plan", sub: "Pay as you go", color: C.g3, pop: false, feat: ["No lock-in period", "Competitive fuel pricing via our supplier network", "Significant savings vs LPG", "Standard conversion fees apply", "Coordinated delivery within 48 hours", "Phone + email support"], cta: "Get Started" },
            { name: "6-Month Plan", sub: "Most popular", color: C.g2, pop: true, feat: ["Discounted conversion fees", "Preferential pricing via supplier agreements", "Priority delivery coordination", "Dedicated support line", "Quarterly maintenance included", "72-hour emergency response"], cta: "Talk to Advisor" },
            { name: "12-Month Plan", sub: "Maximum value", color: C.g1, pop: false, feat: ["ZERO conversion fees", "Best-in-class negotiated fuel rates", "Dedicated account manager", "Annual maintenance (AMC) included", "Same-day emergency response", "Price stability guarantee"], cta: "Request Enterprise Quote" },
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
        <div style={{ textAlign: "center", marginBottom: 44 }}><div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: C.g3, marginBottom: 8, textTransform: "uppercase" }}>How It Works</div><h2 style={{ fontSize: 32, fontWeight: 800, color: C.g1, marginBottom: 12, letterSpacing: -0.5 }}>Conversion Engineering Process</h2><div style={{ width: 48, height: 3, background: `linear-gradient(90deg, ${C.g3}, ${C.g2})`, borderRadius: 2, margin: "0 auto 16px" }} /><p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7 }}>From site assessment through commissioning to ongoing support — a fully managed conversion lifecycle.</p></div>
        <div className="grid5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, marginBottom: 36 }}>
          {[{ n: "1", icon: <ClipboardList size={18} color={C.g2} />, t: "Site Audit" }, { n: "2", icon: <Lightbulb size={18} color={C.g2} />, t: "Engineering Spec" }, { n: "3", icon: <Wrench size={18} color={C.g2} />, t: "Install & Commission" }, { n: "4", icon: <Truck size={18} color={C.g2} />, t: "Fuel Supply" }, { n: "5", icon: <Headphones size={18} color={C.g2} />, t: "Ongoing Support" }].map((s, i) => <div key={i} style={{ textAlign: "center" }}><div style={{ width: 40, height: 40, borderRadius: 10, background: C.gL, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 6px", position: "relative" }}>{s.icon}<span style={{ position: "absolute", top: -3, right: -3, width: 16, height: 16, borderRadius: "50%", background: C.g2, color: "#fff", fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.n}</span></div><span style={{ fontSize: 12, fontWeight: 600, color: C.g1 }}>{s.t}</span></div>)}
        </div>
        <div style={{ overflowX: "auto" }}><table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 3px", minWidth: 500, fontSize: 13 }}><thead><tr>{["From", "To", "Best For", "Timeline", "Savings"].map(h => <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontSize: 10, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: 1 }}>{h}</th>)}</tr></thead><tbody>{CONVERSIONS.map((c, i) => <tr key={i} style={{ background: i % 2 === 0 ? C.gL : C.white }}><td style={{ padding: "10px 12px", fontWeight: 600, color: C.g1, borderRadius: `${R}px 0 0 ${R}px` }}>{c.from}</td><td style={{ padding: "10px 12px", fontWeight: 700, color: C.g3 }}>{c.to}</td><td style={{ padding: "10px 12px", color: C.body }}>{c.best}</td><td style={{ padding: "10px 12px", color: C.body }}>{c.time}</td><td style={{ padding: "10px 12px", fontWeight: 700, color: C.g3, borderRadius: `0 ${R}px ${R}px 0` }}>{c.save}</td></tr>)}</tbody></table></div>
      </Sec>

      {/* TRUST */}
      <Sec style={{ background: `linear-gradient(135deg, ${C.g1}, #0d2a0d)`, padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: C.g3, marginBottom: 8, textTransform: "uppercase" }}>Track Record</div>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: -0.5 }}>Trusted by Indian Businesses</h2>
        </div>
        <div className="grid3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, textAlign: "center", marginBottom: 40 }}>
          {[{ n: "50+", l: "Facilities Commissioned" }, { n: "72 hrs", l: "Avg. Conversion Time" }, { n: "15–40%", l: "Fuel Cost Reduction" }].map((s, i) => <div key={i} style={{ padding: "28px 16px", background: "rgba(255,255,255,0.04)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)" }}><div style={{ fontSize: 42, fontWeight: 900, background: `linear-gradient(135deg, ${C.g3}, #5cb832)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.n}</div><div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{s.l}</div></div>)}
        </div>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: 28, background: "rgba(255,255,255,0.04)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", borderLeft: `3px solid ${C.gold}` }}>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontStyle: "italic", lineHeight: 1.8, marginBottom: 10 }}>"We were days away from shutting our kitchen. Gas Shield converted our existing burners to ethanol in 48 hours. Food quality is identical — our customers didn't notice any difference."</p>
          <span style={{ fontSize: 12, fontWeight: 600, color: C.gold }}>— Restaurant Owner, Koramangala, Bangalore</span>
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28 }}>{["Made in India", "PESO-Compliant", "Clean Energy Certified"].map((b, i) => <span key={i} style={{ padding: "8px 16px", borderRadius: 20, background: "rgba(58,122,40,0.15)", fontSize: 12, fontWeight: 600, color: C.g3, border: "1px solid rgba(58,122,40,0.2)" }}>{b}</span>)}</div>
      </Sec>

      {/* FAQ */}
      <Sec>
        <div style={{ textAlign: "center", marginBottom: 44 }}><div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: C.g3, marginBottom: 8, textTransform: "uppercase" }}>FAQ</div><h2 style={{ fontSize: 32, fontWeight: 800, color: C.g1, letterSpacing: -0.5 }}>Frequently Asked Questions</h2><div style={{ width: 48, height: 3, background: `linear-gradient(90deg, ${C.g3}, ${C.g2})`, borderRadius: 2, margin: "0 auto 16px" }} /></div>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>{FAQS.map((f, i) => <div key={i} style={{ borderBottom: `1px solid ${C.border}` }}><button onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{ width: "100%", padding: "16px 0", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}><span style={{ fontSize: 14, fontWeight: 600, color: C.g1, paddingRight: 16 }}>{f.q}</span>{faqOpen === i ? <ChevronUp size={16} color={C.muted} /> : <ChevronDown size={16} color={C.muted} />}</button>{faqOpen === i && <div style={{ padding: "0 0 16px", fontSize: 13, color: C.body, lineHeight: 1.7 }}>{f.a}</div>}</div>)}</div>
      </Sec>

      {/* CONTACT */}
      <Sec id="contact" bg={C.off}>
        <div style={{ textAlign: "center", marginBottom: 44 }}><div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: C.g3, marginBottom: 8, textTransform: "uppercase" }}>Get In Touch</div><h2 style={{ fontSize: 32, fontWeight: 800, color: C.g1, marginBottom: 12, letterSpacing: -0.5 }}>Request a Consultation</h2><div style={{ width: 48, height: 3, background: `linear-gradient(90deg, ${C.g3}, ${C.g2})`, borderRadius: 2, margin: "0 auto 16px" }} /><p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7 }}>No obligation. Share your requirements and our engineering team will respond within 2–4 hours.</p></div>
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
              { icon: <Mail size={18} color={C.g2} />, l: "Management", v: "management@gasshieldsolutions.com" },
              { icon: <Mail size={18} color={C.g2} />, l: "Partnerships", v: "partnership.development@gasshieldsolutions.com" },
              { icon: <MapPin size={18} color={C.g2} />, l: "Office", v: "HP No.51(1), 5th Main Rd, 5th Block, Jayanagar, Bangalore - 560041" },
            ].map((c, i) => <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}><div style={{ width: 40, height: 40, borderRadius: 10, background: C.gL, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{c.icon}</div><div><div style={{ fontSize: 11, color: C.muted, fontWeight: 600 }}>{c.l}</div><div style={{ fontSize: 14, fontWeight: 600, color: C.g1 }}>{c.v}</div></div></div>)}
            <div style={{ ...card, padding: 16, borderLeft: `3px solid ${C.gold}`, marginTop: 8 }}><p style={{ fontSize: 13, color: C.body, fontStyle: "italic" }}>"Typical response time: 2–4 hours. For urgent requirements, call directly — our engineering team operates 24/7."</p></div>
          </div>
        </div>
      </Sec>

      {/* FOOTER */}
      <footer style={{ background: `linear-gradient(180deg, #0d2a0d, ${C.g1})`, padding: "56px 24px 20px", color: "rgba(255,255,255,0.5)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, marginBottom: 32 }} className="grid3">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <img src={LOGO} alt="Logo" style={{ width: 32, height: 32 }} />
              <div><span style={{ fontSize: 16, fontWeight: 800, color: "#fff", display: "block" }}>Gas Shield Solutions</span><span style={{ fontSize: 10, fontWeight: 800, color: C.g3, letterSpacing: 2.5 }}>GSS</span></div>
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.7, marginBottom: 12 }}>Alternative Fuel Engineering for Indian Industry</p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>www.gasshieldsolutions.com</p>
          </div>
          <div><div style={{ fontSize: 11, fontWeight: 700, color: C.g3, letterSpacing: 2, marginBottom: 14, textTransform: "uppercase" }}>Quick Links</div>{nav.map(n => <div key={n.id} onClick={() => go(n.id)} style={{ fontSize: 12, marginBottom: 8, cursor: "pointer", transition: "color 0.2s" }} onMouseOver={e => { e.currentTarget.style.color = "#fff"; }} onMouseOut={e => { e.currentTarget.style.color = ""; }}>{n.l}</div>)}</div>
          <div><div style={{ fontSize: 11, fontWeight: 700, color: C.g3, letterSpacing: 2, marginBottom: 14, textTransform: "uppercase" }}>Contact</div><p style={{ fontSize: 12, marginBottom: 6, color: "rgba(255,255,255,0.6)" }}>+91 8147644747</p><p style={{ fontSize: 12, marginBottom: 6 }}>management@gasshieldsolutions.com</p><p style={{ fontSize: 12, marginBottom: 6 }}>partnership.development@gasshieldsolutions.com</p><p style={{ fontSize: 12 }}>Jayanagar, Bangalore - 560041</p></div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11 }}>© 2026 Gas Shield Solutions OPC Pvt Ltd. All rights reserved.</span>
          <div style={{ display: "flex", gap: 16 }}><span style={{ fontSize: 11 }}>Made in India</span><span style={{ fontSize: 11, color: C.g3 }}>Powered by Clean Energy</span></div>
        </div>
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



