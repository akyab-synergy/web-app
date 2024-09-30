"use client";

import { Icon, Menu, Truck, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "../ui/drawer";

export default function Header(): React.ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const [container, setContainer] = React.useState(null);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex justify-center w-full">
      <nav className="justify-between w-full h-[200px] max-w-screen-2xl hidden lg:flex px-12">
        <div className="relative w-[180px] h-[180px]">
          <Image src={"/logo.jpg"} alt="AKYAB logo" fill />
        </div>
        <ul className="flex items-center font-bold text-lg gap-16 pt-10 pb-16 hover-nav">
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
      <nav className="flex items-center justify-between w-full h-[100px] max-w-screen-2xl lg:hidden px-4">
        <div className="relative w-[100px] h-[100px]">
          <Image src={"/logo.jpg"} alt="AKYAB logo" fill />
        </div>
        <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
          <DrawerTrigger asChild>
            <Menu />
          </DrawerTrigger>
          <DrawerContent className="h-[100dvh] px-7 pt-3 ">
            <div className="space-y-8">
              <button
                className="text-2xl ml-[96%]"
                onClick={() => setIsOpen(false)}
              >
                <X />
              </button>
              <div className="relative w-[100px] h-[100px] mx-auto">
                <Image src={"/logo.jpg"} alt="AKYAB logo" fill />
              </div>
              <ul className="w-full space-y-8 text-center text-[#db3c2c]">
                <li>
                  <a href="/" onClick={handleLinkClick}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#service" onClick={handleLinkClick}>
                    Service
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={handleLinkClick}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={handleLinkClick}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
}
