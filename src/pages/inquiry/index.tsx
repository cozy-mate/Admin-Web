import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import type { InquiryItem } from "@shared/types/inquiry";
import MagnifierIcon from "@shared/assets/magnifier.svg";
import ColorMagnifierIcon from "@shared/assets/color-magnifier.svg";
import { useNavigate } from "react-router-dom";
import { getInquiryList } from "@/features/inquiry/api/inquiry";
import type { Pagination } from "@/shared/types/page";

export default function InquiryPage() {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState<string>("");

  const [data, setData] = useState<Pagination<InquiryItem[]>>({
    page: 0,
    hasNext: false,
    result: [],
    totalElement: 0,
    totalPage: 0,
  });

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  useEffect(() => {
    const getData = async () => {
      const response = await getInquiryList(
        pagination.pageIndex,
        pagination.pageSize
      );
      console.log(response);

      setData(response);
    };
    getData();
  }, [pagination, data]);

  const columns: ColumnDef<InquiryItem>[] = [
    {
      accessorKey: "content",
      header: "내용",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "nickname",
      header: "닉네임",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "createdAt",
      header: "등록 날짜",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "status",
      header: "답변 상태",
      cell: (info) => info.getValue(),
    },
  ];

  const table = useReactTable({
    columns,
    data: data.result,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    // getPaginationRowModel: getPaginationRowModel(),
    pageCount: data.totalPage,
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <main className="w-full flex flex-col gap-y-[24px]">
      <p className="titleMd textInfo">문의 조회</p>

      <div className="flex flex-col items-center  gap-y-[80px]">
        <div className="w-full flex flex-row gap-x-[8px] bg-[#F6F6F6] px-[20px] py-[23px] rounded-[12px]">
          <img src={searchInput !== "" ? ColorMagnifierIcon : MagnifierIcon} />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="문의 제목 및 내용을 입력해주세요"
            className="w-full textLgSemibold outline-0"
          />
        </div>

        <table className="w-full border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="w-full border border-[#EBEBEB]"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="w-1/4 textMdBold text-[#9092A1] text-center py-[16px] bg-[#F6F6F6]"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="p-0">
                  <div className="flex justify-center items-center h-[800px]">
                    <span className="text-center textMd textDisabled">
                      문의 내역이 존재하지 않습니다.
                    </span>
                  </div>
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-[#FAFAFA] hover:cursor-pointer"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      onClick={() =>
                        navigate(`/inquiry/${row.original.inquiryId}`)
                      }
                      className="w-1/4 textLgMedium textDefault text-center py-[27.5px]"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="flex flex-row items-center gap-x-[24px]">
          {Array.from({ length: data.totalPage }, (_, i) => i).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() =>
                  setPagination((prev) => ({
                    ...prev,
                    pageIndex: pageNumber,
                  }))
                }
                className={`w-[40px] h-[40px] rounded-[4px] border ${
                  pageNumber === pagination.pageIndex
                    ? "bgMain text-white borderMain"
                    : "bg-white textDisabled borderTextDisabled"
                }`}
              >
                {pageNumber + 1}
              </button>
            )
          )}
        </div>
      </div>
    </main>
  );
}
