import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";

interface SideBarProps {
  onLinkClick?: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ onLinkClick }) => {
  const pathname = usePathname();

  return (
    <div className="w-[168px] flex flex-col gap-y-[64px]">
      <div className="flex flex-col gap-y-[16px]">
        <p className="textLg textInfo">문의</p>
        <Link
          href={"/inquiry"}
          onClick={onLinkClick}
          className={`px-[20px] py-[8px] rounded-[7px] ${
            pathname.includes("inquiry")
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
          href={"/report"}
          onClick={onLinkClick}
          className={`px-[20px] py-[8px] rounded-[7px] ${
            pathname.includes("report")
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
