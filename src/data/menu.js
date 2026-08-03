// --- استدعاء جميع الصور من فولدر images ---
import gallery4Img from "../images/gallery4.jpeg";
import food1 from "../images/food1.png";
import food2 from "../images/food2.png";
import food3 from "../images/food3.png";
import food4 from "../images/food4.png";
import food5 from "../images/food5.png";
import food6 from "../images/food6.png";
import food7 from "../images/food7.jpeg";
import food8 from "../images/food8.jpeg";
import food9 from "../images/food9.jpeg";
import food10 from "../images/food10.jpeg";
import food11 from "../images/food11.jpeg";
import food12 from "../images/food12.jpeg";
import gallery1 from "../images/gallery1.jpeg";
import gallery3 from "../images/gallery3.jpeg";

export const CATEGORIES = [
  { id: "all", ar: "الكل", en: "All" },
  { id: "breakfast", ar: "فطار", en: "Breakfast" },
  { id: "lunch", ar: "غدا", en: "Lunch" },
  { id: "dinner", ar: "عشا", en: "Dinner" },
  { id: "dessert", ar: "حلويات", en: "Desserts" },
];

export const menuItems = [
  // ==================== الفطار (Breakfast) ====================
  {
    id: 1,
    categoryId: "breakfast",
    category: { ar: "فطار", en: "Breakfast" },
    name: { ar: "طبق أومليت بالأعشاب والجبن", en: "Herbed Cheese Omelette" },
    description: {
      ar: "بيض أومليت طازج محشو بجبنة الشيدر والأعشاب الخضراء الطازجة يقدم مع خبز التوست.",
      en: "Fresh omelette stuffed with cheddar cheese and herbs, served with toasted bread."
    },
    price: 110,
    image: gallery4Img
  },
  {
    id: 2,
    categoryId: "breakfast",
    category: { ar: "فطار", en: "Breakfast" },
    name: { ar: "بان كيك بالعسل والتوت", en: "Honey Berry Pancakes" },
    description: {
      ar: "طبقات متراصة من البان كيك الذهبي المغطى بعسل النحل الطبيعي والتوت الطازج.",
      en: "Stack of golden pancakes topped with natural honey and fresh berries."
    },
    price: 130,
    image: food7
  },
  {
    id: 3,
    categoryId: "breakfast",
    category: { ar: "فطار", en: "Breakfast" },
    name: { ar: "فرنش توست بالموز والتوت", en: "Banana Berry French Toast" },
    description: {
      ar: "شرائح خبز التوست المحمصة محشوة ومغطاة بشرائح الموز والتوت مع رشة سكر ناعم.",
      en: "Toasted French toast slices topped with fresh bananas, blueberries, and powdered sugar."
    },
    price: 140,
    image: food8
  },
  {
    id: 4,
    categoryId: "breakfast",
    category: { ar: "فطار", en: "Breakfast" },
    name: { ar: "توست الأفوكادو الصحي", en: "Healthy Avocado Toast" },
    description: {
      ar: "شرائح الأفوكادو المهروسة والمتبلة بعناية على خبز التوست المقرمش مع الأعشاب.",
      en: "Mashed seasoned avocado spread over crispy artisan toast with fresh herbs."
    },
    price: 120,
    image: food9
  },

  // ==================== الغدا (Lunch) ====================
  {
    id: 5,
    categoryId: "lunch",
    category: { ar: "غدا", en: "Lunch" },
    name: { ar: "ستيك لحم بيف مع بطاطس", en: "Grilled Ribeye Steak & Fries" },
    description: {
      ar: "قطعة ستيك مشوية بدرجة إتقان عالية تقدم مع البطاطس المقرمشة والأعشاب.",
      en: "Perfectly grilled ribeye steak served with crispy french fries and herbs."
    },
    price: 390,
    image: food3
  },
  {
    id: 6,
    categoryId: "lunch",
    category: { ar: "غدا", en: "Lunch" },
    name: { ar: "سالمون مشوي بصوص الأعشاب", en: "Grilled Salmon with Herbs" },
    description: {
      ar: "شريحة سالمون طازجة مشوية بعناية تقدم مع خضار وخلطة الصوص الخاصة.",
      en: "Freshly grilled salmon fillet served with fresh vegetables and signature sauce."
    },
    price: 370,
    image: food6
  },
  {
    id: 7,
    categoryId: "lunch",
    category: { ar: "غدا", en: "Lunch" },
    name: { ar: "ستيك مشوي مع تفاح محمص", en: "Grilled Pork Steak & Roasted Apples" },
    description: {
      ar: "قطعة لحم مشوية على الفحم يقدم مع قطع التفاح المحمصة والخضار السوتيه.",
      en: "Charbroiled steak served with roasted apple slices and sauteed greens."
    },
    price: 350,
    image: food10
  },
  {
    id: 8,
    categoryId: "lunch",
    category: { ar: "غدا", en: "Lunch" },
    name: { ar: "مشاوي مشكلة مشوية على الفحم", en: "Mix Grill Platter" },
    description: {
      ar: "تشكيلة رائعة من كباب وكفتة وشيش طاووق مع الخضار المشوي والصوصات.",
      en: "Assorted platter of grilled kebab, kofta, and shish taouk served with grilled veggies."
    },
    price: 420,
    image: gallery1
  },

  // ==================== العشا (Dinner) ====================
  {
    id: 9,
    categoryId: "dinner",
    category: { ar: "عشا", en: "Dinner" },
    name: { ar: "بيتزا مارجريتا كلاسيك", en: "Classic Margherita Pizza" },
    description: {
      ar: "بيتزا إيطالية بصلصة الطماطم الطازجة وجبنة الموزاريلا والريحان الأخضر.",
      en: "Classic Italian pizza topped with fresh tomato sauce, mozzarella, and fresh basil."
    },
    price: 170,
    image: food5
  },
  {
    id: 10,
    categoryId: "dinner",
    category: { ar: "عشا", en: "Dinner" },
    name: { ar: "بيتزا ميكس لحوم ودجاج", en: "Supreme Meat & Chicken Pizza" },
    description: {
      ar: "عجينة هشّة محشوة بشرائح السجق واللحم والدجاج مع الجبن المذاب والزيتون.",
      en: "Crispy crust pizza loaded with sausage, chicken, melted cheese, and olives."
    },
    price: 220,
    image: food11
  },
  {
    id: 11,
    categoryId: "dinner",
    category: { ar: "عشا", en: "Dinner" },
    name: { ar: "سلطة سيزر مع التوست المقرمش", en: "Crispy Caesar Salad" },
    description: {
      ar: "خس طازج مع قطع التوست المحمص والدريسنج الشهي ورشة جبن بارميزان.",
      en: "Fresh lettuce mixed with toasted croutons, creamy Caesar dressing, and parmesan."
    },
    price: 110,
    image: food1
  },
  {
    id: 12,
    categoryId: "dinner",
    category: { ar: "عشا", en: "Dinner" },
    name: { ar: "سلطة البودا الصحية المشكلة", en: "Buddha Power Bowl" },
    description: {
      ar: "مزيج غني من الأفوكادو، الحمص، الطماطم والخضار الطازج لجميع مُحبي الأكل الصحي.",
      en: "Nutritious bowl filled with avocado, chickpeas, tomatoes, and fresh greens."
    },
    price: 135,
    image: food12
  },
  {
    id: 13,
    categoryId: "dinner",
    category: { ar: "عشا", en: "Dinner" },
    name: { ar: "سلطة يونانية بالزيتون والأعشاب", en: "Greek Salad with Olives" },
    description: {
      ar: "قطع الخيار والطماطم والزيتون الأسود مع خلطة الأعشاب وزيت الزيتون الصافي.",
      en: "Traditional Greek mix with cucumbers, tomatoes, black olives, and olive oil dressing."
    },
    price: 125,
    image: gallery3
  },

  // ==================== الحلويات والمشروبات (Desserts & Drinks) ====================
  {
    id: 14,
    categoryId: "dessert",
    category: { ar: "حلويات", en: "Desserts" },
    name: { ar: "تشكيلة دوناتس ملونة", en: "Assorted Glazed Donuts" },
    description: {
      ar: "أربع قطع دوناتس هشة بنكهات الشوكولاتة، الفراولة، والفانيليا الملفتة.",
      en: "Four fluffy donuts topped with rich chocolate, strawberry, and vanilla glazes."
    },
    price: 115,
    image: food4
  },
  {
    id: 15,
    categoryId: "dessert",
    category: { ar: "حلويات", en: "Desserts" },
    name: { ar: "عصير برتقال طازج", en: "Freshly Squeezed Orange Juice" },
    description: {
      ar: "كوب من عصير البرتقال الطبيعي 100% المحضر فور الطلب للانتعاش.",
      en: "100% natural, freshly squeezed orange juice served chilled."
    },
    price: 65,
    image: food2
  }
];