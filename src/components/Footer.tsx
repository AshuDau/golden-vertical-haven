import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl tracking-[0.1em] text-foreground mb-4">
              <span className="text-gradient-gold">DAUJI</span> PROJECTS
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              From Land to Landmark. A complete ecosystem for real estate, architecture, construction, and luxury interiors.
            </p>
          </div>

          {/* Verticals */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-6">Our Verticals</h4>
            <div className="space-y-3">
              {[
                { label: "Real Estate", path: "/real-estate" },
                { label: "Architecture", path: "/architecture" },
                { label: "Construction", path: "/construction" },
                { label: "Interiors", path: "/interiors" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="block text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "Opportunities", path: "/opportunities" },
                { label: "Partner With Us", path: "/partner" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="block text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:info@daujiprojects.in" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                <Mail size={14} className="text-primary shrink-0" />
                info@daujiprojects.in
              </a>
              <a href="tel:+917047666046" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                <Phone size={14} className="text-primary shrink-0" />
                +91 70476 66046
              </a>
              <div className="flex items-start gap-3 text-muted-foreground font-body text-sm">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                <span>3rd Floor, Satyam Residency, Alkapuri, Gwalior</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground font-body text-sm">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                <span>E-17, GF, Hill View Residency, City Center, Gwalior</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-body text-xs tracking-wider">
            © {new Date().getFullYear()} Dauji Projects. All rights reserved.
          </p>
          <p className="text-muted-foreground font-body text-xs tracking-wider">
            From Land to Landmark
          </p>
        </div>
      </div>
    </footer>
  );
}
