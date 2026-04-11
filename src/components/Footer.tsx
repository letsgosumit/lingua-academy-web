import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-white/[0.08]">
    <div className="section-container py-16 grid md:grid-cols-3 gap-10">
      <div>
        <h3 className="font-display text-xl font-bold text-foreground mb-4">
          Lingua <span className="text-gold">French</span> Academy
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Your gateway to mastering the French language. Online classes for beginners of all ages, taught by experienced native speakers.
        </p>
      </div>
      <div>
        <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
        <div className="flex flex-col gap-3 text-sm">
          {["/", "/about", "/courses", "/contact"].map((path) => (
            <Link key={path} to={path} className="text-muted-foreground hover:text-crimson transition-colors duration-300">
              {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-display font-semibold text-foreground mb-4">Get in Touch</h4>
        <div className="flex flex-col gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Mail size={14} className="text-crimson" /> hello@linguafrench.in</span>
          <span className="flex items-center gap-2"><Phone size={14} className="text-crimson" /> +91 98765 43210</span>
          <span className="flex items-center gap-2"><MapPin size={14} className="text-crimson" /> Online — Worldwide</span>
        </div>
      </div>
    </div>
    <div className="border-t border-white/[0.08] text-center py-5 text-xs text-muted-foreground">
      © {new Date().getFullYear()} Lingua French Academy. All rights reserved.
    </div>
  </footer>
);

export default Footer;
