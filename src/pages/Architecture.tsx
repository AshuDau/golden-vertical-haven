import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import architectureImg from "@/assets/architecture.jpg";
import { PenTool, Ruler, Eye, FileText } from "lucide-react";

const services = [
  { icon: PenTool, title: "Architectural Design", description: "Innovative and functional designs for residential, commercial, and institutional projects." },
  { icon: Ruler, title: "Master Planning", description: "Comprehensive site planning and urban design for developments of all scales." },
  { icon: Eye, title: "3D Visualization", description: "Photorealistic renders and walkthroughs to bring your vision to life before construction." },
  { icon: FileText, title: "Regulatory Approvals", description: "End-to-end assistance with building permits, NOCs, and regulatory compliance." },
];

const Architecture = () => {
  return (
    <Layout>
      <PageHero
        title="Architecture"
        subtitle="Visionary design and planning that transforms spaces into architectural statements."
        image={architectureImg}
      />

      <section className="section-padding">
        <SectionHeading label="Design Excellence" title="Where Vision Meets Structure" />
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
        <SectionHeading label="Start Your Project" title="Let's Design Your Dream" subtitle="Share your project details and our architects will get in touch." />
        <LeadForm
          sourcePage="architecture"
          fields={[
            { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
            { name: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
            { name: "phone", label: "Phone", type: "tel", placeholder: "+91 ...", required: true },
            { name: "project_type", label: "Project Type", type: "select", placeholder: "Select type", required: true, options: ["Residential", "Commercial", "Institutional", "Mixed Use"] },
            { name: "plot_size", label: "Plot Size (sq ft)", type: "text", placeholder: "e.g., 2000 sq ft" },
            { name: "message", label: "Project Brief", type: "textarea", placeholder: "Describe your design vision..." },
          ]}
        />
      </section>
    </Layout>
  );
};

export default Architecture;
