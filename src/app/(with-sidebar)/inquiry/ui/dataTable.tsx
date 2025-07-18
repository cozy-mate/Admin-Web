"use client";

import { InquiryItem } from "@/shared/types/inquiry";
import { formatDateToYYMMDD } from "@/shared/utils/translateDate";
import { translateInquiryStatus } from "@/shared/utils/translateInquiryStatus";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";

export default function DataTable({
  data,
  query,
  currentPage,
}: {
  data: InquiryItem[];
  query: string;
  currentPage: number;
}) {
  const router = useRouter();

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
      cell: (info) => formatDateToYYMMDD(info.getValue() as string),
    },
    {
      accessorKey: "status",
      header: "답변 상태",
      cell: (info) => translateInquiryStatus(info.getValue() as string),
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
                    router.push(`/inquiry/${row.original.inquiryId}`)
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
