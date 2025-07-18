export type ReportItem = {
  reportId: number;
  reporterMemberId: number;
  reporterNickname: string;
  reportedMemberId: number;
  reportedNickname: string;
  reportReason: string;
  reportSource: string;
  content: string;
  createdAt: string;
  isBanned: boolean;
};
