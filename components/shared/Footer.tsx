import { FaFacebook, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative grid w-full bg-primary text-white px-4 py-6 md:px-20 md:py-10 grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-0">
      <ul className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm text-center md:text-left">
        <li>Privacy Policy</li>
        <div className="border-r-0 md:border-r-2 h-0 md:h-5" />
        <li>
          <a
            href="/terms-conditions"
            className="cursor-pointer hover:opacity-80"
          >
            Terms & Conditions
          </a>
        </li>
      </ul>
      <div className="text-sm text-center order-first md:order-none">
        © 2024 Akyab Syngery. All rights reserved.
      </div>
      <ul className="flex justify-center lg:justify-end items-center gap-4 text-xl self-end">
        <li>
          <a
            href="https://facebook.com/akyabsynergy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:opacity-80" />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/akyabsynergy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="hover:opacity-80" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
