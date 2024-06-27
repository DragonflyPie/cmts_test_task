import { ISorter } from 'types/types';

export function sortData<T>(data: T[], sorter?: ISorter) {
  if (!sorter || !sorter.direction || !sorter.key) {
    return data;
  }

  const newArr = [...data];
  if (sorter.direction === 'ASC') {
    return newArr.sort((a: any, b: any) => a[sorter.key].localeCompare(b[sorter.key]));
  }

  return newArr.sort((a: any, b: any) => b[sorter.key].localeCompare(a[sorter.key]));
}

export function getPageData(data: Array<any>, page: number, pageSize: number) {
  const start = page * pageSize;
  const end = start + pageSize;
  return data.slice(start, end);
}
