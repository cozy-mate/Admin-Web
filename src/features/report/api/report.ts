import {
  GuestGetAxiosInstance,
  GuestPatchAxiosInstance,
} from "@/shared/lib/axios/guest.axios.method";

// 코지메이트 전체 신고 리스트 조회
export const getReportList = async (page: number, size: number) => {
  const response = await GuestGetAxiosInstance(`/admin/reports`, {
    params: {
      page,
      size,
    },
  });

  return response.data;
};

// 코지메이트 특정 신고 조회
export const getReportDetail = async (reportId: number) => {
  const response = await GuestGetAxiosInstance(`/admin/reports/${reportId}`);

  return response.data;
};

// 영구정지 상태 변경
export const banMember = async (reportId: number, isBanned: boolean) => {
  const response = await GuestPatchAxiosInstance(
    `/admin/reports/${reportId}`,
    null,
    { params: isBanned }
  );

  return response.data;
};
