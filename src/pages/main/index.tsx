import GoogleIcon from "@shared/assets/google.svg";

export default function MainPage() {
  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/admin/auth/login`;
  };

  return (
    <main className="w-dvw h-dvh flex flex-col justify-center items-center gap-y-[80px] pb-[120px]">
      <div>
        <p className="titleLg textDefault text-center">어서오세요,</p>
        <p className="titleLg textDefault text-center">
          cozymate 관리자 페이지입니다
        </p>
      </div>

      <button
        onClick={handleLogin}
        className="w-[440px] flex flex-row items-center gap-x-[16px] p-[16px] border-2 border-[#BABABA] rounded-[10px] cursor-pointer"
      >
        <img src={GoogleIcon} alt="구글 아이콘" />
        <p className="text-[20px] font-medium text-black/54">
          Sign In with Google
        </p>
      </button>
    </main>
  );
}
