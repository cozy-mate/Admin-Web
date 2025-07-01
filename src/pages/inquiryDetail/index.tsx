import { useState } from "react";
import { detailData } from "@shared/mocks/inquiryData";

export default function InquiryDetailPage() {
  const data = detailData;

  const [answer, setAnswer] = useState<string>("");

  return (
    <main className="flex flex-col">
      <p className="self-start bg-[#F6F6F6] px-[16px] py-[4px] rounded-[6px] textMdSemibold textInfo mb-[8px]">
        {data.status ? "답변 완료" : "답변 미완료"}
      </p>

      <p className="titleSm textDefault mb-[24px]">{data.title}</p>

      <p className="textMd textSub mb-[32px]">{data.content}</p>

      <p className="textMd textInfo">
        {data.nickname}, {data.createdAt}
      </p>

      <div className="bg-[#EBEBEB] h-[1px] my-[32px]" />

      <div className="flex flex-col gap-y-[40px]">
        <div className="flex flex-col gap-y-[4px]">
          <p className="textMdBold textSub">답변 요청 이메일 주소</p>
          <p className="textMd textInfo">{data.email}</p>
        </div>

        {data.status ? (
          <div className="flex flex-col gap-y-[40px]">
            <div className="flex flex-col gap-y-[4px]">
              <p className="textMdBold textSub">답변 내용</p>
              <p className="textMd textInfo">{data.email}</p>
            </div>

            <div className="flex flex-col gap-y-[4px]">
              <p className="textMdBold textSub">답변 완료 일자</p>
              <p className="textMd textInfo">{data.email}</p>
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
