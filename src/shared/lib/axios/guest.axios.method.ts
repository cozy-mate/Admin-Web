import { type AxiosResponse, type AxiosRequestConfig } from "axios";

import guestAxiosInstance from "./guest.axios.Instance";

export const GuestPostAxiosInstance = async <T>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await guestAxiosInstance.post(url, data, config);
  return response;
};

export const GuestGetAxiosInstance = async (
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await guestAxiosInstance.get(url, config);
  return response;
};

export const GuestPatchAxiosInstance = async <T>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await guestAxiosInstance.patch(url, data, config);
  return response;
};

export const GuestDeleteAxiosInstance = async (
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await guestAxiosInstance.delete(url, config);
  return response;
};

export const GuestPutAxiosInstance = async <T>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await guestAxiosInstance.put(url, data, config);
  return response;
};
