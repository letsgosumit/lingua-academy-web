import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary-dark text-white">
    <div className="section-container py-16 grid md:grid-cols-3 gap-10">
      <div>
        <img src={logo} alt="Lingua French Academy" className="h-14 w-auto mb-4" />
        <p className="text-sm text-white/70 leading-relaxed">
          Your gateway to mastering the French language. Online classes for beginners of all ages, taught by experienced native speakers.
        </p>
      </div>
      <div>
        <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
        <div className="flex flex-col gap-3 text-sm">
          {["/", "/about", "/courses", "/contact"].map((path) => (
            <Link key={path} to={path} className="text-white/70 hover:text-crimson transition-colors duration-300">
              {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-display font-semibold text-white mb-4">Get in Touch</h4>
        <div className="flex flex-col gap-3 text-sm text-white/70">
          <span className="flex items-center gap-2"><Mail size={14} className="text-crimson" /> hello@linguafrench.in</span>
          <span className="flex items-center gap-2"><Phone size={14} className="text-crimson" /> +91 98765 43210</span>
          <span className="flex items-center gap-2"><MapPin size={14} className="text-crimson" /> Online — Worldwide</span>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 text-center py-5 text-xs text-white/50">
      © {new Date().getFullYear()} Lingua French Academy. All rights reserved.
    </div>
  </footer>
);

export default Footer;
