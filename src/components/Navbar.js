import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logo from "../images/logo.png";
import "./Navbar.css";

function Navbar() {
  const { t, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { path: "/", label: t.nav.home },
    { path: "/menu", label: t.nav.menu },
    { path: "/gallery", label: t.nav.gallery },
    { path: "/about", label: t.nav.about },
    { path: "/contact", label: t.nav.contact },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
    >
      <div className="container navbar-inner">
        {/* تحجيم اللوجو والصورة بشكل مباشر لضمان عدم تمددها */}
        <Link 
          to="/" 
          className="navbar-logo"
          style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            maxWidth: "140px", 
            maxHeight: "50px", 
            overflow: "hidden" 
          }}
        >
          <img 
            src={logo} 
            alt="Bloom Kitchen" 
            style={{ 
              width: "100%", 
              maxHeight: "48px", 
              objectFit: "contain", 
              display: "block" 
            }}
          />
        </Link>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          {links.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
            >
              <Link
                to={link.path}
                className={location.pathname === link.path ? "active-link" : ""}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          <button className="lang-toggle" onClick={toggleLanguage}>
            <Globe size={16} />
            {t.nav.langBtn}
          </button>

          <Link to="/menu" className="btn-primary navbar-cta">
            {t.nav.cta}
          </Link>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X size={26} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Menu size={26} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;