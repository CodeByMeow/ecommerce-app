import storeService from "../services/storeService";

export const products = [
  {
    id: 1,
    category: "apple",
    title: "iPhone 14 Pro Max 128GB",
    shortDesc:
      " The iPhone 14 Pro is the best phone for under $1,000. It's powerful, has amazing cameras, sports a beautiful display, and the notch is dead.",
    fullDesc:
      "The iPhone 14 looks identical to the iPhone 13, but there's a new 6.7-inch model called the iPhone 14 Plus. Under-the-hood improvements include 6GB of RAM, a 5-core GPU, Bluetooth 5.3, and multiple camera updates. Color options have been updated with (PRODUCT)RED, blue, purple, midnight, and starlight.",
    stock: {
      quantity: 5,
      remain: 2,
    },
    color: "Gold",
    slug: "/iPhone14-Pro-Max-128gb",
    price: 33990000,
    sale_price: 32450000,
    total_selling: "",
    image_url: "/assets/apple/iPhone-14-Pro-max-vang-650x650-1-300x300.png",
    gallery_image: "",
  },
  {
    id: 2,
    category: "apple",
    title: "iPhone 14 Plus 128GB",
    shortDesc:
      "The new 6.7-inch iPhone 14 is called the 'iPhone 14 Plus,' harkening back to the iPhone 8 and 8 Plus and prior generations.",
    fullDesc:
      "The iPhone 14 looks identical to the iPhone 13, but there's a new 6.7-inch model called the iPhone 14 Plus. Under-the-hood improvements include 6GB of RAM, a 5-core GPU, Bluetooth 5.3, and multiple camera updates. Color options have been updated with (PRODUCT)RED, blue, purple, midnight, and starlight.",
    stock: {
      quantity: 4,
      remain: 4,
    },
    color: "Midnight",
    slug: "/iPhone14-plus-128gb",
    price: 24950000,
    sale_price: 21250000,
    total_selling: "",
    image_url: "/assets/apple/iPhone-14-plus-midnight-650x650.png",
    gallery_image: "",
  },
  {
    id: 3,
    category: "apple",
    title: "iPhone 13 Pro Max 128GB",
    shortDesc:
      "The iPhone 13 Pro and iPhone 13 Pro Max are smartphones designed, developed, and marketed by Apple Inc",
    fullDesc:
      "The iPhone 13 Pro Max is Apple's biggest phone in the lineup with a massive, 6.7\" screen that for the first time in an iPhone comes with 120Hz ProMotion display that ensures super smooth scrolling. The benefit of such a gigantic phone is that it also comes with the biggest battery of all iPhone 13 series. The iPhone 13 has a 6.1-inch screen, and the iPhone 13 mini has a 5.4-inch screen. They both use Apple's Ceramic Shield cover glass, which adds improved drop protection.",
    stock: {
      quantity: 10,
      remain: 10,
    },
    color: "Sierra Blue",
    slug: "/iPhone13-Pro-Max-128gb",
    price: 33990000,
    sale_price: 26990000,
    total_selling: "",
    image_url: "/assets/apple/iphone-13-pro-blue-select_1_3.png",
    gallery_image: "",
  },
  {
    id: 4,
    category: "samsung",
    title: "Samsung Galaxy Z Flip4",
    shortDesc:
      "Quite expectedly, Samsung announced the fourquels of the Fold and Flip, the first being more like a foldable tablet, while the Flip - a nostalgia-sprinkled flip phone.",
    fullDesc:
      "The new Z Flip4 won't make many (if any) Z Flip3 owners upgrade, it improves enough bits to make even more people think of getting this new foldable flagship. Samsung has improved on the Galaxy Z Flip3 by tweaking all weak points both reviewers and users have agreed upon - low-light camera performance, battery life, charging speed. And, of course, the new Z Flip4 gets to boast the most current Android chip - the Snapdragon 8+ Gen 1.",
    stock: {
      quantity: 10,
      remain: 10,
    },
    color: "Purple",
    slug: "/samsung-galaxyZ-flip4",
    price: 19990000,
    sale_price: 15790000,
    total_selling: "",
    image_url: "/assets/samsung/samsung-galaxy-z-flip-4.jpeg",
    gallery_image: "",
  },
  {
    id: 5,
    category: "samsung",
    title: "Samsung Galaxy Z Fold 4 512GB",
    shortDesc:
      "A wider aspect ratio lets your apps comfortably fill the screen, but still keeps keys within thumb’s reach for one-handed control.",
    fullDesc:
      "Does a lot in one hand with its 6.2-inch Cover Screen. In both hands, the 7.6-inch Main Screen makes it your ultimate do-more device. And when you need to go hands-free, simply set it down, find a good angle and leave it there while you get more done. It's basically two phones in one — with nearly the weight of a less-flexible phone. Slimmed down everywhere but the screen, minimized bezels and lightweight materials make Galaxy Z Fold4 even more pocket-friendly.",
    stock: {
      quantity: 10,
      remain: 10,
    },
    color: "Burgundy",
    slug: "/samsung-galaxyZ-fold4-512gb",
    price: 31990000,
    sale_price: 28490000,
    total_selling: "",
    image_url:
      "/assets/samsung/samsung_galaxy_fold_4__burgund_1661251560_35b61201.jpeg",
    gallery_image: "",
  },
  {
    id: 6,
    category: "apple",
    title: "iPhone 14 Pro Max 128GB",
    shortDesc:
      " The iPhone 14 Pro is the best phone for under $1,000. It's powerful, has amazing cameras, sports a beautiful display, and the notch is dead.",
    fullDesc:
      "The iPhone 14 looks identical to the iPhone 13, but there's a new 6.7-inch model called the iPhone 14 Plus. Under-the-hood improvements include 6GB of RAM, a 5-core GPU, Bluetooth 5.3, and multiple camera updates. Color options have been updated with (PRODUCT)RED, blue, purple, midnight, and starlight.",
    stock: {
      quantity: 5,
      remain: 5,
    },
    color: "Gold",
    slug: "/iPhone14-Pro-Max-128gb",
    price: 33990000,
    sale_price: 32450000,
    total_selling: "",
    image_url: "/assets/apple/iPhone-14-Pro-max-vang-650x650-1-300x300.png",
    gallery_image: "",
  },
  {
    id: 7,
    category: "apple",
    title: "iPhone 14 Plus 128GB",
    shortDesc:
      "The new 6.7-inch iPhone 14 is called the 'iPhone 14 Plus,' harkening back to the iPhone 8 and 8 Plus and prior generations.",
    fullDesc:
      "The iPhone 14 looks identical to the iPhone 13, but there's a new 6.7-inch model called the iPhone 14 Plus. Under-the-hood improvements include 6GB of RAM, a 5-core GPU, Bluetooth 5.3, and multiple camera updates. Color options have been updated with (PRODUCT)RED, blue, purple, midnight, and starlight.",
    stock: {
      quantity: 4,
      remain: 4,
    },
    color: "Midnight",
    slug: "/iPhone14-plus-128gb",
    price: 24950000,
    sale_price: 21250000,
    total_selling: "",
    image_url: "/assets/apple/iPhone-14-plus-midnight-650x650.png",
    gallery_image: "",
  },
  {
    id: 8,
    category: "samsung",
    title: "Samsung Galaxy Z Flip4",
    shortDesc:
      "Quite expectedly, Samsung announced the fourquels of the Fold and Flip, the first being more like a foldable tablet, while the Flip - a nostalgia-sprinkled flip phone.",
    fullDesc:
      "The new Z Flip4 won't make many (if any) Z Flip3 owners upgrade, it improves enough bits to make even more people think of getting this new foldable flagship. Samsung has improved on the Galaxy Z Flip3 by tweaking all weak points both reviewers and users have agreed upon - low-light camera performance, battery life, charging speed. And, of course, the new Z Flip4 gets to boast the most current Android chip - the Snapdragon 8+ Gen 1.",
    stock: {
      quantity: 10,
      remain: 10,
    },
    color: "Purple",
    slug: "/samsung-galaxyZ-flip4",
    price: 19990000,
    sale_price: 15790000,
    total_selling: "",
    image_url: "/assets/samsung/samsung-galaxy-z-flip-4.jpeg",
    gallery_image: "",
  },
];

export const order = {
  userId: {
    ref: "user",
  },
  products: [],
  status: "Processing",
};

export const users = [
  {
    fullname: "Ngoc Le",
    username: "shane",
    email: "ngoc.le@gmail.com",
    password: "ngoc123",
    role: "user",
    address: "123 Pham Ngu Lao District 1, TPHCM",
    orders: [],
    createdDate: Date.now() /* return miliseconds */,
    // createdDate: storeService.convertToCurrentTime(Date.now()),
    modifiedDate: storeService.convertToCurrentTime(Date.now()),
    isDeleted: null,
    isActive: null,
  },
];
