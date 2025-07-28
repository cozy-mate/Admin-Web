export function translateReportType(reportType: string) {
  switch (reportType) {
    case "OBSCENITY":
      return "음란성/선정성";

    case "INSULT":
      return "욕설/인신공격";

    case "COMMERCIAL":
      return "영리목적/홍보성";

    case "OTHER":
      return "기타";

    default:
      return "";
  }
}
