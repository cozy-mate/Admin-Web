import { ReportItem } from "@/shared/types/report";
import { formatDateToYYMMDD } from "@/shared/utils/translateDate";
import { translateReportType } from "@/shared/utils/translateReportType";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/router";

export default function DataTable({ data }: { data: ReportItem[] }) {
  const router = useRouter();

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
    {
      accessorKey: "isBanned",
      header: "신고 처리 상태",
      cell: (info) => (info.getValue() ? "영구 정지" : "미완료"),
    },
  ];

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    // pageCount: data.totalPage,
    // onPaginationChange: setPagination,
    // state: {
    //   pagination,
    // },
  });

  return (
    <table className="w-full border-collapse">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="w-full border border-[#EBEBEB]">
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
                    router.push(`/report/${row.original.reportId}`)
                  }
                  className="w-1/4 textSm lg:textLgMedium textDefault text-center py-[27.5px]"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
