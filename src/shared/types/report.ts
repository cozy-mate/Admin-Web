export type ReportItem = {
  reportId: number;
  type: string;
  nickname: string;
  createdAt: string;
  status: boolean;
};

export type ReportDetailItem = {
  reportId: number;
  type: string;
  content: string;
  nickname: string;
  createdAt: string;
  targetNickname: string;
  status: boolean;
};
