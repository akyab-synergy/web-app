import dynamicIconImports from "lucide-react/dynamicIconImports";
import { title } from "process";

type contactInfoType = {
  title: string;
  icon: keyof typeof dynamicIconImports;
  content: string;
  href?: string;
};

// contact form information
export const CONTACT_INFO: contactInfoType[] = [
  {
    title: "Email",
    icon: "mail",
    content: "akyabexpress@gmail.com",
    href: "mailto:akyabexpress@gmail.com",
  },
  {
    title: "Phone",
    icon: "phone",
    content: "09422755012",
    href: "tel:09422755012",
  },
  {
    title: "Office Location",
    icon: "map-pin",
    content: "No.37B, Tha Mein Ba Yan Street, Tarmwe, Yangon, Myanmar.",
    href: "https://maps.app.goo.gl/w6dUmS4vEJugVuLEA",
  },
];

export const SERVICES_2: { title: string; image: string }[] = [
  {
    title: "Delivery Service",
    image:
      "https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Flight Ticket Sale",
    image:
      "https://images.unsplash.com/photo-1567748534085-467f8a8a475d?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Warehousing",
    image:
      "https://plus.unsplash.com/premium_photo-1661302828763-4ec9b91d9ce3?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

type serviceType = {
  title: string;
  description: string;
  icon: keyof typeof dynamicIconImports;
};

export const SERVICES: serviceType[] = [
  {
    title: "Service 1",
    description: "Super Fast Delivery",
    icon: "truck",
  },
  {
    title: "Service 2",
    description: "Excellent Customer Service",
    icon: "users-round",
  },
  {
    title: "Service 3",
    description: "Domestic Flight Ticket",
    icon: "tickets-plane",
  },
];

export const ABOUT_US = [
  {
    title: "Our Mission",
    href: "#mission",
  },
  {
    title: "Our Value",
    href: "#value",
  },
  {
    title: "Our Team",
    href: "#team",
  },
];
