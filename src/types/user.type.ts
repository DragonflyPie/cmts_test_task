import { SerializedError } from '@reduxjs/toolkit';
import { TStatus } from 'types/types';

export type TGender = 'MALE' | 'FEMALE';

export interface IUserItem {
  readonly id: number;
  name?: string;
  surname?: string;
  patronymic?: string;
  email?: string;
  phone?: string;
  gender?: TGender;
  login?: string;
}

export interface IUser {
  data: IUserItem[];
  status: TStatus;
  total: number;
  error: SerializedError;
}
