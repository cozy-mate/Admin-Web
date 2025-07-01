import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <main className="w-dvw h-dvh flex flex-col justify-center items-center gap-y-[80px] pb-[120px]">
      <div onClick={() => navigate("/inquiry")}>
        <p className="titleLg textDefault text-center">어서오세요,</p>
        <p className="titleLg textDefault text-center">
          cozymate 관리자 페이지입니다
        </p>
      </div>

      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.error("Failed Login..");
        }}
      />
    </main>
  );
}
