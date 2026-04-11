import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-20">
        <Link to="/" className="font-display text-2xl font-bold text-foreground tracking-wide">
          Lingua <span className="text-gold">French</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-medium tracking-[0.5px] transition-colors duration-300 hover:text-crimson ${
                location.pathname === link.to ? "text-crimson" : "text-foreground/70"
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-crimson after:transition-all after:duration-300 ${
                location.pathname === link.to ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/courses" className="btn-cta text-sm px-6 py-2.5">
            Enroll Now
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/[0.08] pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3.5 text-sm font-medium transition-colors duration-300 ${
                location.pathname === link.to ? "text-crimson" : "text-foreground/70 hover:text-crimson"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <Link to="/courses" onClick={() => setOpen(false)} className="btn-cta block text-center text-sm py-2.5">
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
