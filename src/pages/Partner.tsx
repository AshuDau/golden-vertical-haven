import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import { Handshake, Building2, Users, Globe } from "lucide-react";

const partnerTypes = [
  { icon: Building2, title: "Landowners", description: "Partner with us for joint development projects. We bring the expertise, you bring the land." },
  { icon: Users, title: "Investors", description: "Explore investment opportunities across our real estate portfolio with strong returns." },
  { icon: Handshake, title: "Contractors & Vendors", description: "Join our network of premium contractors, material suppliers, and service providers." },
  { icon: Globe, title: "Channel Partners", description: "Earn attractive commissions by referring clients across any of our four verticals." },
];

const Partner = () => {
  return (
    <Layout>
      <section className="section-padding">
        <SectionHeading
          label="Collaborate"
          title="Partner With Us"
          subtitle="We believe in building relationships as strong as the structures we create. Let's grow together."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {partnerTypes.map((p, i) => (
            <div key={p.title} className="luxury-card animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <p.icon size={24} className="text-primary mb-4" />
              <h3 className="font-display text-xl mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-card">
        <SectionHeading label="Get In Touch" title="Let's Explore Together" subtitle="Tell us about your interest and our partnerships team will connect with you." />
        <LeadForm
          sourcePage="partner"
          fields={[
            { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
            { name: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
            { name: "phone", label: "Phone", type: "tel", placeholder: "+91 ...", required: true },
            { name: "partner_type", label: "Partnership Type", type: "select", placeholder: "Select type", required: true, options: ["Landowner", "Investor", "Contractor / Vendor", "Channel Partner", "Other"] },
            { name: "company", label: "Company Name", type: "text", placeholder: "Your company (if applicable)" },
            { name: "message", label: "Partnership Proposal", type: "textarea", placeholder: "Describe how you'd like to collaborate..." },
          ]}
        />
      </section>
    </Layout>
  );
};

export default Partner;
