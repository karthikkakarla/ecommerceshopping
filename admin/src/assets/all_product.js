import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Gum Care Bundle",
    category: "oral",
    image: p1_img,
    new_price: 4320.0,
    old_price: 4800.0,
  },
  {
    id: 2,
    name: "Teeth Whitening Bundle",
    category: "oral",
    image: p2_img,
    new_price: 3978.0,
    old_price: 4840.5,
  },
  {
    id: 3,
    name: "Dusk Night Toothpaste",
    category: "oral",
    image: p3_img,
    new_price: 295.0,
    old_price: 400.0,
  },
  {
    id: 4,
    name: "Storm Water Flosser",
    category: "oral",
    image: p4_img,
    new_price: 2850.0,
    old_price: 3000.0,
  },
  {
    id: 5,
    name: "Manhattan Mouth Spray",
    category: "oral",
    image: p5_img,
    new_price: 1350.0,
    old_price: 1800.0,
  },
  {
    id: 6,
    name: "Hyaluronic Re-mineralizing Mouthwash",
    category: "oral",
    image: p6_img,
    new_price: 550.0,
    old_price: 800.0,
  },
  {
    id: 7,
    name: "Her (classic)",
    category: "oral",
    image: p7_img,
    new_price: 2850.0,
    old_price: 3000,
  },
  {
    id: 8,
    name: "OC150 Dental PRO Smart Water Flosser®",
    category: "oral",
    image: p8_img,
    new_price: 2499.0,
    old_price: 2800.0,
  },
  {
    id: 9,
    name: "Magna Sonic Electric Toothbrush - Cool Grey",
    category: "oral",
    image: p9_img,
    new_price: 1250.0,
    old_price: 1800.0,
  },
  {
    id: 10,
    name: "OC200 LITE Smart PLUS Water Flosser®",
    category: "oral",
    image: p10_img,
    new_price: 1899.0,
    old_price: 2000.0,
  },
  {
    id: 11,
    name: "Oil Pulling | Ayurvedic Formula| Fresh Breath | Sesame Oil | 27 Herbs",
    category: "oral",
    image: p11_img,
    new_price: 395.0,
    old_price: 500.0,
  },
  {
    id: 12,
    name: "OC150 LITE Smart Water Flosser®",
    category: "oral",
    image: p12_img,
    new_price: 1599.0,
    old_price: 2650.0,
  },
  {
    id: 13,
    name: "Hair Care Combo",
    category: "hair",
    image: p13_img,
    new_price: 1299.0,
    old_price: 1880.0,
  },
  {
    id: 14,
    name: "Hair Growth Oil",
    category: "hair",
    image: p14_img,
    new_price: 600.0,
    old_price: 850.0,
  },
  {
    id: 15,
    name: "Elixir Ultime L'Huile Originale Serum",
    category: "hair",
    image: p15_img,
    new_price: 3100.0,
    old_price: 4000.0,
  },
  {
    id: 16,
    name: "Xtreme Hair Growth Combo",
    category: "hair",
    image: p16_img,
    new_price: 799.0,
    old_price: 1148.0,
  },
  {
    id: 17,
    name: "Densifique Bain Densité Shampoo",
    category: "hair",
    image: p17_img,
    new_price: 2650.0,
    old_price: 3000.0,
  },
  {
    id: 18,
    name: "Anti-Dandruff Mask",
    category: "hair",
    image: p18_img,
    new_price: 900.0,
    old_price: 1200.0,
  },
  {
    id: 19,
    name: "Revive & Restore Hair Growth Duo",
    category: "hair",
    image: p19_img,
    new_price: 2499.0,
    old_price: 2800.0,
  },
  {
    id: 20,
    name: "ROSEMARY WITH BIOTIN HAIR CARE KIT - 3 STEP SOLUTION FOR HAIR FALL",
    category: "hair",
    image: p20_img,
    new_price: 989.0,
    old_price: 1347.0,
  },
  {
    id: 21,
    name: "Genesis Anti-Hair Fall Serum",
    category: "hair",
    image: p21_img,
    new_price: 4800.0,
    old_price: 4800.0,
  },
  {
    id: 22,
    name: "HAIR GROWTH SERUM",
    category: "hair",
    image: p22_img,
    new_price: 699.0,
    old_price: 799.5,
  },
  {
    id: 23,
    name: "Streax Professional Vitariche Gloss Hair Serum",
    category: "hair",
    image: p23_img,
    new_price: 250.0,
    old_price: 320.0,
  },
  {
    id: 24,
    name: "Finasteride Enriched Minoxidil Solution",
    category: "hair",
    image: p24_img,
    new_price: 699.0,
    old_price: 800.0,
  },
  {
    id: 25,
    name: "Find Comfort Hydrating Body Lotion",
    category: "body",
    image: p25_img,
    new_price: 3500.0,
    old_price: 3500.0,
  },
  {
    id: 26,
    name: "Skin Combo",
    category: "body",
    image: p26_img,
    new_price: 2694.0,
    old_price: 4200.0,
  },
  {
    id: 27,
    name: "Exfoliating Body Granita Scrub",
    category: "body",
    image: p27_img,
    new_price: 1200.0,
    old_price: 1200.0,
  },
  {
    id: 28,
    name: "Salicylic Acid Body Wash for Women",
    category: "body",
    image: p28_img,
    new_price: 349.0,
    old_price: 450.0,
  },
  {
    id: 29,
    name: "Revitalizing Body Wash",
    category: "body",
    image: p29_img,
    new_price: 1044.0,
    old_price: 1099.0,
  },
  {
    id: 30,
    name: "LOVE STORY BUBBLE BATH & BATH SALT BATH CARE DUO",
    category: "body",
    image: p30_img,
    new_price: 1379.0,
    old_price: 1494.0,
  },
  {
    id: 31,
    name: "The Super-Glaze Skin Duo",
    category: "body",
    image: p31_img,
    new_price: 1444.0,
    old_price: 1444.0,
  },
  {
    id: 32,
    name: "Brighten Body Care Kit",
    category: "body",
    image: p32_img,
    new_price: 2000.0,
    old_price: 2870.0,
  },
  {
    id: 33,
    name: "Plum Bodylovin' Vanilla Vibes Body Polishing Trio",
    category: "body",
    image: p33_img,
    new_price: 1110.0,
    old_price: 1480.0,
  },
  {
    id: 34,
    name: "The Body Care Mixed Fruit Cream - 100 gm",
    category: "body",
    image: p34_img,
    new_price: 119.0,
    old_price: 180.5,
  },
  {
    id: 35,
    name: "BBO Zest Cool Mint Body Wash for Body Acne with Tea Tree & Peppermint ",
    category: "body",
    image: p35_img,
    new_price: 599.0,
    old_price: 799.0,
  },
  {
    id: 36,
    name: "Super Shea Body Yogurt",
    category: "body",
    image: p36_img,
    new_price: 700.0,
    old_price: 700.0,
  },
];

export default all_product;
