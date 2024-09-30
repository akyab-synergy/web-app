import { SERVICE_IMAGES, SERVICES } from "@/lib/constants";
import Image from "next/image";
import Icon from "../shared/LucideIcon";

export default function Services() {
  return (
    <>
      <div
        className="bg-primary min-h-[25dvh] flex flex-wrap justify-center px-2 lg:px-0 lg:justify-around items-center gap-3 py-6 lg:py-0"
        id="service"
      >
        {SERVICES.map((service) => (
          <div
            className="flex gap-4 w-full lg:w-auto font-medium justify-center items-center text-white "
            key={service.title}
          >
            <Icon className="hidden lg:block" name={service.icon} size={58} />
            <Icon className="lg:hidden" name={service.icon} size={28} />

            <p className="lg:text-xl">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="min-h-[75dvh] flex flex-col gap-10 items-center py-10 lg:px-20">
        <h2 className="font-bold text-3xl">Our Services</h2>
        <div className="flex flex-wrap justify-around items-center w-full space-y-6">
          {SERVICE_IMAGES.map((image: string) => (
            <div className="space-y-2 lg:space-y-5 text-center" key={image}>
              <div className="border-[3px] border-transparent hover:border-primary rounded-2xl relative w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]">
                <Image src={image} alt="hello" fill />
              </div>
              <h3 className="font-semibold text-xl">Lorem Ipsum</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
