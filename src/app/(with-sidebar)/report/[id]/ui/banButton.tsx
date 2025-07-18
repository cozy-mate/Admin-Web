"use client";

import { ReportItem } from "@/shared/types/report";
import ModalComponent from "@/shared/ui/modal";
import { Fragment, useState } from "react";

export default function BanButton({ data }: { data: ReportItem }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <button
        onClick={() => setIsOpen(true)}
        className={`self-end textLg px-[24px] py-[14px] rounded-[8px] mt-[80px] ${
          data.isBanned
            ? "bg-[#FFDDDD] text-[#FF6868]"
            : "bg-[#FF6868] text-white cursor-pointer"
        }`}
      >
        {data.isBanned ? "영구 정지 해제" : "영구정지 처리"}
      </button>

      <ModalComponent
        isOpen={isOpen}
        content="영구 정지를 진행하시겠습니까?"
        leftButtonText="네, 영구 정지를 진행합니다."
        leftButtonFunc={() => setIsOpen(false)}
        rightButtonText="취소"
        rightButtonFunc={() => setIsOpen(false)}
      />
    </Fragment>
  );
}
