import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Building2, Compass, HardHat, Palette, Users, Award, Clock } from "lucide-react";

const stats = [
  { value: "4", label: "Business Verticals" },
  { value: "50+", label: "Projects Delivered" },
  { value: "10+", label: "Years of Experience" },
  { value: "100+", label: "Happy Clients" },
];

const values = [
  { icon: Award, title: "Excellence", description: "We pursue the highest standards in every detail, from design to delivery." },
  { icon: Users, title: "Integrity", description: "Transparent dealings, honest advice, and ethical business practices at every step." },
  { icon: Clock, title: "Reliability", description: "Commitments honored, timelines respected, and promises kept — always." },
];

export default function About() {
  return (
    <Layout>
      <PageHero title="About Dauji Projects" subtitle="From vision to reality — building Gwalior's future." backgroundImage={heroBg} />

      <section className="section-padding max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6 block">Our Story</span>
          <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-6">
            Dauji Projects was founded with a singular vision: to create a complete ecosystem that takes a project from raw land to a finished landmark. 
            What began as a real estate practice has grown into four independent business units — each a leader in its domain.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            Based in Gwalior, we serve clients across Central India with a commitment to quality, transparency, and premium delivery. Whether it's finding the perfect property, designing an architectural masterpiece, executing construction with precision, or crafting luxury interiors — Dauji Projects is your single point of trust.
          </p>
          <div className="luxury-divider mt-8" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-card">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-gradient-gold mb-2">{s.value}</div>
              <div className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Verticals overview */}
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading eyebrow="Our Verticals" title="Four Pillars, One Vision" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Building2, name: "Real Estate", desc: "Commercial & residential deals" },
            { icon: Compass, name: "Architecture", desc: "Design & master planning" },
            { icon: HardHat, name: "Construction", desc: "Precision project execution" },
            { icon: Palette, name: "Interiors", desc: "Luxury interior design" },
          ].map((v, i) => (
            <motion.div key={v.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center bg-card border border-border p-8">
              <v.icon className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-display text-lg text-foreground mb-2">{v.name}</h3>
              <p className="text-muted-foreground font-body text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="Values" title="What We Stand For" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <v.icon className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-display text-lg text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
