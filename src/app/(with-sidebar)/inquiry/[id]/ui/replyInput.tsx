"use client";

import { useState } from "react";

export default function ReplyInput() {
  const [answer, setAnswer] = useState<string>("");

  const handleAnswer = () => {
    console.log(answer);
  };

  return (
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
        //   onClick={() => mutate({ replyContent: answer, sendEmail: false })}
        onClick={handleAnswer}
        disabled={answer === ""}
        className={`self-end textLg px-[24px] py-[14px] rounded-[8px] ${
          answer === ""
            ? "bg-[#F6F6F6] textInfo"
            : "bg-[#68A4FF] text-white cursor-pointer"
        }`}
      >
        답변 완료
      </button>
    </div>
  );
}
