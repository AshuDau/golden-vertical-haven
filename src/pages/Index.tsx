import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import heroBg from "@/assets/hero-bg.jpg";
import realEstateImg from "@/assets/real-estate.jpg";
import architectureImg from "@/assets/architecture.jpg";
import constructionImg from "@/assets/construction.jpg";
import interiorsImg from "@/assets/interiors.jpg";
import { Building2, Compass, HardHat, Palette, ArrowRight, Shield, Users, Target, Gem } from "lucide-react";

const verticals = [
  {
    title: "Real Estate",
    description: "Strategic commercial & residential property deals with premium positioning.",
    image: realEstateImg,
    path: "/real-estate",
    icon: Building2,
  },
  {
    title: "Architecture",
    description: "Visionary design & planning that transforms spaces into statements.",
    image: architectureImg,
    path: "/architecture",
    icon: Compass,
  },
  {
    title: "Construction",
    description: "Precision execution with uncompromising quality standards.",
    image: constructionImg,
    path: "/construction",
    icon: HardHat,
  },
  {
    title: "Interiors",
    description: "Luxury interior design that defines sophisticated living.",
    image: interiorsImg,
    path: "/interiors",
    icon: Palette,
  },
];

const whyDauji = [
  { icon: Shield, title: "Trust & Transparency", description: "Built on a foundation of integrity and clear communication." },
  { icon: Users, title: "End-to-End Ecosystem", description: "From land acquisition to final finishes — all under one roof." },
  { icon: Target, title: "Precision Delivery", description: "On-time, on-budget execution with meticulous attention to detail." },
  { icon: Gem, title: "Premium Quality", description: "Uncompromising standards in every material and every finish." },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Dauji Projects" className="w-full h-full object-cover" width={1920} height={1080} />
        </div>
        <div className="absolute inset-0 bg-background/60" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6 block">Dauji Projects</span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[1.1] mb-6">
            From Land<br />to <span className="text-gradient-gold italic">Landmark</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A complete ecosystem of real estate, architecture, construction, and luxury interiors — crafting spaces that endure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/opportunities" className="luxury-button">Explore Opportunities</Link>
            <Link to="/contact" className="luxury-button-outline">Get in Touch</Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-gold-gradient opacity-50" />
        </motion.div>
      </section>

      {/* Verticals */}
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading eyebrow="Our Verticals" title="Four Pillars of Excellence" subtitle="Each vertical operates as an independent business unit, delivering specialized expertise across the built environment." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {verticals.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link to={v.path} className="group block relative overflow-hidden aspect-[16/10] bg-card">
                <img src={v.image} alt={v.title} loading="lazy" width={1280} height={720} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <v.icon className="text-primary" size={20} />
                    <h3 className="font-display text-2xl text-foreground">{v.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-body text-sm mb-4">{v.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-body text-xs tracking-[0.15em] uppercase group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ecosystem */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="The Dauji Ecosystem" title="One Vision, Complete Delivery" subtitle="Unlike fragmented service providers, Dauji Projects offers a unified approach — from identifying the right land to delivering the final key." />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border">
            {verticals.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-card p-8 text-center"
              >
                <div className="text-primary font-display text-4xl mb-2">0{i + 1}</div>
                <v.icon className="text-primary mx-auto mb-3" size={28} />
                <h4 className="font-display text-lg text-foreground mb-2">{v.title}</h4>
                <p className="text-muted-foreground font-body text-xs leading-relaxed">{v.description}</p>
                {i < 3 && <div className="hidden md:block text-primary text-2xl mt-4">→</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dauji */}
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading eyebrow="Why Dauji" title="Built on Trust, Delivered with Precision" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyDauji.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <item.icon className="text-primary mx-auto mb-4" size={32} />
              <h4 className="font-display text-lg text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lead Capture */}
      <section className="section-padding bg-card">
        <div className="max-w-2xl mx-auto">
          <SectionHeading eyebrow="Get Started" title="Let's Build Something Remarkable" subtitle="Tell us about your vision and our team will connect with you within 24 hours." />
          <LeadForm sourcePage="homepage" />
        </div>
      </section>
    </Layout>
  );
}
