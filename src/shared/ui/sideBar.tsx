import type React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-[168px] flex flex-col gap-y-[64px]">
      <div className="flex flex-col gap-y-[16px]">
        <p className="textLg textInfo">문의</p>
        <Link
          to={"/inquiry"}
          className={`px-[20px] py-[8px] rounded-[7px] ${
            location.pathname.includes("inquiry")
              ? "bg-[#68A4FF] textLg text-white"
              : "bg-[#F5F5F5] textLgMedium textDisabled"
          }`}
        >
          문의 조회
        </Link>
      </div>

      <div className="flex flex-col gap-y-[16px]">
        <p className="textLg textInfo">신고</p>
        <Link
          to={"/report"}
          className={`px-[20px] py-[8px] rounded-[7px] ${
            location.pathname.includes("report")
              ? "bg-[#68A4FF] textLg text-white"
              : "bg-[#F5F5F5] textLgMedium textDisabled"
          }`}
        >
          신고 조회
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
