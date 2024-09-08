// "use client";

import Image from "next/image";
import Icon from "../shared/LucideIcon";
import { ABOUT_US } from "@/lib/constants";

export default function AboutUs() {
  // const router = useRouter();
  return (
    <>
      {/* Who We Are */}
      <section className="min-h-[100dvh] p-20 space-y-6" id="about">
        <h2 className="text-5xl font-bold">Who We Are</h2>
        <div className="flex justify-between">
          <div className="w-4/6 space-y-6">
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
                className="cursor-pointer h-20 text-2xl font-bold w-[600px] text-white rounded-full grid grid-cols-3 place-items-center bg-[#bd4b4c] hover:bg-primary px-8"
              >
                <span></span>
                <span>{item.title}</span>
                <span className="justify-self-end">
                  <Icon name="milestone" size={32} />
                </span>
              </a>
            ))}
          </div>
          <div className="relative w-[400px] h-[400px]">
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
      <section className="min-h-[100dvh] p-16 relative" id="mission">
        <h2 className="text-4xl font-bold">Our Mission And Value Statement</h2>
        <div className="bg-primary absolute top-[25%] left-0 w-[500px] rounded-r-full p-10 text-white space-y-4">
          <h4 className="font-semibold">
            To Simplify Your Journey and Deliver with Precision
          </h4>
          <div className="flex gap-4 items-start justify-center">
            <p className="text-sm">
              We aim to make every travel and delivery experience smooth and
              worry-free. Our dedicated team works tiredlessly to ensure that
              you get the best deals on flights and your packages reach their
              destination safely and on time.
            </p>
            <p className="absolute -bottom-16 text-black font-bold text-4xl">
              Our Mission
            </p>
            <div className="relative w-[280px] h-[80px]">
              <Image
                src={"/goal.png"}
                alt="hi"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        <div className="min-h-[200px] bg-primary absolute bottom-[10%] right-0 w-[500px] rounded-l-full p-10 text-white space-y-2">
          <h4 className="text-center font-semibold  ">
            Customer Centric Approach
          </h4>
          <div className="flex gap-4 justify-center items-center">
            <div className="relative w-[150px] h-[80px]">
              <Image
                src={"/diamond.png"}
                alt="hi"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-sm">
              Our customers are at the heart of everything we do. We strive to
              exceed expectations with personalized service and a focus on
              satisfaction.
            </p>
            <p className="absolute -top-16 text-black font-bold text-4xl">
              Our Value
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[500px] rounded-full absolute top-[20%] left-[40%]">
          <Image
            src={"/delivery.svg"}
            alt="immage"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>
      {/* Our Team */}
      <section className="min-h-[100dvh] p-16 relative" id="team">
        <h2 className="text-5xl font-bold text-center mb-16">Our Team</h2>
        <div className="flex w-full justify-around">
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
