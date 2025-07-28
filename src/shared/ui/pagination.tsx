import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Pagination({
  totalPage,
  currentPage,
}: {
  totalPage: number;
  currentPage: number;
}) {
  const params = useSearchParams();
  const query = params.get("query") ?? "";

  return (
    <div className="flex flex-row items-center gap-x-[24px]">
      {Array.from({ length: totalPage }, (_, i) => i).map((pageNumber) => (
        <Link
          key={pageNumber}
          href={`?page=${pageNumber}&query=${query}`}
          className={`w-[40px] h-[40px] rounded-[4px] border flex items-center justify-center ${
            pageNumber === currentPage
              ? "bgMain text-white borderMain"
              : "bg-white textDisabled borderTextDisabled"
          }`}
        >
          {pageNumber + 1}
        </Link>
      ))}
    </div>
  );
}
