import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, Award, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Precision", description: "Every detail matters. From design to delivery, we maintain exacting standards." },
  { icon: Eye, title: "Vision", description: "We see beyond buildings — we envision communities, lifestyles, and legacies." },
  { icon: Award, title: "Excellence", description: "Quality isn't negotiable. It's the foundation of everything we do." },
  { icon: Users, title: "Relationships", description: "Built on trust, sustained by transparency, and strengthened over time." },
];

const About = () => {
  return (
    <Layout>
      <section className="section-padding">
        <SectionHeading label="About Us" title="The Dauji Story" />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-muted-foreground font-body leading-relaxed text-lg text-center">
            Dauji Projects is a multi-vertical enterprise rooted in Gwalior, operating across real estate, architecture, construction, and luxury interiors. We don't just build structures — we create landmarks that define skylines and shape communities.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed text-center">
            With each vertical functioning as an independent business unit, we bring specialized expertise and dedicated focus to every project. Our integrated ecosystem ensures seamless collaboration across disciplines, delivering exceptional results from land acquisition to interior finishing.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <SectionHeading label="Our Values" title="What Drives Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <div key={v.title} className="luxury-card text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <v.icon size={28} className="text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "4", label: "Business Verticals" },
            { number: "100+", label: "Happy Clients" },
            { number: "10+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-4xl text-gradient-gold">{stat.number}</p>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-body mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
