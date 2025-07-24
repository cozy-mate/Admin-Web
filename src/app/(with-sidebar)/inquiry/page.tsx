import { getInquiryList } from "@/features/inquiry/inquiry";
// import { data } from "@/shared/mocks/inquiryData";
import Loading from "@/shared/ui/loading";
import Pagination from "@/shared/ui/pagination";
import SearchBar from "@/shared/ui/searchBar";
import { Suspense } from "react";
import DataTable from "./ui/dataTable";
import { cookies } from "next/headers";

export default async function Page(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("x-access-token")?.value;

  const all = cookieStore.getAll();

  // const searchParams = await props.searchParams;
  // const query = searchParams?.query || "";
  // const currentPage = Number(searchParams?.page) || 0;

  // const { result, page, totalPage } = await getInquiryList(currentPage, 10);

  return (
    <main className="w-full flex flex-col gap-y-[24px]">
      <p className="titleMd textInfo">문의 조회</p>

      <div className="flex flex-col items-center gap-y-[60px] lg:gap-y-[80px]">
        <SearchBar placeholder="문의 제목 및 내용을 입력해주세요" />
        <div>{token}</div>
        <pre>{JSON.stringify(all, null, 2)}</pre>

        <Suspense fallback={<Loading />}>
          {/* <DataTable data={result} query={query} currentPage={currentPage} /> */}
          {/* <DataTable
            data={data.result}
            query={query}
            currentPage={currentPage}
          /> */}
        </Suspense>

        {/* <Pagination totalPage={totalPage} currentPage={page} /> */}
        {/* <Pagination totalPage={data.totalPage} currentPage={data.page} /> */}
      </div>
    </main>
  );
}
