import { SerializedError } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

//api settings
export interface IRequest {
  status: 'idle' | 'pending' | 'fulfilled' | 'failed';
  error: SerializedError;
}

export type TStatus = 'idle' | 'pending' | 'fulfilled' | 'failed';

//table settings
export interface IPagination {
  page: number;
  pageSize: number;
  total: number;
}

export type TSorterOperator = 'ASC' | 'DESC';

export interface ISorter {
  key: string;
  direction: TSorterOperator;
}

export type TFixedOperator = 'left' | 'right';

export interface IFixed {
  key: string;
  fixed: TFixedOperator;
}

export interface ColumnHeader {
  key: string;
  text: string;
  render?: (data: any) => ReactNode;
  width: number;
  align?: AlignSetting;
  dataIndex?: string;
}

export interface GetDataArgs {
  sorter?: ISorter;
  page: number;
  pageSize: number;
}

export interface Return<T> {
  data: T[];
  total: number;
}
