import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import { Building2, MapPin } from "lucide-react";

const Opportunities = () => {
  // In production, this would fetch from Google Sheets
  const opportunities: Array<{ title: string; type: string; location: string; price: string }> = [];

  return (
    <Layout>
      <section className="section-padding min-h-[60vh]">
        <SectionHeading
          label="Opportunities"
          title="Current Listings"
          subtitle="Explore available real estate and investment opportunities curated by Dauji Projects."
        />

        {opportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {opportunities.map((opp, i) => (
              <div key={i} className="luxury-card">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 size={18} className="text-primary" />
                  <span className="text-xs tracking-[0.15em] uppercase text-primary font-body">{opp.type}</span>
                </div>
                <h3 className="font-display text-xl mb-2">{opp.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-body mb-2">
                  <MapPin size={14} />
                  {opp.location}
                </div>
                <p className="text-primary font-display text-lg">{opp.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center max-w-xl mx-auto">
            <div className="luxury-card">
              <p className="font-display text-xl md:text-2xl mb-4">
                Opportunities will be updated soon.
              </p>
              <p className="text-muted-foreground text-sm font-body">
                Submit your requirement below and we'll match you with the best options as they become available.
              </p>
            </div>
          </div>
        )}
      </section>

      <section className="section-padding bg-card">
        <SectionHeading label="Submit Your Requirement" title="Tell Us What You're Looking For" />
        <LeadForm
          sourcePage="opportunities"
          fields={[
            { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
            { name: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
            { name: "phone", label: "Phone", type: "tel", placeholder: "+91 ...", required: true },
            { name: "requirement_type", label: "Looking For", type: "select", placeholder: "Select type", required: true, options: ["Buy Property", "Sell Property", "Investment", "Rental", "Joint Venture"] },
            { name: "budget", label: "Budget Range", type: "text", placeholder: "e.g., ₹50L - ₹2Cr" },
            { name: "message", label: "Detailed Requirement", type: "textarea", placeholder: "Describe what you're looking for..." },
          ]}
        />
      </section>
    </Layout>
  );
};

export default Opportunities;
