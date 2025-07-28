export type InquiryItem = {
  inquiryId: number;
  nickname: string;
  content: string;
  createdAt: string;
  status: string;
  replyEmail: string;
  replyContent: string;
  replyAt: string;
};

export type InquiryAnswer = {
  replyContent: string;
  sendEmail: boolean;
};
