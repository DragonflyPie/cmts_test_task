import { TableRef } from 'antd/es/table';
import { RefObject, useEffect, useState } from 'react';
import { TABLE_MIN_HEIGHT } from 'utils/constants';

export const useCalculateTableHeight = (tableRef: RefObject<TableRef>) => {
  const [tableHeight, setTableHeight] = useState(TABLE_MIN_HEIGHT);
  const top = tableRef.current?.nativeElement?.getBoundingClientRect().top;
  useEffect(() => {
    if (!top) {
      return;
    }
    const height = document.body.offsetHeight;
    const newHeight = height - top - 120;

    setTableHeight(newHeight < TABLE_MIN_HEIGHT ? TABLE_MIN_HEIGHT : newHeight);
  }, [tableRef, top]);
  return tableHeight + 'px';
};
