import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logo from "../images/logo.png";
import "./Footer.css";

function Footer() {
  const { t } = useLanguage();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="footer"
    >
      <div className="container footer-inner">
        <div className="footer-col">
          <img src={logo} alt="Bloom Kitchen" className="footer-logo" />
          <p>{t.footer?.desc || "نقدم أشهى المأكولات والمشروبات بأعلى جودة وأفضل خدمة."}</p>
          <div className="footer-social">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>{t.footer?.quickLinks || "روابط سريعة"}</h4>
          <Link to="/menu">{t.nav?.menu || "المنيو"}</Link>
          <Link to="/gallery">{t.nav?.gallery || "معرض الصور"}</Link>
          <Link to="/about">{t.nav?.about || "من نحن"}</Link>
          <Link to="/contact">{t.nav?.contact || "اتصل بنا"}</Link>
        </div>

        <div className="footer-col">
          <h4>{t.footer?.contactUs || "تواصل معنا"}</h4>
          <p><Phone size={16} /> 01000000000</p>
          <p><Mail size={16} /> hello@bloomkitchen.com</p>
          <p><MapPin size={16} /> {t.contactPage?.locationVal || "القاهرة، مصر"}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t.footer?.rights || "جميع الحقوق محفوظة"} Bloom Kitchen 2026</p>
      </div>
    </motion.footer>
  );
}

export default Footer;