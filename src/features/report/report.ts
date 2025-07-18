// 코지메이트 전체 신고 리스트 조회
export const getReportList = async (page: number, size: number) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/admin/reports`);
  url.searchParams.set("page", String(page));
  url.searchParams.set("size", String(size));

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("신고 리스트 조회 실패");
  }

  return res.json();
};

// 코지메이트 특정 신고 조회
export const getReportDetail = async (reportId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/reports/${reportId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error("신고 상세 조회 실패");
  }

  return res.json();
};

// 영구정지 상태 변경
export const banMember = async (reportId: number, isBanned: boolean) => {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/reports/${reportId}`
  );
  url.searchParams.set("params", String(isBanned));

  const res = await fetch(url.toString(), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: null, // PATCH에 body가 없을 경우 null 사용
  });

  if (!res.ok) {
    throw new Error("회원 정지 상태 변경 실패");
  }

  return res.json();
};
