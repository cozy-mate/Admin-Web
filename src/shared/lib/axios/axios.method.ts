import { type AxiosRequestConfig, type AxiosResponse } from "axios";

import axiosInstance from "./axios.Instance";

export const PostAxiosInstance = async <T>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await axiosInstance.post(url, data, config);
  return response;
};

export const GetAxiosInstance = async (
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await axiosInstance.get(url, config);
  return response;
};

export const PatchAxiosInstance = async <T>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await axiosInstance.patch(url, data, config);
  return response;
};

export const DeleteAxiosInstance = async (
  url: string
  // data: T,
  // config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await axiosInstance.delete(url);
  return response;
};

export const PutAxiosInstance = async <T>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await axiosInstance.put(url, data, config);
  return response;
};
