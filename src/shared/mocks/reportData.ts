import type { ReportDetailItem, ReportItem } from "@shared/types/report";

export type ReportData = {
  data: ReportItem[];
  totalPage: number;
};

export const data: ReportData = {
  totalPage: 1,
  data: [
    {
      reportId: 1,
      type: "음란성/선정성",
      nickname: "델로",
      createdAt: "25. 02. 14",
      status: false,
    },
    {
      reportId: 2,
      type: "욕설/인신공격",
      nickname: "델로",
      createdAt: "25. 02. 14",
      status: true,
    },
    {
      reportId: 3,
      type: "영리목적/홍보성",
      nickname: "델로",
      createdAt: "25. 02. 14",
      status: true,
    },
    {
      reportId: 4,
      type: "기타",
      nickname: "델로",
      createdAt: "25. 02. 14",
      status: true,
    },
  ],
};

export const detailData: ReportDetailItem = {
  reportId: 1,
  type: "음란성/선정성",
  content: "어쩌구 저저구 샬라샬라?",
  nickname: "델로",
  createdAt: "2025년 1월 24일",
  targetNickname: "야한 사람",
  status: false,
};
