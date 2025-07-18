"use client";

import Image from "next/image";
import HamburgerIcon from "@/shared/assets/hamburger.svg";
import WhiteHamburgerIcon from "@/shared/assets/white-hamburger.svg";

import { useState } from "react";
import SideBar from "@/shared/ui/sideBar";

export default function SidebarLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-y-[40px] p-[20px] lg:flex-row lg:gap-x-[128px] lg:p-[80px]">
      <div className="lg:hidden">
        <Image
          src={HamburgerIcon}
          alt="햄버거 메뉴"
          onClick={() => setIsMenuVisible(true)}
        />

        {isMenuVisible && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsMenuVisible(false)}
          >
            <div
              className={`absolute top-0 left-0 w-full h-full bg-[#bababa] flex flex-col items-start p-[20px] gap-y-[40px] transition-transform duration-300 transform
              ${isMenuVisible ? "translate-x-0" : "-translate-x-full"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={WhiteHamburgerIcon}
                alt="햄버거 메뉴"
                onClick={() => setIsMenuVisible(false)}
              />
              <SideBar onLinkClick={() => setIsMenuVisible(false)} />
            </div>
          </div>
        )}
      </div>
      <div className="hidden lg:flex">
        <SideBar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
