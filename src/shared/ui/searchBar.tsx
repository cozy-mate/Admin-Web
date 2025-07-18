"use client";

import MagnifierIcon from "@/shared/assets/magnifier.svg";
import ColorMagnifierIcon from "@/shared/assets/color-magnifier.svg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="w-full flex flex-row gap-x-[8px] bg-[#F6F6F6] px-[20px] py-[23px] rounded-[12px]">
      <Image
        src={
          searchParams.get("query")?.toString() !== undefined
            ? ColorMagnifierIcon
            : MagnifierIcon
        }
        alt="돋보기"
      />
      <input
        type="text"
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={placeholder}
        className="w-full textLgSemibold outline-0"
      />
    </div>
  );
}
