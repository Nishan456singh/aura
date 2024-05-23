"use client";
import React, { useState } from "react";
import { Menu } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { headerLinks } from "@/constants";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">

      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <ul className="md:flex flex-row gap-8 md:mt-4 mt-24 text-xl">
          {headerLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.route}
                  className={link.route === active ? 'text-primary-500' : ''}>{link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </Menu>
    </div>
  );
}

export default Navbar