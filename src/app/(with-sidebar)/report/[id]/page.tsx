// import { detailData } from "@/shared/mocks/reportData";
import { formatDateToKoreanLong } from "@/shared/utils/translateDate";
import { translateReportType } from "@/shared/utils/translateReportType";
import BanButton from "./ui/banButton";
import { getReportDetail } from "@/features/report/report";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  //   const data = detailData;
  const data = await getReportDetail(Number(id));

  return (
    <main className="flex flex-col">
      <p className="self-start bg-[#F6F6F6] px-[16px] py-[4px] rounded-[6px] textMdSemibold textInfo mb-[8px]">
        {data.result.isBanned ? "영구 정지" : "미완료"}
      </p>

      <p className="titleSm textDefault mb-[24px]">
        {translateReportType(data.result.reportReason)}
      </p>

      <p className="textMd textSub mb-[32px]">
        {data.result.reportReason === "OTHER"
          ? data.result.content
          : "신고 내용이 없습니다. (기타 외에는 신고 내용 없음)"}
      </p>

      <p className="textMd textInfo">
        {data.result.reporterNickname},{" "}
        {formatDateToKoreanLong(data.result.createdAt)}
      </p>

      <div className="bg-[#EBEBEB] h-[1px] my-[32px]" />

      <div className="flex flex-col gap-y-[40px]">
        <div className="flex flex-col gap-y-[4px]">
          <p className="textMdBold textSub">신고 대상 닉네임</p>
          <p className="textMd textInfo">{data.result.reportedNickname}</p>
        </div>

        {data.result.isBanned && (
          <div className="flex flex-col gap-y-[4px]">
            <p className="textMdBold textSub">영구 정지 일자</p>
            {/* TODO: 영구 정지 처리 날짜 값 없음 */}
            {/* <p className="textMd textInfo">{data.result.content}</p> */}
          </div>
        )}

        <BanButton data={data.result} />
      </div>
    </main>
  );
}
