import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import realEstateImg from "@/assets/real-estate.jpg";
import { Building2, TrendingUp, MapPin, HandshakeIcon } from "lucide-react";

const services = [
  { icon: Building2, title: "Commercial Deals", description: "Premium commercial properties — offices, retail spaces, and investment opportunities." },
  { icon: TrendingUp, title: "Residential Projects", description: "Curated residential deals ranging from luxury apartments to independent homes." },
  { icon: MapPin, title: "Land Acquisition", description: "Strategic land identification and acquisition for development and investment." },
  { icon: HandshakeIcon, title: "Investment Advisory", description: "Expert guidance on real estate investments with strong ROI potential." },
];

const RealEstate = () => {
  return (
    <Layout>
      <PageHero
        title="Real Estate"
        subtitle="Premium commercial and residential deals curated for discerning investors and homeowners."
        image={realEstateImg}
      />

      <section className="section-padding">
        <SectionHeading label="What We Offer" title="Strategic Real Estate Solutions" />
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
        <SectionHeading
          label="Enquire Now"
          title="Find Your Perfect Property"
          subtitle="Share your requirements and our real estate experts will curate the best options for you."
        />
        <LeadForm
          sourcePage="real-estate"
          fields={[
            { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
            { name: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
            { name: "phone", label: "Phone", type: "tel", placeholder: "+91 ...", required: true },
            { name: "property_type", label: "Property Type", type: "select", placeholder: "Select type", required: true, options: ["Commercial", "Residential", "Land", "Investment"] },
            { name: "budget", label: "Budget Range", type: "text", placeholder: "e.g., ₹50L - ₹1Cr" },
            { name: "location", label: "Preferred Location", type: "text", placeholder: "e.g., Gwalior, Bhopal" },
            { name: "message", label: "Additional Requirements", type: "textarea", placeholder: "Tell us more about what you're looking for..." },
          ]}
        />
      </section>
    </Layout>
  );
};

export default RealEstate;
