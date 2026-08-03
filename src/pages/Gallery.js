import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// الصور الأساسية للجاليري
import gallery1 from "../images/gallery1.jpeg";
import gallery2 from "../images/offer1.png";
import gallery3 from "../images/gallery3.jpeg";
import gallery4 from "../images/gallery4.jpeg";
import gallery5 from "../images/gallery5.jpeg";
import gallery6 from "../images/gallery6.jpeg";

// إضافة أطباق إضافية لإثراء المعرض
import food1 from "../images/food1.png";
import food2 from "../images/food2.png";
import food3 from "../images/food3.png";
import food4 from "../images/food4.png";
import food5 from "../images/food5.png";
import food6 from "../images/food6.png";

import "./Gallery.css";

const images = [
  gallery1,
  gallery2,
  food1,
  gallery3,
  food2,
  gallery4,
  food3,
  gallery5,
  food4,
  gallery6,
  food5,
  food6
];

function Gallery() {
  const { t, lang } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const isRtl = lang === "ar";

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery-page">
      {/* Header Section */}
      <div className="gallery-header">
        <div className="container">
          <motion.span 
            className="eyebrow" 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            {t.galleryPage?.eyebrow || "معرض الصور"}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
          >
            {t.galleryPage?.title || "جولة داخل مطبخنا وأطباقنا"}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
          >
            {t.galleryPage?.desc || "استمتع بمشاهدة أحدث الصور لأطباقنا المحضرة بعناية وأجواء المكان."}
          </motion.p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="container">
        <div className="gallery-grid">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`gallery-item ${i % 5 === 0 ? "gallery-item--tall" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => openLightbox(i)}
            >
              <img src={img} alt={`Gallery dish ${i + 1}`} loading="lazy" />
              <div className="gallery-hover-overlay">
                <Maximize2 size={26} className="overlay-icon" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Slider Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* زر الإغلاق */}
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={26} />
            </button>

            {/* زر السابق */}
            <button className="lightbox-nav prev-btn" onClick={prevImage}>
              {isRtl ? <ChevronRight size={32} /> : <ChevronLeft size={32} />}
            </button>

            {/* الصورة المكبرة مع انيميشن سلس */}
            <motion.div 
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex]}
                alt={`Selected image ${selectedIndex + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              />
              <div className="lightbox-counter">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>

            {/* زر التالي */}
            <button className="lightbox-nav next-btn" onClick={nextImage}>
              {isRtl ? <ChevronLeft size={32} /> : <ChevronRight size={32} />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;