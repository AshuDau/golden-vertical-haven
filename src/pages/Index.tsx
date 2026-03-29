import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import heroBg from "@/assets/hero-bg.jpg";
import realEstateImg from "@/assets/real-estate.jpg";
import architectureImg from "@/assets/architecture.jpg";
import constructionImg from "@/assets/construction.jpg";
import interiorsImg from "@/assets/interiors.jpg";
import { ArrowRight, Building2, PenTool, HardHat, Sparkles, Shield, Users, TrendingUp, Lightbulb } from "lucide-react";

const verticals = [
  {
    title: "Real Estate",
    description: "Premium commercial and residential deals curated for discerning investors and buyers.",
    image: realEstateImg,
    path: "/real-estate",
    icon: Building2,
  },
  {
    title: "Architecture",
    description: "Visionary design and planning that transforms spaces into architectural statements.",
    image: architectureImg,
    path: "/architecture",
    icon: PenTool,
  },
  {
    title: "Construction",
    description: "Precision execution with uncompromising quality standards and timely delivery.",
    image: constructionImg,
    path: "/construction",
    icon: HardHat,
  },
  {
    title: "Interiors",
    description: "Luxury interior experiences that blend aesthetics with functionality.",
    image: interiorsImg,
    path: "/interiors",
    icon: Sparkles,
  },
];

const whyDauji = [
  { icon: Shield, title: "Trust & Transparency", description: "Every project backed by integrity and clear communication." },
  { icon: Users, title: "Expert Team", description: "Seasoned professionals across all four verticals." },
  { icon: TrendingUp, title: "End-to-End Solutions", description: "From land acquisition to interior finishing — one ecosystem." },
  { icon: Lightbulb, title: "Innovation Driven", description: "Modern techniques and creative design thinking." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Dauji Projects" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-6 animate-fade-in">
            Dauji Projects
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] animate-fade-in" style={{ animationDelay: "0.15s" }}>
            From Land<br />
            <span className="text-gradient-gold">to Landmark</span>
          </h1>
          <p className="mt-8 text-muted-foreground text-lg md:text-xl font-body max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            A complete ecosystem for real estate, architecture, construction, and luxury interiors.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.45s" }}>
            <Link to="/opportunities" className="luxury-button">
              Explore Opportunities
            </Link>
            <Link to="/contact" className="luxury-button-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="section-padding">
        <SectionHeading
          label="Our Verticals"
          title="Four Pillars of Excellence"
          subtitle="Each vertical operates as an independent business unit, delivering specialized expertise under one trusted brand."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {verticals.map((v, i) => (
            <Link
              key={v.path}
              to={v.path}
              className="group luxury-card p-0 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={v.image}
                  alt={v.title}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-3">
                  <v.icon size={20} className="text-primary" />
                  <h3 className="font-display text-xl md:text-2xl">{v.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
                  {v.description}
                </p>
                <span className="text-primary text-xs tracking-[0.15em] uppercase font-body inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Ecosystem */}
      <section className="section-padding bg-card">
        <SectionHeading
          label="The Ecosystem"
          title="One Vision, Complete Execution"
          subtitle="Dauji Projects connects every stage of the built environment — from identifying the right land to designing, building, and finishing interiors with luxury precision."
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {verticals.map((v) => (
              <div key={v.title} className="bg-card p-6 md:p-8 text-center">
                <v.icon size={28} className="text-primary mx-auto mb-3" />
                <p className="text-xs tracking-[0.15em] uppercase font-body text-foreground">{v.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 h-px bg-gold-gradient" />
          <p className="mt-6 text-center text-sm text-muted-foreground font-body">
            Seamlessly integrated for end-to-end project delivery
          </p>
        </div>
      </section>

      {/* Why Dauji */}
      <section className="section-padding">
        <SectionHeading label="Why Dauji" title="Built on Trust, Driven by Excellence" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {whyDauji.map((item, i) => (
            <div key={item.title} className="luxury-card text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <item.icon size={28} className="text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Capture */}
      <section className="section-padding bg-card">
        <SectionHeading
          label="Get Started"
          title="Let's Build Something Extraordinary"
          subtitle="Tell us about your project and our team will get back to you within 24 hours."
        />
        <LeadForm
          sourcePage="homepage"
          fields={[
            { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
            { name: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
            { name: "phone", label: "Phone", type: "tel", placeholder: "+91 ...", required: true },
            { name: "interest", label: "Interested In", type: "select", placeholder: "Select a service", required: true, options: ["Real Estate", "Architecture", "Construction", "Interiors", "Multiple Services"] },
            { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about your requirements..." },
          ]}
        />
      </section>
    </Layout>
  );
};

export default Index;
