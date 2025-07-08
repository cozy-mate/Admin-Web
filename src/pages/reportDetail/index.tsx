import { useState } from "react";
import ModalComponent from "@shared/ui/modal";
import { useLocation } from "react-router-dom";
import { useGetReportDetail } from "@/features/report/model/report";
import { formatDateToKoreanLong } from "@/shared/lib/translateDate";
import { translateReportType } from "@/shared/lib/translateReportType";

export default function ReportDetailPage() {
  const { pathname } = useLocation();
  const id = pathname.split("/").filter(Boolean).pop();

  const { data } = useGetReportDetail(Number(id));

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main className="flex flex-col">
      {/* TODO: 영구 정지 처리 상태 값 없음 */}
      {/* <p className="self-start bg-[#F6F6F6] px-[16px] py-[4px] rounded-[6px] textMdSemibold textInfo mb-[8px]">
        {data.status ? "영구 정지" : "미완료"}
      </p> */}

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

        {/* {data.status && ( */}
        <div className="flex flex-col gap-y-[40px]">
          <div className="flex flex-col gap-y-[4px]">
            <p className="textMdBold textSub">영구 정지 일자</p>
            {/* TODO: 영구 정지 처리 날짜 값 없음 */}
            {/* <p className="textMd textInfo">{data.result.content}</p> */}
          </div>
        </div>
        {/* )} */}

        {/* TODO: 영구 정지 처리 상태 값이 없어서 버튼 동작하지 않도록 설정했음 */}
        <button
          onClick={() => setIsOpen(true)}
          disabled={true}
          className={`self-end textLg px-[24px] py-[14px] rounded-[8px] ${
            data.result.content
              ? "bg-[#FFDDDD] text-[#FF6868]"
              : "bg-[#FF6868] text-white"
          }`}
        >
          {data.status ? "영구 정지 해제" : "영구정지 처리"}
        </button>
      </div>

      <ModalComponent
        isOpen={isOpen}
        content="영구 정지를 진행하시겠습니까?"
        leftButtonText="네, 영구 정지를 진행합니다."
        leftButtonFunc={() => setIsOpen(false)}
        rightButtonText="취소"
        rightButtonFunc={() => setIsOpen(false)}
      />
    </main>
  );
}
