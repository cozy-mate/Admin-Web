import {
  GuestGetAxiosInstance,
  GuestPatchAxiosInstance,
} from "@/shared/lib/axios/guest.axios.method";
import type { InquiryAnswer } from "@/shared/types/inquiry";

// 코지메이트 전체 문의 리스트 조회
export const getInquiryList = async (page: number, size: number) => {
  const response = await GuestGetAxiosInstance(`/admin/inquiries`, {
    params: {
      page,
      size,
    },
  });

  return response.data;
};

// 코지메이트 특정 문의 조회
export const getInquiryDetail = async (inquiryId: number) => {
  const response = await GuestGetAxiosInstance(`/admin/inquiries/${inquiryId}`);

  return response.data;
};

// 답변 완료로 변경
export const updateInquiryComplete = async (
  inquiryId: number,
  data: InquiryAnswer
) => {
  const response = await GuestPatchAxiosInstance(
    `/admin/inquiries/${inquiryId}`,
    data
  );

  return response.data;
};
