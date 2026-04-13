import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-navy border-t border-white/[0.08]">
    <div className="section-container py-16 grid md:grid-cols-3 gap-10">
      <div>
        <img src={logo} alt="Lingua French Academy" className="h-16 w-auto mb-4" />
        <p className="text-sm text-white/60 leading-relaxed">
          Your gateway to mastering the French language. Online classes for beginners of all ages, taught by experienced native speakers.
        </p>
      </div>
      <div>
        <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
        <div className="flex flex-col gap-3 text-sm">
          {["/", "/about", "/courses", "/contact"].map((path) => (
            <Link key={path} to={path} className="text-white/60 hover:text-primary transition-colors duration-300">
              {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-display font-semibold text-white mb-4">Get in Touch</h4>
        <div className="flex flex-col gap-3 text-sm text-white/60">
          <span className="flex items-center gap-2"><Mail size={14} className="text-primary" /> bonjour@linguafrenchacademy.com</span>
          <span className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +91 8826839519</span>
          <span className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Online — Worldwide</span>
        </div>
      </div>
    </div>
    <div className="border-t border-white/[0.08] text-center py-5 text-xs text-white/40">
      © {new Date().getFullYear()} Lingua French Academy. All rights reserved.
    </div>
  </footer>
);

export default Footer;
