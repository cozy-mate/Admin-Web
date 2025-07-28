import MagnifierIcon from "@/shared/assets/magnifier.svg";
import ColorMagnifierIcon from "@/shared/assets/color-magnifier.svg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const router = useRouter();
  const { query } = router;

  const [input, setInput] = useState(query.query || "");

  useEffect(() => {
    setInput(query.query || "");
  }, [query.query]);

  function handleSearch(term: string) {
    const newQuery = { ...query };

    if (term) {
      newQuery.query = term;
    } else {
      delete newQuery.query;
    }

    router.replace({
      pathname: router.pathname,
      query: newQuery,
    });
  }

  return (
    <div className="w-full flex flex-row gap-x-[8px] bg-[#F6F6F6] px-[20px] py-[23px] rounded-[12px]">
      <Image src={input ? ColorMagnifierIcon : MagnifierIcon} alt="돋보기" />
      <input
        type="text"
        value={input}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={placeholder}
        className="w-full textLgSemibold outline-0"
      />
    </div>
  );
}
