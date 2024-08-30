import React from "react";

export default function Header(): React.ReactNode {
  return (
    <header className="flex justify-center py-10 w-full">
      <nav className="justify-between min-w-[1250px] max-w-screen-2xl hidden lg:flex">
        <div>Logo</div>
        <ul className="flex font-bold text-lg gap-16">
          <li>Home</li>
          <li>Service</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
