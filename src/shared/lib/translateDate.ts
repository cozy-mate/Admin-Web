export function formatDateToYYMMDD(dateTimeStr: string): string {
  const cleanStr = dateTimeStr.split(".")[0];
  const date = new Date(cleanStr);

  const yy = String(date.getFullYear()).slice(2);
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  return `${yy}. ${mm}. ${dd}`;
}
