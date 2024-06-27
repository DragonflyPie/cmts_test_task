import { useState } from 'react';
import { ISorter } from 'types/types';

const useSort = () => {
  const [sorter, setSorter] = useState<ISorter | undefined>();

  const onChangeSorter = (newSort?: ISorter) => {
    setSorter(newSort);
  };

  return { sorter, onChangeSorter };
};

export default useSort;
