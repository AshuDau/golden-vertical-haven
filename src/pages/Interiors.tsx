import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import interiorsImg from "@/assets/interiors.jpg";
import { Sparkles, Palette, Gem, Sofa } from "lucide-react";

const services = [
  { icon: Palette, title: "Bespoke Design Concepts", description: "Tailored interior concepts that reflect your personality, lifestyle, and aspirations with meticulous attention to detail." },
  { icon: Gem, title: "Premium Material Sourcing", description: "Curated selection of imported marbles, exotic woods, artisanal finishes, and luxury hardware from around the world." },
  { icon: Sofa, title: "Custom Furniture & Furnishing", description: "Made-to-order furniture, bespoke upholstery, and curated décor pieces that elevate every room." },
  { icon: Sparkles, title: "Turnkey Luxury Execution", description: "End-to-end interior transformation — from concept mood boards to final styling and handover." },
];

const philosophy = [
  "Every space tells a story. We listen to yours.",
  "Materials are chosen not just for beauty, but for how they feel.",
  "Light, texture, and proportion — the invisible details that define luxury.",
  "We don't follow trends. We create timeless environments.",
];

const Interiors = () => {
  return (
    <Layout>
      <PageHero
        title="Luxury Interiors"
        subtitle="Where refined aesthetics meet exceptional craftsmanship. Every detail, considered. Every space, elevated."
        image={interiorsImg}
      />

      {/* Philosophy */}
      <section className="section-padding">
        <SectionHeading label="Our Philosophy" title="The Art of Living Well" />
        <div className="max-w-3xl mx-auto space-y-8">
          {philosophy.map((line, i) => (
            <p
              key={i}
              className="font-display text-xl md:text-2xl text-center leading-relaxed text-foreground/80 italic animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              "{line}"
            </p>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-card">
        <SectionHeading label="Services" title="Crafted With Intention" />
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

      {/* Process */}
      <section className="section-padding">
        <SectionHeading label="The Process" title="From Vision to Reality" />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Discovery & Brief", "Concept Design", "Material Selection", "Execution & Styling"].map((step, i) => (
              <div key={step} className="text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-display text-lg">{i + 1}</span>
                </div>
                <p className="text-sm font-body tracking-wide">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 h-px bg-gold-gradient" />
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-card">
        <SectionHeading label="Begin Your Transformation" title="Design Your Dream Interior" subtitle="Share your vision and our interior designers will craft a bespoke proposal." />
        <LeadForm
          sourcePage="interiors"
          fields={[
            { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
            { name: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
            { name: "phone", label: "Phone", type: "tel", placeholder: "+91 ...", required: true },
            { name: "space_type", label: "Space Type", type: "select", placeholder: "Select type", required: true, options: ["Apartment", "Villa / Bungalow", "Office", "Showroom / Retail", "Hospitality"] },
            { name: "area", label: "Area (sq ft)", type: "text", placeholder: "e.g., 3000 sq ft" },
            { name: "budget", label: "Budget Range", type: "text", placeholder: "e.g., ₹25L - ₹50L" },
            { name: "style", label: "Preferred Style", type: "select", placeholder: "Select style", options: ["Contemporary", "Modern Luxury", "Classic", "Minimalist", "Art Deco", "Not Sure"] },
            { name: "message", label: "Your Vision", type: "textarea", placeholder: "Describe the ambiance and experience you envision..." },
          ]}
        />
      </section>
    </Layout>
  );
};

export default Interiors;
