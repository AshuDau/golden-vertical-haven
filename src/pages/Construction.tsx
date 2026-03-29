import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import constructionImg from "@/assets/construction.jpg";
import { HardHat, Clock, ShieldCheck, Layers } from "lucide-react";

const services = [
  { icon: HardHat, title: "Turnkey Construction", description: "Complete construction solutions from foundation to finishing with guaranteed quality." },
  { icon: Clock, title: "Timely Delivery", description: "Project management with strict timelines and milestone-based progress tracking." },
  { icon: ShieldCheck, title: "Quality Assurance", description: "Multi-layer quality checks and premium material sourcing for lasting structures." },
  { icon: Layers, title: "Renovation & Remodeling", description: "Structural upgrades and renovations for existing properties with modern standards." },
];

const Construction = () => {
  return (
    <Layout>
      <PageHero
        title="Construction"
        subtitle="Precision execution with uncompromising quality standards and on-time delivery."
        image={constructionImg}
      />

      <section className="section-padding">
        <SectionHeading label="Build With Confidence" title="Engineering Excellence" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div key={s.title} className="luxury-card animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <s.icon size={24} className="text-primary mb-4" />
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-card">
        <SectionHeading label="Start Building" title="Get a Construction Estimate" subtitle="Share your project details for a free consultation and estimate." />
        <LeadForm
          sourcePage="construction"
          fields={[
            { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
            { name: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
            { name: "phone", label: "Phone", type: "tel", placeholder: "+91 ...", required: true },
            { name: "construction_type", label: "Construction Type", type: "select", placeholder: "Select type", required: true, options: ["New Construction", "Renovation", "Commercial Build", "Industrial"] },
            { name: "area", label: "Built-up Area (sq ft)", type: "text", placeholder: "e.g., 5000 sq ft" },
            { name: "timeline", label: "Expected Timeline", type: "text", placeholder: "e.g., 12 months" },
            { name: "message", label: "Project Details", type: "textarea", placeholder: "Describe your construction requirements..." },
          ]}
        />
      </section>
    </Layout>
  );
};

export default Construction;
