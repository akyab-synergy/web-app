import { SERVICE_IMAGES, SERVICES } from "@/lib/constants";
import Image from "next/image";
import Icon from "../shared/LucideIcon";

export default function Services() {
  return (
    <>
      <div
        className="bg-primary min-h-[25dvh] flex justify-around items-center"
        id="service"
      >
        {SERVICES.map((service) => (
          <div
            className="flex gap-4 font-medium justify-center items-center text-white "
            key={service.title}
          >
            <Icon name={service.icon} size={58} />
            <p className="text-xl">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="min-h-[75dvh] flex flex-col gap-10 items-center py-10 px-20">
        <h2 className="font-bold text-3xl">Our Services</h2>
        <div className="flex justify-around items-center w-full">
          {SERVICE_IMAGES.map((image: string) => (
            <div className="space-y-5 text-center" key={image}>
              <div className="border-[3px] border-transparent hover:border-primary rounded-2xl relative w-[300px] h-[300px]">
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
