import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, RotateCcw, SlidersHorizontal, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { menuItems, CATEGORIES } from "../data/menu";
import "./Menu.css";

function Menu() {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // 1️⃣ هنا تم تعديل الحد الأقصى للسعر لـ 500 بدلاً من 400
  const [maxPrice, setMaxPrice] = useState(500);

  // حالة الـ Lightbox للتكبير والتنقل بين الصور
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  // تصفية الأطباق
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.categoryId === selectedCategory;

      const itemName = typeof item.name === "object" ? (item.name[lang] || item.name.ar) : item.name;
      const itemDesc = typeof item.description === "object" ? (item.description[lang] || item.description.ar) : item.description;

      const matchesSearch =
        itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        itemDesc.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesPrice = item.price <= maxPrice;

      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [selectedCategory, searchQuery, maxPrice, lang]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setMaxPrice(500); // 2️⃣ وهنا كمان في إعادة الضبط برضه 500
  };

  // التحكم في الـ Lightbox
  const openLightbox = (index) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="menu-page">
      {/* Header */}
      <div className="menu-header-bg">
        <div className="container">
          <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {t.menuPage?.eyebrow}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {t.menuPage?.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            {t.menuPage?.desc}
          </motion.p>
        </div>
      </div>

      <div className="container">
        {/* Clean Filter Wrapper */}
        <div className="filter-wrapper">
          <div className="filter-top-row">
            {/* Search Box */}
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder={t.menuPage?.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Price Filter */}
            <div className="price-filter">
              <div className="price-label">
                <SlidersHorizontal size={15} />
                <span>{t.menuPage?.maxPrice} <strong>{maxPrice} {t.menuPage?.currency}</strong></span>
              </div>
              
              {/* 3️⃣ تعديل الـ max لـ 500 هنا في السلايدر */}
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="price-range"
              />
            </div>

            {(selectedCategory !== "all" || searchQuery !== "" || maxPrice < 500) && (
              <button className="reset-btn" onClick={resetFilters}>
                <RotateCcw size={14} />
                <span>{t.menuPage?.resetBtn}</span>
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="category-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`tab-btn ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {typeof cat === "object" ? (cat[lang] || cat.ar) : cat}
                {selectedCategory === cat.id && (
                  <motion.div layoutId="activeTab" className="active-tab-bg" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <motion.div layout className="menu-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => {
                const categoryText = typeof item.category === "object" ? (item.category[lang] || item.category.ar) : item.category;
                const nameText = typeof item.name === "object" ? (item.name[lang] || item.name.ar) : item.name;
                const descText = typeof item.description === "object" ? (item.description[lang] || item.description.ar) : item.description;

                return (
                  <motion.div
                    layout
                    key={item.id}
                    className="menu-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="card-img-wrapper" onClick={() => openLightbox(index)}>
                      <img src={item.image} alt={nameText} loading="lazy" />
                      <span className="card-category-tag">{categoryText}</span>
                      <div className="zoom-overlay">
                        <Maximize2 size={24} color="#fff" />
                      </div>
                    </div>
                    <div className="menu-card-body">
                      <div className="card-header-row">
                        <h3>{nameText}</h3>
                        <span className="price-badge">{item.price} {t.menuPage?.currency}</span>
                      </div>
                      <p>{descText}</p>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="no-results">
                <h3>{t.menuPage?.noResultsTitle}</h3>
                <p>{t.menuPage?.noResultsDesc}</p>
                <button className="btn-primary" onClick={resetFilters}>
                  {t.menuPage?.showAllBtn}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={28} />
            </button>

            <button className="lightbox-nav prev" onClick={prevImage}>
              {lang === "ar" ? <ChevronRight size={32} /> : <ChevronLeft size={32} />}
            </button>

            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                src={filteredItems[activeImageIndex].image}
                alt={typeof filteredItems[activeImageIndex].name === "object" ? filteredItems[activeImageIndex].name[lang] : filteredItems[activeImageIndex].name}
              />
              <div className="lightbox-caption">
                <h4>{typeof filteredItems[activeImageIndex].name === "object" ? filteredItems[activeImageIndex].name[lang] : filteredItems[activeImageIndex].name}</h4>
                <span>{filteredItems[activeImageIndex].price} {t.menuPage?.currency}</span>
              </div>
            </div>

            <button className="lightbox-nav next" onClick={nextImage}>
              {lang === "ar" ? <ChevronLeft size={32} /> : <ChevronRight size={32} />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Menu;