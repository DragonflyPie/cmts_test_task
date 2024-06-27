//constants
import { DATE_FORMAT } from './constants';

//dependencies
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';

export const setDateInTable = (data?: string) => {
  dayjs.extend(utc);

  return !!data?.length ? dayjs(data).format(DATE_FORMAT) : null;
};

export const setArrayInTable = (arr?: number[]) => {
  return arr?.map((id, index) => (index + 1 !== arr.length ? `${id}, ` : id));
};
