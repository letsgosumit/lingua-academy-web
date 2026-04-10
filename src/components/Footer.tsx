import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-dark text-primary-foreground/70">
    <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
          Lingua <span className="text-gold">French</span> Academy
        </h3>
        <p className="text-sm leading-relaxed">
          Your gateway to mastering the French language. Online classes for beginners of all ages, taught by experienced native speakers.
        </p>
      </div>
      <div>
        <h4 className="font-display font-semibold text-primary-foreground mb-3">Quick Links</h4>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
          <Link to="/courses" className="hover:text-gold transition-colors">Courses</Link>
          <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
        </div>
      </div>
      <div>
        <h4 className="font-display font-semibold text-primary-foreground mb-3">Get in Touch</h4>
        <div className="flex flex-col gap-2 text-sm">
          <span className="flex items-center gap-2"><Mail size={14} /> hello@linguafrench.in</span>
          <span className="flex items-center gap-2"><Phone size={14} /> +91 98765 43210</span>
          <span className="flex items-center gap-2"><MapPin size={14} /> Online — Worldwide</span>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 text-center py-4 text-xs text-primary-foreground/40">
      © {new Date().getFullYear()} Lingua French Academy. All rights reserved.
    </div>
  </footer>
);

export default Footer;
