import { useState } from "react";
import { useGetInquiryDetail } from "@/features/inquiry/model/inquiry";
import { useLocation } from "react-router-dom";
import { formatDateToYYMMDD } from "@/shared/lib/translateDate";
import { translateInquiryStatus } from "@/shared/lib/translateInquiryStatus";

export default function InquiryDetailPage() {
  const { pathname } = useLocation();
  const id = pathname.split("/").filter(Boolean).pop();

  const { data } = useGetInquiryDetail(Number(id));

  const [answer, setAnswer] = useState<string>("");

  return (
    <main className="flex flex-col">
      <p className="self-start bg-[#F6F6F6] px-[16px] py-[4px] rounded-[6px] textMdSemibold textInfo mb-[8px]">
        {translateInquiryStatus(data.result.status)}
      </p>

      {/* <p className="titleSm textDefault mb-[24px]">{data.}</p> */}

      <p className="textMd textSub mb-[32px]">{data.result.content}</p>

      <p className="textMd textInfo">
        {data.result.nickname}, {formatDateToYYMMDD(data.result.createdAt)}
      </p>

      <div className="bg-[#EBEBEB] h-[1px] my-[32px]" />

      <div className="flex flex-col gap-y-[40px]">
        <div className="flex flex-col gap-y-[4px]">
          <p className="textMdBold textSub">답변 요청 이메일 주소</p>
          <p className="textMd textInfo">{data.result.replyEmail}</p>
        </div>

        {data.result.status === "답변 완료" ? (
          <div className="flex flex-col gap-y-[40px]">
            <div className="flex flex-col gap-y-[4px]">
              <p className="textMdBold textSub">답변 내용</p>
              <p className="textMd textInfo">{data.result.replyContent}</p>
            </div>

            <div className="flex flex-col gap-y-[4px]">
              <p className="textMdBold textSub">답변 완료 일자</p>
              <p className="textMd textInfo">{data.result.replyAt}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-y-[120px]">
            <div className="flex flex-col gap-y-[4px]">
              <p className="textMdBold textSub">답변 내용</p>
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="답변 내용을 입력해주세요"
                className="bg-[#F3F3F3] h-[400px] p-[16px] rounded-[8px] resize-none textMd text-[#6C6C77]"
              />
            </div>

            <button
              className={`self-end textLg px-[24px] py-[14px] rounded-[8px] ${
                answer === ""
                  ? "bg-[#F6F6F6] textInfo"
                  : "bg-[#68A4FF] text-white"
              }`}
            >
              답변 완료
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
