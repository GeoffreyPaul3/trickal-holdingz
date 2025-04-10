import {
  CreditCard,
  Gift,
  Banknote,
  CreditCardIcon as VisaCard,
  BarChart,
  Code,
  Bot,
  FileSpreadsheet,
} from "lucide-react";

import { Mail, Phone, MapPin, type LucideIcon } from "lucide-react";

type LinkWithoutIcon = {
  name: string;
  href: string;
};

type LinkWithIcon = LinkWithoutIcon & {
  icon: LucideIcon;
};

type Link = LinkWithoutIcon | LinkWithIcon;

type Section = {
  title: string;
  links: Link[];
};

export const services = [
  {
    title: "Gift Cards",
    subtitle: "Empowering Your Digital Gifting Experience.",
    icon: Gift,
  },
  {
    title: "Online Payments",
    subtitle: "100% secure online payments with T Pay.",
    icon: CreditCard,
  },
  {
    title: "Cryptocurrency",
    subtitle: "Buy, sell and exchange crypto with us.",
    icon: Banknote,
  },
  {
    title: "Web & Mobile Application Development",
    subtitle: "Custom solutions for web and mobile platforms.",
    icon: Code, // Lucide icon for development
  },
  {
    title: "AI Agents & Automations",
    subtitle: "Intelligent automation and AI-driven workflows.",
    icon: Bot, // Lucide icon for AI
  },
  {
    title: "Forex Trading",
    subtitle: "Trade currencies with competitive rates and expert insights.",
    icon: Banknote,
  },
  {
    title: "Digital Marketing",
    subtitle: "Data-driven strategies to boost your online presence.",
    icon: BarChart, // Lucide icon for marketing
  },
  {
    title: "Accounting & Bookkeeping",
    subtitle:
      "Customer invoicing, Excel templates, QuickBooks, and Sage integration.",
    icon: FileSpreadsheet, // Lucide icon for spreadsheets
  },
];

export const productsTitle = "Our Products";
export const productsBtnText = "Explore";

export const products = [
  {
    title: "T Pay",
    img: "/placeholder.svg?height=300&width=400",
    icon: CreditCard,
    description:
      "Easily exchange currencies and make payments with TPay. Secure and reliable services for all your financial needs.",
    link: "https://t-pay.vercel.app",
    category: "payment",
  },
  {
    title: "tconnect",
    img: "/placeholder.svg?height=300&width=400",
    icon: Gift,
    description:
      "Empowering your digital gifting experience with a wide range of gift cards.",
    link: "https://tconnect.store",
    category: "finance",
  },
  {
    title: "TFx Edu",
    img: "/placeholder.svg?height=300&width=400",
    icon: BarChart,
    description:
      "Transform your trading skills with our expert-led courses. Learn proven strategies, advanced technical analysis, and risk management techniques used by professional traders.",
    link: "https://forex-learn-scape.vercel.app",
    category: "education",
  },
  {
    title: "Chumalink",
    img: "/placeholder.svg?height=300&width=400",
    icon: Banknote,
    description:
      "Receive and send money from South Africa with ease using Chumalink.",
    link: "https://example.com/chumalink",
    category: "payment",
  },
  {
    title: "Virtual Visa Cards",
    img: "/placeholder.svg?height=300&width=400",
    icon: VisaCard,
    description:
      "Get both whitelabeled and unwhitelabeled visual visa cards for your convenience.",
    link: "https://example.com/visa",
    category: "finance",
  },
  {
    title: "Ledger IQ",
    img: "/placeholder.svg?height=300&width=400",
    icon: BarChart,
    description:
      "Advanced financial management and analytics tool for businesses.",
    link: "https://example.com/ledgeriq",
    category: "finance",
  },
];

export const companyLinks: Section[] = [
  {
    title: "Solutions",
    links: [
      { name: "T Pay", href: "https://t-pay.vercel.app" },
      { name: "tconnect", href: "https://tconnect.store" },
      { name: "Chumalink", href: "https://example.com/chumalink" },
      { name: "Visual Visa Cards", href: "https://example.com/visa" },
      { name: "Ledger IQ", href: "https://example.com/ledgeriq" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "/careers" },
      { name: "Partners", href: "#partners" },
      { name: "News", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Live Chat", href: "#" },
      { name: "Report an Issue", href: "#" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        name: "info@trickalholdings.com",
        href: "mailto:info@trickalholdings.com",
        icon: Mail,
      },
      { name: "+265 997 40 75 98", href: "tel:+265997407598", icon: Phone },
      {
        name: "Development House, Blantyre, Third Floor, Office 307",
        href: "#",
        icon: MapPin,
      },
    ],
  },
];
