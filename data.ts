import { CreditCard, Gift, Banknote, CreditCardIcon as VisaCard, BarChart } from 'lucide-react'

export const services = [
  {
    title: "Gift Cards",
    subtitle: "Empowering Your Digital Gifting Experience.",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "Online Payments",
    subtitle: "100% secure online payments with T Pay.",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "Cryptocurrency",
    subtitle: "Buy, sell and exchange crypto with us.",
    icon: "/placeholder.svg?height=40&width=40",
  },
];

export const productsTitle = "Our Products";
export const productsBtnText = "Explore";

export const products = [
  {
    title: "T Pay",
    img: "/placeholder.svg?height=300&width=400",
    icon: CreditCard,
    description: "Easily exchange currencies and make payments with T Pay. Secure and reliable services for all your financial needs.",
    link: "https://t-pay.vercel.app",
    category: "payment"
  },
  {
    title: "tconnect",
    img: "/placeholder.svg?height=300&width=400",
    icon: Gift,
    description: "Empowering your digital gifting experience with a wide range of gift cards.",
    link: "https://tconnect.store",
    category: "finance"
  },
  {
    title: "Chumalink",
    img: "/placeholder.svg?height=300&width=400",
    icon: Banknote,
    description: "Receive and send money from South Africa with ease using Chumalink.",
    link: "https://example.com/chumalink",
    category: "payment"
  },
  {
    title: "Visual Visa Cards",
    img: "/placeholder.svg?height=300&width=400",
    icon: VisaCard,
    description: "Get both whitelabeled and unwhitelabeled visual visa cards for your convenience.",
    link: "https://example.com/visa",
    category: "finance"
  },
  {
    title: "Ledger IQ",
    img: "/placeholder.svg?height=300&width=400",
    icon: BarChart,
    description: "Advanced financial management and analytics tool for businesses.",
    link: "https://example.com/ledgeriq",
    category: "finance"
  },
];

