import paymentIcon from "./public/assets/payment.png";
import shippingIcon from "./public/assets/cards.png";
import supportIcon from "./public/assets/cryptos.png";
import chumalinkIcon from "./public/assets/chumalink.png"; 
import visaCardIcon from "./public/assets/visaCard.png"; 

export const services = [
  {
    title: "Gift Cards",
    subtitle: "Empowering Your Digital Gifting Experience.",
    icon: shippingIcon,
  },
  {
    title: "Online Payments",
    subtitle: "100% secure online payments with T Pay.",
    icon: paymentIcon,
  },
  {
    title: "Cryptocurrency",
    subtitle: "Buy, sell and exchange crypto with us.",
    icon: supportIcon,
  },
];

export const productsTitle = "Our Products";
export const productsBtnText = "Explore";

export const products = [
  {
    title: "T Pay",
    price: "$65.99",
    img: paymentIcon,
    description: "Easily exchange currencies and make payments with T Pay. Secure and reliable services for all your financial needs.",
    link: "https://t-pay.vercel.app"
  },
  {
    title: "Trickal Holdings - Gift Cards",
    price: "$75.00",
    img: shippingIcon,
    description: "Empowering your digital gifting experience with a wide range of gift cards.",
    link: "https://trickal-holdings.vercel.app"
  },
  {
    title: "Chumalink",
    price: "$50.00",
    img: chumalinkIcon,
    description: "Receive and send money from South Africa with ease using Chumalink.",
    link: "https://example.com/chumalink"
  },
  {
    title: "Visual Visa Cards",
    price: "$30.00",
    img: visaCardIcon,
    description: "Get both whitelabeled and unwhitelabeled visual visa cards for your convenience.",
    link: "https://example.com/visa"
  },
];
