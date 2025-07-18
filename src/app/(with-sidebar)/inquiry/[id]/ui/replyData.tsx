import { InquiryItem } from "@/shared/types/inquiry";
import { formatDateToKoreanLong } from "@/shared/utils/translateDate";

export default function ReplyData({ data }: { data: InquiryItem }) {
  return (
    <div className="flex flex-col gap-y-[40px]">
      <div className="flex flex-col gap-y-[4px]">
        <p className="textMdBold textSub">답변 내용</p>
        <p className="textMd textInfo">{data.replyContent}</p>
      </div>

      <div className="flex flex-col gap-y-[4px]">
        <p className="textMdBold textSub">답변 완료 일자</p>
        <p className="textMd textInfo">
          {formatDateToKoreanLong(data.replyAt)}
        </p>
      </div>
    </div>
  );
}
