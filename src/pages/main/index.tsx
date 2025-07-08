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

      <button onClick={handleLogin}>클릭</button>
    </main>
  );
}
