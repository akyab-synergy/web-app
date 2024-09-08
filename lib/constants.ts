import dynamicIconImports from "lucide-react/dynamicIconImports";

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

export const SERVICE_IMAGES: string[] = [
  "/delivery.svg",
  "/delivery.svg",
  "/delivery.svg",
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
    href: "#mission",
  },
  {
    title: "Our Team",
    href: "#team",
  },
];
