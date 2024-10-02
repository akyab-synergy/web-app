import Image from "next/image";
import Icon from "../shared/LucideIcon";
import { ABOUT_US } from "@/lib/constants";
import MissionVision from "./MissionVision";
import React from "react";

export default function AboutUs() {
  return (
    <>
      {/* Who We Are */}
      <section
        className="min-h-[100dvh] py-10 px-6 lg:p-20 space-y-6"
        id="about"
      >
        <h2 className="text-center lg:text-left text-3xl lg:text-5xl font-bold">
          Who We Are
        </h2>
        <div className="flex flex-wrap-reverse lg:flex-nowrap justify-between">
          <div className="lg:w-4/6 space-y-6">
            <p className="text-lg">
              Founded in 2024, Akyab Synergy Company started with a simple goal:
              to bridge the gap between convenience and reliability in the
              travel and logistics industries. What began has a small startup
              has grown into a comprehensive service provide, trusted by
              countless customers for our commitment to excellence and
              innovation.
            </p>
            {ABOUT_US.map((item) => (
              <a
                href={item.href}
                key={item.href}
                className="cursor-pointer h-16 lg:h-20 text-xl lg:text-2xl text-nowrap font-bold lg:w-[600px] text-white rounded-full grid grid-cols-3 place-items-center bg-[#bd4b4c] hover:bg-primary px-8"
              >
                <span></span>
                <span>{item.title}</span>
                <span className="justify-self-end hidden lg:block">
                  <Icon name="milestone" size={32} />
                </span>
                <span className="justify-self-end lg:hidden">
                  <Icon name="milestone" size={24} />
                </span>
              </a>
            ))}
          </div>
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
            <Image
              src={"/delivery.svg"}
              alt="hi"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>
      {/* Mission & Value */}
      <MissionVision />

      {/* Our Team */}
      <section className="px-6 pt-16 lg:p-16 relative" id="team">
        <h2 className="text-5xl font-bold text-center mb-10 lg:mb-16">
          Our Team
        </h2>
        <div className="flex flex-wrap gap-8 w-full justify-around">
          <div className="relative w-[350px] h-[400px] bg-red-600">
            <Image
              src={"/delivery.svg"}
              alt="immage"
              fill
              style={{ objectFit: "cover" }}
            />
            <p className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black py-2 text-white w-5/6 text-center mx-auto">
              <span className="font-bold text-xl text-red-600 block">
                Myo Thant
              </span>
              <span className="text-zinc-300">Founder</span>
            </p>
          </div>
          <div className="relative w-[350px] h-[400px] bg-red-600">
            <Image
              src={"/delivery.svg"}
              alt="immage"
              fill
              style={{ objectFit: "cover" }}
            />
            <p className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black py-2 text-white w-5/6 text-center mx-auto">
              <span className="font-bold text-xl text-red-600 block">
                Myo Thant
              </span>
              <span className="text-zinc-300">Founder</span>
            </p>
          </div>{" "}
          <div className="relative w-[350px] h-[400px] bg-red-600">
            <Image
              src={"/delivery.svg"}
              alt="immage"
              fill
              style={{ objectFit: "cover" }}
            />
            <p className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black py-2 text-white w-5/6 text-center mx-auto">
              <span className="font-bold text-xl text-red-600 block">
                Myo Thant
              </span>
              <span className="text-zinc-300">Founder</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
