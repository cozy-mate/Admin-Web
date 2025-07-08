export function formatDateToYYMMDD(dateTimeStr: string): string {
  const cleanStr = dateTimeStr.split(".")[0];
  const date = new Date(cleanStr);

  const yy = String(date.getFullYear()).slice(2);
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  return `${yy}. ${mm}. ${dd}`;
}

export function formatDateToKoreanLong(dateTimeStr: string): string {
  const cleanStr = dateTimeStr.split(".")[0];
  const date = new Date(cleanStr);

  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  return `${yyyy}년 ${mm}월 ${dd}일`;
}
