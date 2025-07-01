export type InquiryItem = {
  inquiryId: number;
  title: string;
  nickname: string;
  createdAt: string;
  status: boolean;
};

export type InquiryDetailItem = {
  inquiryId: number;
  title: string;
  content: string;
  nickname: string;
  createdAt: string;
  email: string;
  status: boolean;
};
