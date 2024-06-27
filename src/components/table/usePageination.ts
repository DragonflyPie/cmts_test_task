import { useState } from 'react';

const usePagination = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const onChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const onChangePageSize = (newPageSize: number) => {
    setPageSize(newPageSize);
  };
  return { onChangePage, page, pageSize, onChangePageSize };
};

export default usePagination;
