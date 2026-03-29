import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import { motion } from "framer-motion";
import interiorsImg from "@/assets/interiors.jpg";
import { Palette, Sparkles, Sofa, Lightbulb } from "lucide-react";

const services = [
  { icon: Sparkles, title: "Luxury Residences", description: "Bespoke interior environments that reflect your personality — curated materials, custom furnishings, and artisanal finishes." },
  { icon: Sofa, title: "Furniture & Décor Curation", description: "Handpicked furniture, art, and accessories sourced from premium brands and artisan workshops worldwide." },
  { icon: Lightbulb, title: "Lighting Design", description: "Atmospheric lighting schemes that transform spaces — from intimate warmth to dramatic statement illumination." },
  { icon: Palette, title: "Commercial Interiors", description: "Sophisticated office, retail, and hospitality interiors that elevate brand identity and customer experience." },
];

const formFields = [
  { name: "name" as const, label: "Full Name", type: "text" as const, placeholder: "Your name", required: true },
  { name: "email" as const, label: "Email", type: "email" as const, placeholder: "your@email.com", required: true },
  { name: "phone" as const, label: "Phone", type: "tel" as const, placeholder: "+91 XXXXX XXXXX", required: true },
  { name: "project_type" as const, label: "Space Type", type: "select" as const, placeholder: "Select type", options: ["Living Room", "Bedroom", "Kitchen", "Full Home", "Office", "Retail/Hospitality"] },
  { name: "style_preference" as const, label: "Style Preference", type: "select" as const, placeholder: "Select style", options: ["Contemporary", "Classic Luxury", "Minimalist", "Art Deco", "Eclectic", "Custom"] },
  { name: "budget" as const, label: "Budget Range", type: "select" as const, placeholder: "Select budget", options: ["₹5L - ₹15L", "₹15L - ₹30L", "₹30L - ₹50L", "₹50L+"] },
  { name: "message" as const, label: "Your Vision", type: "textarea" as const, placeholder: "Describe the atmosphere, feeling, and aesthetic you desire..." },
];

export default function Interiors() {
  return (
    <Layout>
      <PageHero title="Luxury Interiors" subtitle="Where every detail is a statement of refined taste." backgroundImage={interiorsImg} />

      {/* Philosophy */}
      <section className="section-padding max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6 block">Our Philosophy</span>
          <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic">
            "We don't decorate spaces — we compose experiences. Every texture, every light, every line is orchestrated to evoke emotion and inspire living."
          </p>
          <div className="luxury-divider mt-8" />
        </motion.div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading eyebrow="Services" title="The Art of Interior Excellence" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border p-8">
              <s.icon className="text-primary mb-4" size={28} />
              <h3 className="font-display text-xl text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[1,2,3,4,5,6].map((i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="aspect-square overflow-hidden">
                <img src={interiorsImg} alt={`Luxury interior ${i}`} loading="lazy" width={640} height={640} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <SectionHeading eyebrow="Begin Your Transformation" title="Craft Your Dream Space" subtitle="Share your vision and our design team will create something extraordinary." />
          <LeadForm sourcePage="interiors" fields={formFields} />
        </div>
      </section>
    </Layout>
  );
}
