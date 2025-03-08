"use client";

import { useRouter } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import RouteWidget from "./route-widget";
import NavbarTabs from "./navbar-tabs";
import { appTabs } from "@/constants/app-tabs";

export function Navbar() {
  const router = useRouter();

  return (
    <header className="w-full flex items-center justify-between px-5 select-none">
      <h1
        onClick={() => router.push("/")}
        className="text-2xl cursor-pointer font-extrabold tracking-tighter"
      >
        HAIQ
      </h1>
      {/* <RouteWidget className="invisible sm:visible" /> */}
      <div>
        <NavbarTabs tabs={appTabs} />
      </div>
      <ModeToggle />
    </header>
  );
}

export default Navbar;
