import type { InquiryDetailItem, InquiryItem } from "@shared/types/inquiry";

export type InquiryData = {
  data: InquiryItem[];
  totalPage: number;
};

export const data: InquiryData = {
  totalPage: 2,
  data: [
    {
      inquiryId: 1,
      title: "궁금한게 있는데",
      nickname: "델로",
      createdAt: "25. 02. 14",
      status: false,
    },
    {
      inquiryId: 2,
      title: "궁금한게 있는데",
      nickname: "델로",
      createdAt: "25. 02. 14",
      status: false,
    },
    {
      inquiryId: 3,
      title: "궁금한게 있는데",
      nickname: "델로",
      createdAt: "25. 02. 14",
      status: false,
    },
    {
      inquiryId: 4,
      title: "궁금한게 있는데",
      nickname: "델로",
      createdAt: "25. 02. 14",
      status: false,
    },
    {
      inquiryId: 5,
      title: "궁금한게 있는데",
      nickname: "델로",
      createdAt: "25. 02. 14",
      status: false,
    },
    {
      inquiryId: 6,
      title: "궁금한게 있는데",
      nickname: "델로",
      createdAt: "25. 02. 14",
      status: false,
    },
    {
      inquiryId: 7,
      title: "궁금한게 있는데",
      nickname: "델로",
      createdAt: "25. 02. 14",
      status: false,
    },
    {
      inquiryId: 8,
      title: "궁금한게 있는데",
      nickname: "델로",
      createdAt: "25. 02. 14",
      status: false,
    },
    {
      inquiryId: 9,
      title: "궁금한게 있는데",
      nickname: "델로",
      createdAt: "25. 02. 14",
      status: false,
    },
    {
      inquiryId: 10,
      title: "궁금한게 있는데",
      nickname: "델로",
      createdAt: "25. 02. 14",
      status: false,
    },
    {
      inquiryId: 11,
      title: "궁금한게 있는데",
      nickname: "델로",
      createdAt: "25. 02. 14",
      status: false,
    },
    {
      inquiryId: 12,
      title: "궁금한게 있는데",
      nickname: "델로",
      createdAt: "25. 02. 14",
      status: false,
    },
  ],
};

export const detailData: InquiryDetailItem = {
  inquiryId: 1,
  title: "궁금한게 있는데",
  content: "어쩌구 저저구 샬라샬라?",
  nickname: "델로",
  createdAt: "2025년 1월 24일",
  email: "delo@cozymate.com",
  status: false,
};
