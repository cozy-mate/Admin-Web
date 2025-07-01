import type React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import SideBar from "@/shared/ui/sideBar";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-row gap-x-[128px] p-[80px]">
      <SideBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
