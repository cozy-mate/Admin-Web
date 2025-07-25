// import { data } from "@/shared/mocks/reportData";
import SearchBar from "@/shared/ui/searchBar";
import { Suspense } from "react";
import DataTable from "./ui/dataTable";
import Pagination from "@/shared/ui/pagination";
import { getReportList } from "@/features/report/report";

export default async function Page(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 0;

  const { result, page, totalPage } = await getReportList(currentPage, 10);

  return (
    <main className="w-full flex flex-col gap-y-[24px]">
      <p className="titleMd textInfo">신고 조회</p>

      <div className="flex flex-col items-center gap-y-[60px] lg:gap-y-[80px]">
        <SearchBar placeholder="신고 제목 및 내용을 입력해주세요" />

        <Suspense>
          <DataTable data={result} query={query} currentPage={currentPage} />
          {/* <DataTable
            data={data.result}
            query={query}
            currentPage={currentPage}
          /> */}
        </Suspense>

        <Pagination totalPage={totalPage} currentPage={page} />
        {/* <Pagination totalPage={data.totalPage} currentPage={data.page} /> */}
      </div>
    </main>
  );
}
