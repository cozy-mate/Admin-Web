"use client";

import GoogleIcon from "@/shared/assets/google.svg";
import Image from "next/image";
// import { useRouter } from "next/navigation";

export default function GoogleButton() {
  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/admin/auth/login`;
  };

  // const router = useRouter();

  // const handleTest = () => {
  //   router.push("/inquiry");
  // };

  return (
    <button
      onClick={handleLogin}
      // onClick={handleTest}
      className="lg:w-[440px] flex flex-row items-center gap-x-[16px] p-[16px] border border-[#BABABA] rounded-[10px] cursor-pointer"
    >
      <Image src={GoogleIcon} alt="구글 아이콘" />
      <p className="text-[20px] font-medium text-black/54">
        Sign In with Google
      </p>
    </button>
  );
}
