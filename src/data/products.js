import individualPack from "../assets/products/individual.png";
import familyPack from "../assets/products/family.png";
import businesspack from "../assets/products/business.png";

const products = [
  {
    id: 1,
    title: "Individual Pensaki Pack",
    subtitle: "Pensaki Pack - All-in-One Business Solution",
    features: [
      "All-in-one office study solution with Doc Writer",
      "Students assignments management",
      "Private email access",
      "Access to Bobosoho private secured email",
      "Call, voice, video, chat, and share functionality",
      "Pensaki Vault Cloud Storage for videos, documents, and photos in total security",
      "Option to request one free SaaS product of your choice:",
      "Bitss Cyber Security",
      "Pensaki.one Email Anti-Spam Manager (Ad-Free)",
      "Omada HR",
      "Omada Project Manager for R&D, assignments, or individual projects",
      "Clasico Payslips",
      "IFgaap Invoicing",
      "IFgaap GL Accounting",
    ],
    prices: {
      1: "2.00",
    },
    image: individualPack,
    link: "https://www.bobosohomail.com/email_ins/signUp_email.php",
  },
  {
    id: 2,
    title: "Family & Friends Pack",
    subtitle:
      "Share the Pensaki Pack with up to 30 family members and friends ",
    features: [
      "Includes all features from the individual pack",
      "Each member receives their own dedicated Pensaki dashboard",
      "Dashboards are private and fully equipped with product features",
      "Share the Pensaki Pack with up to 30 family members and friends",
      "Ideal for group access to premium features at a shared cost or as a gift",
    ],
    prices: {
      15: "9.50",
      30: "15.50",
    },
    image: familyPack,
    link: "https://www.bobosohomail.com/email_ins/signUp_email.php",
  },
  {
    id: 3,
    title: "Business Pensaki Pack",
    subtitle: "Unlock the Power of All-in-One SaaS Solutions for your Business",
    features: [
      "Comprehensive digital tools designed to enhance business efficiency",
      "Access to all premium SaaS products",
      "Each employee has a unique dedicated pack",
      "Includes Doc Writer, PDF Converter, Cloud Vault Storage, and email access",
      "Bobosoho integration with full features",
      "Administrator-controlled access to SaaS products",
    ],
    prices: {
      1: "6.00",
      50: "25.50",
      100: "49.50",
    },
    image: businesspack,
    link: "https://www.bobosohomail.com/email_ins/signUp_email.php",
  },
];

export default products;
