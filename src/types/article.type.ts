import { IPagination, ISorter, IFixed, IRequest } from 'types/types';

export interface Dimension {
  length: number | null;
  width: number | null;
  height: number | null;
  volume?: number | null;
  weight?: number | null;
  weightTolerance?: number | null;
  internalLength?: number | null;
  internalWidth?: number | null;
  internalHeight?: number | null;
}

export interface IArticleItem {
  readonly id: number;
  number: string;
  name: string;
  expirationTime?: number | null;
  gtin: string;
  groups?: string[];
  unitOfMeasure: string;
  owner?: string;
  dimension: Dimension;
  accountingBySeries: boolean;
  accountingByQuantLot: boolean;
  createDate: string;
  updateDate?: string;
  version: number;
}

export interface IArticle {
  data: IArticleItem[];
  pagination: IPagination;
  sorters: ISorter[];
  hiddens: string[];
  fixeds: IFixed[];
  get: IRequest;
  loading: boolean;
}
