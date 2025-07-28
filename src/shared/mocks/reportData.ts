import type { ReportItem } from "@/shared/types/report";
import type { PaginationData } from "@/shared/types/page";

export const data: PaginationData<ReportItem[]> = {
  page: 1,
  hasNext: false,
  result: [
    {
      reportId: 1,
      reporterMemberId: 2,
      reporterNickname: "델로",
      reportedMemberId: 3,
      reportedNickname: "말즈",
      reportReason: "OBSCENITY",
      reportSource: "",
      content: "",
      createdAt: "2025-01-24T10:30:00.000000",
      isBanned: true,
    },
    {
      reportId: 2,
      reporterMemberId: 2,
      reporterNickname: "델로",
      reportedMemberId: 3,
      reportedNickname: "말즈",
      reportReason: "INSULT",
      reportSource: "",
      content: "",
      createdAt: "2025-01-24T10:30:00.000000",
      isBanned: false,
    },
    {
      reportId: 3,
      reporterMemberId: 2,
      reporterNickname: "델로",
      reportedMemberId: 3,
      reportedNickname: "말즈",
      reportReason: "COMMERCIAL",
      reportSource: "",
      content: "",
      createdAt: "2025-01-24T10:30:00.000000",
      isBanned: false,
    },
    {
      reportId: 4,
      reporterMemberId: 2,
      reporterNickname: "델로",
      reportedMemberId: 3,
      reportedNickname: "말즈",
      reportReason: "OTHER",
      reportSource: "",
      content: "",
      createdAt: "2025-01-24T10:30:00.000000",
      isBanned: false,
    },
  ],
  totalElement: 4,
  totalPage: 1,
};

export const detailData: { result: ReportItem } = {
  result: {
    reportId: 1,
    reporterMemberId: 2,
    reporterNickname: "델로",
    reportedMemberId: 3,
    reportedNickname: "말즈",
    reportReason: "OBSCENITY",
    reportSource: "",
    content: "",
    createdAt: "2025-01-24T10:30:00.000000",
    isBanned: false,
  },
};
