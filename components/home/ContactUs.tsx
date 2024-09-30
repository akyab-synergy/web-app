import ContactForm from "./ContactForm";
import { CONTACT_INFO } from "@/lib/constants";
import Icon from "../shared/LucideIcon";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="flex flex-wrap lg:flex-nowrap justify-between items-center px-6 py-12 lg:pt-0 lg:px-24 gap-16 lg:gap-6 min-h-[100dvh] bg-world-map bg-no-repeat bg-center bg-opacity-5"
    >
      <div className="space-y-8 w-full lg:pl-[5%]">
        <ContactForm />
      </div>
      <div className="w-full flex flex-col gap-12">
        {CONTACT_INFO.map((info) => {
          return (
            <div className="flex gap-3" key={info.title}>
              <a
                href={info.href}
                className="min-w-16 h-16 lg:h-[84px] lg:min-w-[84px] bg-primary hover:scale-110 transition-transform duration-300 grid place-items-center"
              >
                <Icon name={info.icon} color="#bf2425" size="48" fill="white" />
              </a>
              <div className="space-y-2 p-2 text-sm lg:text-base">
                <p>{info.title}</p>
                <p>{info.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
