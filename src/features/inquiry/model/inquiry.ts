import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import {
  getInquiryDetail,
  getInquiryList,
  updateInquiryComplete,
} from "../api/inquiry";
import type { InquiryAnswer } from "@/shared/types/inquiry";
import { useNavigate } from "react-router-dom";

// 코지메이트 특정 문의 조회
export const useGetInquiryDetail = (inquiryId: number) => {
  return useSuspenseQuery({
    queryKey: [`/admin/inquiries/${inquiryId}`, inquiryId],
    queryFn: () => getInquiryDetail(inquiryId),
  });
};

// 코지메이트 전체 문의 리스트 조회
export const useGetInquiryList = (size: number, page: number) => {
  return useSuspenseQuery({
    queryKey: [`/admin/reports`],
    queryFn: () => getInquiryList(size, page),
  });
};

// 답변 완료로 변경
export const useUpdateInquiryComplete = (inquiryId: number) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: InquiryAnswer) => updateInquiryComplete(inquiryId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`/admin/reports`] });
      queryClient.invalidateQueries({
        queryKey: [`/admin/inquiries/${inquiryId}`, inquiryId],
      });
      navigate(-1);
    },
  });
};
