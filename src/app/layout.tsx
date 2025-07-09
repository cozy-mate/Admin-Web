import type React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import SideBar from "@/shared/ui/sideBar";
import HamburgerIcon from "@/shared/assets/hamburger.svg";
import WhiteHamburgerIcon from "@/shared/assets/white-hamburger.svg";
import { useState } from "react";

const Layout: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-y-[40px] p-[20px] lg:flex-row lg:gap-x-[128px] lg:p-[80px]">
      <div className="lg:hidden">
        <img src={HamburgerIcon} onClick={() => setIsMenuVisible(true)} />

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
              <img
                src={WhiteHamburgerIcon}
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
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
