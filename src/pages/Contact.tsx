import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@daujiprojects.in", href: "mailto:info@daujiprojects.in" },
  { icon: Phone, label: "Phone", value: "+91 70476 66046", href: "tel:+917047666046" },
  { icon: MapPin, label: "Office 1", value: "3rd Floor, Satyam Residency, Alkapuri, Gwalior" },
  { icon: MapPin, label: "Office 2", value: "E-17, GF, Hill View Residency, City Center, Gwalior" },
  { icon: Clock, label: "Hours", value: "Mon – Sat: 10:00 AM – 7:00 PM" },
];

export default function Contact() {
  return (
    <Layout>
      <PageHero title="Contact Us" subtitle="Let's start a conversation about your next project." backgroundImage={heroBg} />

      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <SectionHeading eyebrow="Reach Out" title="Get in Touch" align="left" />
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-start gap-4">
                  <item.icon className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-foreground font-body hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-foreground font-body">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <SectionHeading eyebrow="Send a Message" title="We'd Love to Hear From You" align="left" />
            <LeadForm
              sourcePage="contact"
              fields={[
                { name: "name" as const, label: "Full Name", type: "text" as const, placeholder: "Your name", required: true },
                { name: "email" as const, label: "Email", type: "email" as const, placeholder: "your@email.com", required: true },
                { name: "phone" as const, label: "Phone", type: "tel" as const, placeholder: "+91 XXXXX XXXXX", required: true },
                { name: "service" as const, label: "Service Interest", type: "select" as const, placeholder: "Select service", options: ["Real Estate", "Architecture", "Construction", "Interiors", "General Enquiry"] },
                { name: "message" as const, label: "Message", type: "textarea" as const, placeholder: "How can we help you?" },
              ]}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
