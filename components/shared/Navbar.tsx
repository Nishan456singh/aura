"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

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
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <ul className="md:flex flex-row gap-9 md:mt-4 mt-24 text-xl">
          <MenuItem setActive={setActive} active={active} item="Men">
            <Link href="/men" />
            <div className="md:flex flex-col space-y-4 text-sm hidden">
              <HoveredLink href="/web-dev">T-Shirts</HoveredLink>
              <HoveredLink href="/interface-design">Jeans</HoveredLink>
              <HoveredLink href="/seo">Joggers</HoveredLink>
              <HoveredLink href="/branding">Shoes</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Women">
          <Link href="/Women" />
            <div className="md:flex flex-col space-y-4 text-sm hidden">
              <HoveredLink href="/web-dev">T-Shirts</HoveredLink>
              <HoveredLink href="/interface-design">Jeans</HoveredLink>
              <HoveredLink href="/seo">Joggers</HoveredLink>
              <HoveredLink href="/branding">Shoes</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Kids">
          <Link href="/kids" />
            <div className="md:flex flex-col space-y-4 text-sm hidden">
              <HoveredLink href="/web-dev">T-Shirts</HoveredLink>
              <HoveredLink href="/interface-design">Jeans</HoveredLink>
              <HoveredLink href="/seo">Joggers</HoveredLink>
              <HoveredLink href="/branding">Shoes</HoveredLink>
            </div>
          </MenuItem>
        </ul>
      </Menu>
    </div>
  );
}

export default Navbar