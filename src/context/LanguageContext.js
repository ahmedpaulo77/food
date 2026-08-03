import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      menu: "المنيو",
      gallery: "الجاليري",
      about: "من نحن",
      contact: "تواصل معنا",
      cta: "اطلب الآن",
      langBtn: "EN",
    },
    hero: {
      badge: "🌿 طعم طازج كل يوم",
      title: "استمتع بأشهى الأطباق في Bloom Kitchen",
      desc: "مكونات طازجة، طهاة محترفون، وأطباق تُحضّر بشغف من قلب المطبخ لطاولتك مباشرة.",
      btnMenu: "تصفح المنيو",
      btnBook: "احجز طاولة",
    },
    categories: {
      all: "الكل",
      breakfast: "فطار",
      lunch: "غدا",
      dinner: "عشا",
      dessert: "حلويات",
    },
    offers: {
      eyebrow: "عروض اليوم",
      title: "لا تفوّت عروضنا المميزة",
      desc: "تشكيلة مختارة بعناية بأسعار خاصة لفترة محدودة",
      o1Title: "مكرونة إيطالي بالجبنة",
      o1Desc: "خصم 20% اليوم فقط",
      o2Title: "سلطة معكرونة صحية",
      o2Desc: "طبق جديد في المنيو",
      o3Title: "سباجيتي بالجبنة الطازجة",
      o3Desc: "الأكثر طلبًا هذا الأسبوع",
    },
    featured: {
      eyebrow: "الأكثر طلبًا",
      title: "أشهر أطباقنا",
      desc: "مجموعة مختارة من أفضل الأطباق التي يعشقها زوارنا",
      viewAll: "شاهد المنيو كامل",
    },
    menuPage: {
      eyebrow: "قائمة الطعام",
      title: "استكشف أشهى الأطباق",
      desc: "اختر من بين تشكيلة واسعة تم إعدادها بكل حب وطازج يومياً",
      searchPlaceholder: "ابحث عن أكلتك المفضلة...",
      maxPrice: "الحد الأقصى للسعر:",
      resetBtn: "إعادة ضبط",
      noResultsTitle: "لا توجد نتائج تطابق بحثك! 🍽️",
      noResultsDesc: "جرب البحث بكلمات أخرى أو قم بتغيير الفلاتر المختارة.",
      showAllBtn: "عرض كل القائمة",
      currency: "ج.م",
    },
    galleryPage: {
      eyebrow: "جاليري",
      title: "لحظات من مطبخنا",
      desc: "نظرة على أطباقنا وأجواء المطعم",
    },
    aboutPage: {
      eyebrow: "قصتنا",
      title: "من قلب المطبخ.. لطاولتك",
      p1: "بدأت Bloom Kitchen بفكرة بسيطة: تقديم أطباق طازجة بمكونات حقيقية، بعيدًا عن الأكل الجاهز والمعلبات. كل طبق عندنا بيتحضر يوميًا بعناية، من الفطار البسيط لعشاء العائلة الدافئ.",
      p2: "فريقنا من الطهاة بيحب اللي بيعمله، وده بيبان في كل تفصيلة — من اختيار المكونات لحد طريقة التقديم.",
      val1Title: "مكونات طازجة",
      val1Desc: "نختار كل مكون يوميًا بعناية فائقة",
      val2Title: "طهاة محترفون",
      val2Desc: "خبرة سنوات في تحضير أشهى الأطباق",
      val3Title: "خدمة سريعة",
      val3Desc: "نحترم وقتك ونقدم طلبك بسرعة وجودة",
    },
    contactPage: {
      eyebrow: "تواصل معنا",
      title: "احجز طاولتك الآن",
      desc: "فريقنا في انتظارك للرد على أي استفسار",
      callUs: "اتصل بنا",
      emailUs: "راسلنا",
      location: "موقعنا",
      locationVal: "القاهرة، التجمع الخامس، مصر",
      hours: "مواعيد العمل",
      hoursVal: "يوميًا من 10 صباحًا حتى 1 بعد منتصف الليل",
      namePlaceholder: "الاسم بالكامل",
      phonePlaceholder: "رقم الهاتف",
      detailsPlaceholder: "عدد الأفراد / التاريخ المطلوب",
      notesPlaceholder: "أي ملاحظات إضافية...",
      submitBtn: "إرسال الحجز",
      successMsg: "✅ تم إرسال طلبك بنجاح! سنتواصل معك قريبًا.",
    },
    footer: {
      desc: "نقدم لك أشهى الأطباق الطازجة يوميًا، من الفطار للعشا، بمكونات مختارة بعناية وطعم لا يُنسى.",
      quickLinks: "روابط سريعة",
      contactUs: "تواصل معنا",
      rights: "© جميع الحقوق محفوظة",
    },
  },

  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      gallery: "Gallery",
      about: "About Us",
      contact: "Contact",
      cta: "Order Now",
      langBtn: "AR",
    },
    hero: {
      badge: "🌿 Fresh Taste Every Day",
      title: "Enjoy the Finest Dishes at Bloom Kitchen",
      desc: "Fresh ingredients, professional chefs, and dishes prepared with passion straight from our kitchen to your table.",
      btnMenu: "Browse Menu",
      btnBook: "Book a Table",
    },
    categories: {
      all: "All",
      breakfast: "Breakfast",
      lunch: "Lunch",
      dinner: "Dinner",
      dessert: "Desserts",
    },
    offers: {
      eyebrow: "Today's Offers",
      title: "Don't Miss Our Special Deals",
      desc: "A carefully curated selection at special prices for a limited time",
      o1Title: "Italian Cheese Pasta",
      o1Desc: "20% off today only",
      o2Title: "Healthy Pasta Salad",
      o2Desc: "New on the menu",
      o3Title: "Fresh Cheese Spaghetti",
      o3Desc: "Most ordered this week",
    },
    featured: {
      eyebrow: "Most Popular",
      title: "Our Signature Dishes",
      desc: "A curated selection of the best dishes our guests love",
      viewAll: "View Full Menu",
    },
    menuPage: {
      eyebrow: "Our Menu",
      title: "Explore Tasty Dishes",
      desc: "Choose from a wide variety prepared with love and fresh daily ingredients",
      searchPlaceholder: "Search for your favorite dish...",
      maxPrice: "Max Price:",
      resetBtn: "Reset Filters",
      noResultsTitle: "No dishes match your search! 🍽️",
      noResultsDesc: "Try searching with different keywords or adjust your filters.",
      showAllBtn: "Show All Menu",
      currency: "EGP",
    },
    galleryPage: {
      eyebrow: "Gallery",
      title: "Moments from Our Kitchen",
      desc: "A glimpse of our dishes and restaurant atmosphere",
    },
    aboutPage: {
      eyebrow: "Our Story",
      title: "From Our Kitchen.. To Your Table",
      p1: "Bloom Kitchen started with a simple idea: serving fresh dishes with real ingredients, away from processed and canned food. Every dish here is prepared daily with care, from a simple breakfast to a warm family dinner.",
      p2: "Our team of chefs love what they do, and it shows in every detail — from ingredient selection to the way each dish is presented.",
      val1Title: "Fresh Ingredients",
      val1Desc: "We select every ingredient daily with great care",
      val2Title: "Professional Chefs",
      val2Desc: "Years of experience preparing the finest dishes",
      val3Title: "Fast Service",
      val3Desc: "We respect your time and deliver your order quickly and well",
    },
    contactPage: {
      eyebrow: "Contact Us",
      title: "Book Your Table Now",
      desc: "Our team is waiting to answer any questions",
      callUs: "Call Us",
      emailUs: "Email Us",
      location: "Our Location",
      locationVal: "Fifth Settlement, Cairo, Egypt",
      hours: "Working Hours",
      hoursVal: "Daily from 10 AM to 1 AM",
      namePlaceholder: "Full Name",
      phonePlaceholder: "Phone Number",
      detailsPlaceholder: "Number of Guests / Requested Date",
      notesPlaceholder: "Any additional notes...",
      submitBtn: "Send Reservation",
      successMsg: "✅ Your request has been sent! We'll contact you soon.",
    },
    footer: {
      desc: "We serve the finest fresh dishes daily, from breakfast to dinner, with carefully selected ingredients and unforgettable taste.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      rights: "© All Rights Reserved",
    },
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ar");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}