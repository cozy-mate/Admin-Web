export type Pagination<T> = {
  page: number;
  hasNext: boolean;
  result: T;
  totalElement: number;
  totalPage: number;
};
