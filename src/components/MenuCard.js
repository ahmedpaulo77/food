import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import "./MenuCard.css";

function MenuCard({ item, index }) {
  const { t, lang } = useLanguage();

  const name = lang === "ar" ? item.name : item.nameEn;
  const category = lang === "ar" ? item.category : item.categoryEn;
  const description = lang === "ar" ? item.description : item.descriptionEn;

  return (
    <motion.div
      className="menu-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="menu-card-image">
        <img src={item.image} alt={name} />
        <span className="menu-card-category">{category}</span>
      </div>
      <div className="menu-card-body">
        <div className="menu-card-top">
          <h3>{name}</h3>
          <span className="menu-card-price">
            {lang === "ar" ? `${item.price} ${t.menuPage.currency}` : `${t.menuPage.currency} ${item.price}`}
          </span>
        </div>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

export default MenuCard;