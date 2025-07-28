import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Image src="/loading.gif" alt="Loading..." width={60} height={60} />
    </div>
  );
}
