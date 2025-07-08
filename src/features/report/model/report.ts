import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { getReportDetail, getReportList, banMember } from "../api/report";
import { useNavigate } from "react-router-dom";

// 코지메이트 특정 신고 조회
export const useGetReportDetail = (reportId: number) => {
  return useSuspenseQuery({
    queryKey: [`/admin/reports/${reportId}`, reportId],
    queryFn: () => getReportDetail(reportId),
  });
};

// 코지메이트 전체 신고 리스트 조회
export const useGetReportList = (size: number, page: number) => {
  return useSuspenseQuery({
    queryKey: [`/admin/reports`],
    queryFn: () => getReportList(size, page),
  });
};

// 영구정지 상태 변경
export const useBanMember = (reportId: number) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (isBanned: boolean) => banMember(reportId, isBanned),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`/admin/reports`] });
      queryClient.invalidateQueries({
        queryKey: [`/admin/reports/${reportId}`, reportId],
      });
      navigate(-1);
    },
  });
};
