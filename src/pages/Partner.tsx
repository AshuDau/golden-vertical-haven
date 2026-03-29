import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Handshake, Building2, Compass, HardHat, Palette } from "lucide-react";

const partnerTypes = [
  { icon: Building2, title: "Real Estate Partners", description: "Landowners, brokers, and investors looking to collaborate on property deals and joint ventures." },
  { icon: Compass, title: "Architecture Collaborators", description: "Architects, urban planners, and design studios seeking project-based or long-term partnerships." },
  { icon: HardHat, title: "Construction Partners", description: "Contractors, material suppliers, and skilled labor teams for project execution." },
  { icon: Palette, title: "Interior Design Partners", description: "Furniture brands, artisan workshops, and specialist contractors for luxury fitouts." },
];

const formFields = [
  { name: "name" as const, label: "Full Name", type: "text" as const, placeholder: "Your name", required: true },
  { name: "email" as const, label: "Email", type: "email" as const, placeholder: "your@email.com", required: true },
  { name: "phone" as const, label: "Phone", type: "tel" as const, placeholder: "+91 XXXXX XXXXX", required: true },
  { name: "company_name" as const, label: "Company Name", type: "text" as const, placeholder: "Your company" },
  { name: "partnership_type" as const, label: "Partnership Type", type: "select" as const, placeholder: "Select type", options: ["Real Estate", "Architecture", "Construction", "Interiors", "Multiple Verticals"] },
  { name: "message" as const, label: "Proposal", type: "textarea" as const, placeholder: "Tell us about your organization and how you'd like to collaborate..." },
];

export default function Partner() {
  return (
    <Layout>
      <PageHero title="Partner With Us" subtitle="Join the Dauji ecosystem — collaborate, grow, and build together." backgroundImage={heroBg} />

      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading eyebrow="Collaboration" title="Growth Through Partnership" subtitle="We believe the best outcomes emerge from strong partnerships. Here's how you can work with us." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerTypes.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border p-8">
              <p.icon className="text-primary mb-4" size={28} />
              <h3 className="font-display text-xl text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="max-w-2xl mx-auto">
          <SectionHeading eyebrow="Connect" title="Let's Build Together" />
          <LeadForm sourcePage="partner" fields={formFields} />
        </div>
      </section>
    </Layout>
  );
}
