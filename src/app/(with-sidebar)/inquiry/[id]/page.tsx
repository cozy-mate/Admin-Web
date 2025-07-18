import { formatDateToKoreanLong } from "@/shared/utils/translateDate";
import { translateInquiryStatus } from "@/shared/utils/translateInquiryStatus";
import ReplyData from "./ui/replyData";
import ReplyInput from "./ui/replyInput";
import { getInquiryDetail } from "@/features/inquiry/inquiry";
// import { detailData } from "@/shared/mocks/inquiryData";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // const data = detailData;
  const data = await getInquiryDetail(Number(id));

  return (
    <main className="flex flex-col">
      <p className="self-start bg-[#F6F6F6] px-[16px] py-[4px] rounded-[6px] textMdSemibold textInfo mb-[8px]">
        {translateInquiryStatus(data.status)}
      </p>

      {/* TODO: 문의에 제목이 없기 때문에 어떤 타이포 디자인 쓸지 정해야 됨 */}
      <p className="titleSm textDefault mb-[24px]">{data.content}</p>

      {/* TODO: 문의에 제목이 없기 때문에 어떤 타이포 디자인 쓸지 정해야 됨 */}
      <p className="textMd textSub mb-[32px]">{data.content}</p>

      <p className="textMd textInfo">
        {data.nickname}, {formatDateToKoreanLong(data.createdAt)}
      </p>

      <div className="bg-[#EBEBEB] h-[1px] my-[32px]" />

      {data.status === "ANSWERED" ? <ReplyData data={data} /> : <ReplyInput />}
    </main>
  );
}
