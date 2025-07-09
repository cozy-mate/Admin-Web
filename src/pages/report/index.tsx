import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { useState } from "react";
import type { ReportItem } from "@shared/types/report";
import ColorMagnifierIcon from "@shared/assets/color-magnifier.svg";
import MagnifierIcon from "@shared/assets/magnifier.svg";
import { useNavigate } from "react-router-dom";
import { useGetReportList } from "@/features/report/model/report";
import { formatDateToYYMMDD } from "@/shared/lib/translateDate";
import { translateReportType } from "@/shared/lib/translateReportType";

export default function ReportPage() {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState<string>("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data } = useGetReportList(pagination.pageIndex, pagination.pageSize);

  const columns: ColumnDef<ReportItem>[] = [
    {
      accessorKey: "reportReason",
      header: "신고 분류",
      cell: (info) => translateReportType(info.getValue() as string),
    },
    {
      accessorKey: "reporterNickname",
      header: "닉네임",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "createdAt",
      header: "등록 날짜",
      cell: (info) => formatDateToYYMMDD(info.getValue() as string),
    },
    // TODO : 영구 정지 처리 상태 값 없음
    // {
    //   accessorKey: "status",
    //   header: "신고 처리 상태",
    //   cell: (info) => (info.getValue() ? "영구 정지" : "미완료"),
    // },
  ];

  const table = useReactTable({
    columns,
    data: data.result.result,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: data.totalPage,
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <main className="w-full flex flex-col gap-y-[24px]">
      <p className="titleMd textInfo">신고 조회</p>

      <div className="flex flex-col items-center gap-y-[60px] lg:gap-y-[80px]">
        <div className="w-full flex flex-row gap-x-[8px] bg-[#F6F6F6] px-[20px] py-[23px] rounded-[12px]">
          <img src={searchInput !== "" ? ColorMagnifierIcon : MagnifierIcon} />
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="신고 제목 및 내용을 입력해주세요"
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
                      신고 내역이 존재하지 않습니다.
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
                        navigate(`/report/${row.original.reportId}`)
                      }
                      className="w-1/4 textSm lg:textLgMedium textDefault text-center py-[27.5px]"
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
          {Array.from({ length: data.result.totalPage }, (_, i) => i).map(
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
