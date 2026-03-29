import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Building2, Compass, HardHat, Palette } from "lucide-react";

interface Opportunity {
  id: string;
  title: string;
  vertical: string;
  location: string;
  price?: string;
  description: string;
}

// Placeholder — will be replaced by Google Sheet data when connected
const opportunities: Opportunity[] = [];

const verticalIcons: Record<string, React.ElementType> = {
  "Real Estate": Building2,
  "Architecture": Compass,
  "Construction": HardHat,
  "Interiors": Palette,
};

const filters = ["All", "Real Estate", "Architecture", "Construction", "Interiors"];

export default function Opportunities() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? opportunities : opportunities.filter((o) => o.vertical === activeFilter);

  return (
    <Layout>
      <PageHero title="Opportunities" subtitle="Explore live deals, projects, and collaborations across all verticals." backgroundImage={heroBg} />

      <section className="section-padding max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`font-body text-xs tracking-[0.15em] uppercase px-6 py-3 border transition-all ${
                activeFilter === f ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((opp) => {
              const Icon = verticalIcons[opp.vertical] || Building2;
              return (
                <motion.div key={opp.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="text-primary" size={18} />
                    <span className="font-body text-xs tracking-[0.15em] uppercase text-primary">{opp.vertical}</span>
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{opp.title}</h3>
                  <p className="text-muted-foreground font-body text-sm mb-4">{opp.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-body">{opp.location}</span>
                    {opp.price && <span className="text-primary font-body font-semibold">{opp.price}</span>}
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="font-serif text-2xl text-foreground italic mb-4">Opportunities will be updated soon.</p>
            <p className="text-muted-foreground font-body mb-8">Submit your requirement and we'll match you with the right opportunity.</p>
          </motion.div>
        )}
      </section>

      <section className="section-padding bg-card">
        <div className="max-w-2xl mx-auto">
          <SectionHeading eyebrow="Submit Requirement" title="Tell Us What You're Looking For" />
          <LeadForm
            sourcePage="opportunities"
            fields={[
              { name: "name" as const, label: "Full Name", type: "text" as const, placeholder: "Your name", required: true },
              { name: "email" as const, label: "Email", type: "email" as const, placeholder: "your@email.com", required: true },
              { name: "phone" as const, label: "Phone", type: "tel" as const, placeholder: "+91 XXXXX XXXXX", required: true },
              { name: "service" as const, label: "Vertical", type: "select" as const, placeholder: "Select vertical", options: ["Real Estate", "Architecture", "Construction", "Interiors"] },
              { name: "message" as const, label: "Requirements", type: "textarea" as const, placeholder: "Describe what you're looking for..." },
            ]}
          />
        </div>
      </section>
    </Layout>
  );
}
