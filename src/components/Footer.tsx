import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-gradient-gold mb-4">DAUJI</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              From Land to Landmark. A complete ecosystem for real estate, architecture, construction, and luxury interiors.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary mb-6 font-body">Services</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Real Estate", path: "/real-estate" },
                { label: "Architecture", path: "/architecture" },
                { label: "Construction", path: "/construction" },
                { label: "Interiors", path: "/interiors" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary mb-6 font-body">Company</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Opportunities", path: "/opportunities" },
                { label: "Partner With Us", path: "/partner" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary mb-6 font-body">Contact</h4>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground font-body">
              <a href="mailto:info@daujiprojects.in" className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Mail size={16} className="text-primary shrink-0" />
                info@daujiprojects.in
              </a>
              <a href="tel:+917047666046" className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Phone size={16} className="text-primary shrink-0" />
                +91 70476 66046
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span>3rd Floor, Satyam Residency, Alkapuri, Gwalior</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span>E-17, GF, Hill View Residency, City Center, Gwalior</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body tracking-wide">
            © {new Date().getFullYear()} Dauji Projects. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-body tracking-wide">
            From Land to Landmark
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
