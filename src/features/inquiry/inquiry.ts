import { InquiryAnswer, InquiryItem } from "@/shared/types/inquiry";
import { Pagination } from "@/shared/types/page";
import { headers } from "next/headers";

// 코지메이트 전체 문의 리스트 조회
export async function getInquiryList(
  page: number,
  size: number
): Promise<Pagination<InquiryItem[]>> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/admin/inquiries`);
  url.searchParams.set("page", String(page));
  url.searchParams.set("size", String(size));

  const reqHeaders = await headers();
  const cookie = reqHeaders.get("cookie") ?? "";

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",

      cookie,
    },
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error(`문의 리스트 조회 실패 ${cookie}`);
  }

  return res.json();
}

// 코지메이트 특정 문의 조회
export async function getInquiryDetail(
  inquiryId: number
): Promise<InquiryItem> {
  const reqHeaders = await headers();
  const cookie = reqHeaders.get("cookie") ?? "";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/inquiries/${inquiryId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cookie,
      },
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error(`문의 상세 조회 실패 ${cookie}`);
  }

  return res.json();
}

// 답변 완료로 변경
export async function updateInquiryComplete(
  inquiryId: number,
  data: InquiryAnswer
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/inquiries/${inquiryId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error("문의 답변 상태 업데이트 실패");
  }

  return res.json();
}
