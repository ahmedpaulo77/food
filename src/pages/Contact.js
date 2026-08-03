import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import contactImg from "../images/contact.jpeg";
import "./Contact.css";

function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="contact-page">
      <div className="menu-page-header">
        <div className="container">
          <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {t.contactPage?.eyebrow}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            {t.contactPage?.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            {t.contactPage?.desc}
          </motion.p>
        </div>
      </div>

      <div className="container contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={contactImg} alt={t.contactPage?.title} className="contact-img" />

          <div className="contact-detail">
            <Phone size={20} />
            <div>
              <strong>{t.contactPage?.callUs}</strong>
              <p>01000000000</p>
            </div>
          </div>
          <div className="contact-detail">
            <Mail size={20} />
            <div>
              <strong>{t.contactPage?.emailUs}</strong>
              <p>hello@bloomkitchen.com</p>
            </div>
          </div>
          <div className="contact-detail">
            <MapPin size={20} />
            <div>
              <strong>{t.contactPage?.location}</strong>
              <p>{t.contactPage?.locationVal}</p>
            </div>
          </div>
          <div className="contact-detail">
            <Clock size={20} />
            <div>
              <strong>{t.contactPage?.hours}</strong>
              <p>{t.contactPage?.hoursVal}</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <input type="text" placeholder={t.contactPage?.namePlaceholder} required />
          <input type="tel" placeholder={t.contactPage?.phonePlaceholder} required />
          <input type="text" placeholder={t.contactPage?.detailsPlaceholder} />
          <textarea placeholder={t.contactPage?.notesPlaceholder} rows="4" />
          <button type="submit" className="btn-primary">{t.contactPage?.submitBtn}</button>

          {submitted && (
            <motion.p
              className="form-success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {t.contactPage?.successMsg}
            </motion.p>
          )}
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;