import { motion } from "framer-motion";
import "./OfferCard.css";

function OfferCard({ image, title, desc, index }) {
  return (
    <motion.div
      className="offer-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8, rotate: -1 }}
    >
      <img src={image} alt={title} />
      <div className="offer-card-overlay">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
}

export default OfferCard;