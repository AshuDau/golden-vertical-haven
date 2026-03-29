import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@daujiprojects.in", href: "mailto:info@daujiprojects.in" },
  { icon: Phone, label: "Phone", value: "+91 70476 66046", href: "tel:+917047666046" },
  { icon: MapPin, label: "Office 1", value: "3rd Floor, Satyam Residency, Alkapuri, Gwalior" },
  { icon: MapPin, label: "Office 2", value: "E-17, GF, Hill View Residency, City Center, Gwalior" },
  { icon: Clock, label: "Hours", value: "Mon - Sat, 10:00 AM - 7:00 PM" },
];

const Contact = () => {
  return (
    <Layout>
      <section className="section-padding">
        <SectionHeading label="Contact" title="Get in Touch" subtitle="We'd love to hear from you. Reach out through any of the channels below." />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="luxury-card flex items-start gap-4">
                <info.icon size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-body mb-1">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-foreground font-body text-sm hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-body text-sm">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <LeadForm
            sourcePage="contact"
            title="Send Us a Message"
            fields={[
              { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
              { name: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
              { name: "phone", label: "Phone", type: "tel", placeholder: "+91 ...", required: true },
              { name: "subject", label: "Subject", type: "select", placeholder: "Select topic", required: true, options: ["Real Estate Enquiry", "Architecture Project", "Construction Quote", "Interior Design", "Partnership", "General Enquiry"] },
              { name: "message", label: "Message", type: "textarea", placeholder: "How can we help you?", required: true },
            ]}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
