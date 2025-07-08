import type { ReportItem } from "@shared/types/report";
import type { Pagination } from "../types/page";

export const data: Pagination<ReportItem[]> = {
  page: 1,
  hasNext: false,
  result: [
    {
      reportId: 1,
      reporterMemberId: 2,
      reporterNickname: "델로",
      reportedMemberId: 3,
      reportedNickname: "말즈",
      reportReason: "음란성/선정성",
      reportSource: "",
      content: "",
      createdAt: "25. 02. 14",
    },
    {
      reportId: 2,
      reporterMemberId: 2,
      reporterNickname: "델로",
      reportedMemberId: 3,
      reportedNickname: "말즈",
      reportReason: "음란성/선정성",
      reportSource: "",
      content: "",
      createdAt: "25. 02. 14",
    },
    {
      reportId: 3,
      reporterMemberId: 2,
      reporterNickname: "델로",
      reportedMemberId: 3,
      reportedNickname: "말즈",
      reportReason: "음란성/선정성",
      reportSource: "",
      content: "",
      createdAt: "25. 02. 14",
    },
    {
      reportId: 4,
      reporterMemberId: 2,
      reporterNickname: "델로",
      reportedMemberId: 3,
      reportedNickname: "말즈",
      reportReason: "음란성/선정성",
      reportSource: "",
      content: "",
      createdAt: "25. 02. 14",
    },
  ],
  totalElement: 4,
  totalPage: 1,
};

export const detailData: ReportItem = {
  reportId: 1,
  reporterMemberId: 2,
  reporterNickname: "델로",
  reportedMemberId: 3,
  reportedNickname: "말즈",
  reportReason: "음란성/선정성",
  reportSource: "",
  content: "",
  createdAt: "25. 02. 14",
};
