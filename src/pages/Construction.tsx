import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import { motion } from "framer-motion";
import constructionImg from "@/assets/construction.jpg";
import { HardHat, Clock, Shield, Wrench } from "lucide-react";

const services = [
  { icon: HardHat, title: "General Contracting", description: "Full-scale construction management for residential, commercial, and institutional projects." },
  { icon: Clock, title: "Project Management", description: "Rigorous timeline management with milestone tracking and transparent reporting." },
  { icon: Shield, title: "Quality Assurance", description: "Multi-stage quality checks ensuring every element meets our exacting standards." },
  { icon: Wrench, title: "Renovation & Retrofitting", description: "Structural upgrades, modernization, and adaptive reuse of existing properties." },
];

const formFields = [
  { name: "name" as const, label: "Full Name", type: "text" as const, placeholder: "Your name", required: true },
  { name: "email" as const, label: "Email", type: "email" as const, placeholder: "your@email.com", required: true },
  { name: "phone" as const, label: "Phone", type: "tel" as const, placeholder: "+91 XXXXX XXXXX", required: true },
  { name: "project_type" as const, label: "Construction Type", type: "select" as const, placeholder: "Select type", options: ["New Build", "Renovation", "Extension", "Commercial Fit-out"] },
  { name: "area_sqft" as const, label: "Project Area (sq ft)", type: "text" as const, placeholder: "e.g., 10000" },
  { name: "timeline" as const, label: "Expected Timeline", type: "select" as const, placeholder: "Select timeline", options: ["3-6 months", "6-12 months", "12-18 months", "18+ months"] },
  { name: "message" as const, label: "Project Details", type: "textarea" as const, placeholder: "Describe your construction requirements..." },
];

export default function Construction() {
  return (
    <Layout>
      <PageHero title="Construction" subtitle="Precision execution with uncompromising quality." backgroundImage={constructionImg} />
      
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading eyebrow="Services" title="Built to Last" subtitle="From foundation to finish, our construction division delivers projects with precision, safety, and integrity." />
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

      <section className="section-padding bg-card">
        <div className="max-w-2xl mx-auto">
          <SectionHeading eyebrow="Get a Quote" title="Start Your Build" />
          <LeadForm sourcePage="construction" fields={formFields} />
        </div>
      </section>
    </Layout>
  );
}
