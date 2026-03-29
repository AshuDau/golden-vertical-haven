import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import { motion } from "framer-motion";
import realEstateImg from "@/assets/real-estate.jpg";
import { Building2, TrendingUp, MapPin, FileCheck } from "lucide-react";

const services = [
  { icon: Building2, title: "Commercial Deals", description: "Premium commercial properties in high-growth corridors — retail, office, and mixed-use." },
  { icon: TrendingUp, title: "Residential Projects", description: "Curated residential opportunities from luxury plots to turnkey homes." },
  { icon: MapPin, title: "Land Acquisition", description: "Strategic land banking and acquisition services for developers and investors." },
  { icon: FileCheck, title: "Deal Advisory", description: "End-to-end transaction support including due diligence, legal, and financing." },
];

const formFields = [
  { name: "name" as const, label: "Full Name", type: "text" as const, placeholder: "Your name", required: true },
  { name: "email" as const, label: "Email", type: "email" as const, placeholder: "your@email.com", required: true },
  { name: "phone" as const, label: "Phone", type: "tel" as const, placeholder: "+91 XXXXX XXXXX", required: true },
  { name: "property_type" as const, label: "Property Type", type: "select" as const, placeholder: "Select type", options: ["Commercial", "Residential", "Land/Plot", "Mixed Use"] },
  { name: "budget" as const, label: "Budget Range", type: "select" as const, placeholder: "Select budget", options: ["Under ₹50L", "₹50L - ₹1Cr", "₹1Cr - ₹5Cr", "₹5Cr+"] },
  { name: "location" as const, label: "Preferred Location", type: "text" as const, placeholder: "City / Area" },
  { name: "message" as const, label: "Requirements", type: "textarea" as const, placeholder: "Tell us about your property requirements..." },
];

export default function RealEstate() {
  return (
    <Layout>
      <PageHero title="Real Estate" subtitle="Strategic property deals for discerning investors and homebuyers." backgroundImage={realEstateImg} />
      
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading eyebrow="Services" title="Deals That Define Value" subtitle="From land acquisition to premium residential and commercial deals, we position our clients for success." />
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
          <SectionHeading eyebrow="Enquire" title="Find Your Next Property" subtitle="Share your requirements and our real estate team will curate options for you." />
          <LeadForm sourcePage="real-estate" fields={formFields} />
        </div>
      </section>
    </Layout>
  );
}
