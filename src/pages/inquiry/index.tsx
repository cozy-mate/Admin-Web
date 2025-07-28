import { getInquiryList } from "@/features/inquiry/inquiry";
import Pagination from "@/shared/ui/pagination";
import SearchBar from "@/shared/ui/searchBar";
import DataTable from "@/shared/ui/inquiry/dataTable";
import { PaginationData } from "@/shared/types/page";
import { InquiryItem } from "@/shared/types/inquiry";
import { GetServerSideProps } from "next";

interface InquiryPageProps {
  data: PaginationData<InquiryItem[]>;
  isError?: boolean;
}

export default function InquiryPage({ data, isError }: InquiryPageProps) {
  return (
    <main className="w-full flex flex-col gap-y-[24px]">
      <p className="titleMd textInfo">문의 조회</p>

      <div className="flex flex-col items-center gap-y-[60px] lg:gap-y-[80px]">
        <SearchBar placeholder="문의 제목 및 내용을 입력해주세요" />
        {isError ? (
          <div className="flex justify-center items-center h-[300px]">
            <p className="textMdSemibold text-red-500">
              데이터를 불러오는 중 문제가 발생했습니다. 잠시 후 다시
              시도해주세요.
            </p>
          </div>
        ) : (
          <>
            <DataTable data={data.result} />
            <Pagination totalPage={data.totalPage} currentPage={data.page} />
          </>
        )}
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query = "", page = "0" } = context.query;

  try {
    const currentPage = Number(page) || 0;

    const data = await getInquiryList(currentPage, 10);

    return {
      props: {
        query: query as string,
        currentPage,
        data,
        isError: false,
      },
    };
  } catch (error) {
    console.error("문의 리스트 조회 실패:", error);
    return {
      props: {
        query: "",
        currentPage: 0,
        data: {
          page: 0,
          hasNext: false,
          result: [],
          totalElement: 0,
          totalPage: 0,
        },
        isError: true,
      },
    };
  }
};
