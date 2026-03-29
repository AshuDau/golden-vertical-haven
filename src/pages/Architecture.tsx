import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import { motion } from "framer-motion";
import architectureImg from "@/assets/architecture.jpg";
import { Ruler, Layers, PenTool, FileText } from "lucide-react";

const services = [
  { icon: PenTool, title: "Conceptual Design", description: "Transforming briefs into compelling architectural concepts that balance form and function." },
  { icon: Layers, title: "Detailed Planning", description: "Comprehensive planning with 3D visualization, structural analysis, and material specification." },
  { icon: Ruler, title: "Interior Architecture", description: "Spatial design that optimizes flow, light, and livability across every room." },
  { icon: FileText, title: "Regulatory Approvals", description: "Navigation of local building codes, permits, and compliance requirements." },
];

const formFields = [
  { name: "name" as const, label: "Full Name", type: "text" as const, placeholder: "Your name", required: true },
  { name: "email" as const, label: "Email", type: "email" as const, placeholder: "your@email.com", required: true },
  { name: "phone" as const, label: "Phone", type: "tel" as const, placeholder: "+91 XXXXX XXXXX", required: true },
  { name: "project_type" as const, label: "Project Type", type: "select" as const, placeholder: "Select type", options: ["Residential", "Commercial", "Institutional", "Hospitality", "Mixed Use"] },
  { name: "area_sqft" as const, label: "Approx. Area (sq ft)", type: "text" as const, placeholder: "e.g., 5000" },
  { name: "location" as const, label: "Project Location", type: "text" as const, placeholder: "City / Area" },
  { name: "message" as const, label: "Project Brief", type: "textarea" as const, placeholder: "Describe your vision..." },
];

export default function Architecture() {
  return (
    <Layout>
      <PageHero title="Architecture" subtitle="Visionary design and planning for spaces that inspire." backgroundImage={architectureImg} />
      
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading eyebrow="Services" title="Design That Speaks" subtitle="Our architectural studio blends aesthetics with engineering precision to create structures that stand the test of time." />
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
          <SectionHeading eyebrow="Start a Project" title="Let's Design Together" />
          <LeadForm sourcePage="architecture" fields={formFields} />
        </div>
      </section>
    </Layout>
  );
}
