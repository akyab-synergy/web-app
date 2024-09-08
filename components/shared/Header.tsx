import Image from "next/image";
import React from "react";

export default function Header(): React.ReactNode {
  return (
    <header className="flex justify-center h-[200px] w-full">
      <nav className="justify-between w-full max-w-screen-2xl hidden lg:flex px-12">
        <div className="relative w-[180px] h-[180px]">
          <Image src={"/logo.jpg"} alt="AKYAB logo" fill />
        </div>
        <ul className="flex font-bold text-lg gap-16 py-16">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
