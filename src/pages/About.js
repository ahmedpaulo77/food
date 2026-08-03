import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import aboutImg from "../images/about_img.png";
import daytimeBg from "../images/daytime_bg.jpeg";
import "./About.css";

function About() {
  const { t } = useLanguage();

  const values = [
    { title: t.aboutPage?.val1Title, desc: t.aboutPage?.val1Desc },
    { title: t.aboutPage?.val2Title, desc: t.aboutPage?.val2Desc },
    { title: t.aboutPage?.val3Title, desc: t.aboutPage?.val3Desc },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container about-hero-grid">
          <motion.div
            className="about-hero-img"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <img src={aboutImg} alt="Bloom Kitchen" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="eyebrow">{t.aboutPage?.eyebrow}</span>
            <h1>{t.aboutPage?.title}</h1>
            <p>{t.aboutPage?.p1}</p>
            <p>{t.aboutPage?.p2}</p>
          </motion.div>
        </div>
      </section>

      <section className="about-values" style={{ backgroundImage: `url(${daytimeBg})` }}>
        <div className="about-values-overlay" />
        <div className="container about-values-grid">
          {values.map((val, i) => (
            <motion.div
              key={val.title || i}
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;