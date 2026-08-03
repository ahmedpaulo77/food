import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Utensils, Award, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { menuItems } from "../data/menu";

import homeBg from "../images/home_bg.jpeg";
import "./Home.css";

// variants للأنيميشنات الاحترافية
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Home() {
  const { t, lang } = useLanguage();

  const featuredItems = menuItems ? menuItems.slice(0, 3) : [];
  const isRtl = lang === "ar";

  return (
    <div className="home-page">
      {/* Hero Section كامل على مقاس الشاشة بالضبط */}
      <section 
        className="hero" 
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className="hero-overlay"></div>
        
        <div className="container hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="hero-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              {t.hero?.badge || "طعم طازج كل يوم"}
            </motion.span>

            <h1>
              {t.hero?.title || "استمتع بأشهى الأطباق في Bloom Kitchen"}
            </h1>

            <p>
              {t.hero?.desc || "مكونات طازجة، طهاة محترفون، وأطباق تُحضّر بشغف من قلب المطبخ لخدمتك."}
            </p>

            <div className="hero-actions">
              <Link to="/menu" className="btn-primary glow-effect">
                {t.hero?.btnMenu || "تصفح المنيو"}
                {isRtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </Link>
              <Link to="/contact" className="btn-secondary">
                {t.hero?.btnBook || "احجز طاولة"}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* فاصل انحنائي ناعم بين الهيرو والسكشن اللي تحته */}
        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 36C240 100 480 120 720 80C960 40 1200 60 1440 90V120H0V36Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="featured-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">{t.featured?.eyebrow || "الأكثر طلباً"}</span>
            <h2>{t.featured?.title || "أطباقنا المميزة"}</h2>
            <p>{t.featured?.desc || "اخترنا لك أفضل الأطباق الأكثر مبيعاً"}</p>
          </motion.div>

          <motion.div 
            className="featured-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredItems.map((item) => {
              const categoryText =
                typeof item.category === "object"
                  ? item.category[lang] || item.category.ar
                  : item.category;

              const nameText =
                typeof item.name === "object"
                  ? item.name[lang] || item.name.ar
                  : item.name;

              const descText =
                typeof item.description === "object"
                  ? item.description[lang] || item.description.ar
                  : item.description;

              return (
                <motion.div
                  key={item.id}
                  className="menu-card"
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(217, 119, 6, 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-img-wrapper">
                    <img 
                      src={item.image} 
                      alt={nameText} 
                      loading="lazy" 
                    />
                    {categoryText && <span className="card-category-tag">{categoryText}</span>}
                  </div>
                  <div className="menu-card-body">
                    <div className="card-header-row">
                      <h3>{nameText}</h3>
                      <span className="price-badge">
                        {item.price} {t.menuPage?.currency || "ج.م"}
                      </span>
                    </div>
                    <p>{descText}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="view-more-container">
            <Link to="/menu" className="btn-primary">
              {t.featured?.viewAll || "عرض المنيو كامل"}
              {isRtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Bar بستايل داكن وجذاب مع فاصل انحنائي يفصل عن الفوتر */}
      <section className="features-bar">
        {/* فاصل علوي للسكشن */}
        <div className="bar-wave-top">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H1440V40C1200 80 960 20 720 50C480 80 240 20 0 60V0Z" fill="#ffffff"/>
          </svg>
        </div>

        <div className="container">
          <motion.div 
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="feature-item" variants={itemVariants}>
              <div className="icon-wrapper">
                <Utensils size={30} className="feature-icon" />
              </div>
              <div>
                <h4>{t.aboutPage?.val1Title || "طعام طازج"}</h4>
                <p>{t.aboutPage?.val1Desc || "مكونات يومية طازجة بعناية"}</p>
              </div>
            </motion.div>

            <motion.div className="feature-item" variants={itemVariants}>
              <div className="icon-wrapper">
                <Award size={30} className="feature-icon" />
              </div>
              <div>
                <h4>{t.aboutPage?.val2Title || "جودة عالية"}</h4>
                <p>{t.aboutPage?.val2Desc || "أعلى معايير النظافة والطهي"}</p>
              </div>
            </motion.div>

            <motion.div className="feature-item" variants={itemVariants}>
              <div className="icon-wrapper">
                <Clock size={30} className="feature-icon" />
              </div>
              <div>
                <h4>{t.aboutPage?.val3Title || "خدمة سريعة"}</h4>
                <p>{t.aboutPage?.val3Desc || "تحضير وتقديم في وقت قياسي"}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;