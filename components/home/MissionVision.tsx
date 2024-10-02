"use client";
import { useInView } from "@/lib/hooks";
import { useRef } from "react";
import Image from "next/image";

export default function MissionVision() {
  const missionDiv = useRef<HTMLDivElement>(null);
  const valueDiv = useRef<HTMLDivElement>(null);

  const missionDivIsInView = useInView(missionDiv);
  const valueDivIsInView = useInView(valueDiv);
  return (
    <section className="min-h-[1000px] lg:min-h-[100dvh] px-6 py-12 lg:p-16 relative overflow-x-hidden">
      <h2 className="text-2xl lg:text-4xl font-bold">
        Our Mission And Value Statement
      </h2>
      <div
        id="mission"
        ref={missionDiv}
        className={`scroll-m-32 hover:scale-110 bg-primary absolute top-[15%] lg:top-[25%] left-0 w-[340px] lg:w-[500px] rounded-r-full p-8 lg:p-10 text-white space-y-4 transition-transform duration-700 ease-in-out ${
          missionDivIsInView
            ? "transform translate-x-0"
            : "transform translate-x-[-200px]"
        }`}
      >
        <h4 className="font-semibold">
          To Simplify Your Journey and Deliver with Precision
        </h4>
        <div className="flex gap-4 items-start justify-center">
          <p className="text-sm">
            We aim to make every travel and delivery experience smooth and
            worry-free. Our dedicated team works tiredlessly to ensure that you
            get the best deals on flights and your packages reach their
            destination safely and on time.
          </p>
          <p className="absolute -bottom-16 text-black font-bold text-4xl hidden lg:block">
            Our Mission
          </p>
          <div className="relative w-[280px] h-[80px]">
            <Image src={"/goal.png"} alt="hi" width={280} height={80} />
          </div>
        </div>
      </div>
      <div
        id="value"
        ref={valueDiv}
        className={`scroll-m-10 hover:scale-110 min-h-[200px] bg-primary absolute bottom-[0%] lg:bottom-[10%] right-0 w-[340px] lg:w-[500px] rounded-l-full p-10 text-white space-y-2 transition-transform duration-700 ease-in-out ${
          valueDivIsInView
            ? "transform translate-x-0"
            : "transform translate-x-[200px]"
        }`}
      >
        <h4 className="text-center font-semibold  ">
          Customer Centric Approach
        </h4>
        <div className="flex gap-4 justify-center items-center">
          <div className="relative w-[150px] h-[80px]">
            <Image
              src={"/diamond.png"}
              alt="diamond image"
              width={150}
              height={80}
            />
          </div>
          <p className="text-sm">
            Our customers are at the heart of everything we do. We strive to
            exceed expectations with personalized service and a focus on
            satisfaction.
          </p>
          <p className="absolute -top-16 text-black font-bold text-4xl hidden lg:block">
            Our Value
          </p>
        </div>
      </div>
      <div className="w-[300px] h-[500px] rounded-full absolute top-[60%] left-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 lg:top-[50%] lg:left-1/2">
        <Image
          src={"/mission-vision.svg"}
          alt="Mission and Vision"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
