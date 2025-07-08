export function translateInquiryStatus(inquiryStatus: string) {
  switch (inquiryStatus) {
    case "PENDING":
      return "미답변";

    case "ANSWERED":
      return "답변 완료";

    default:
      return "";
  }
}
