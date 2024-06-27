import { useState } from 'react';
import { IFixed } from 'types/types';

const useTable = () => {
  const [hiddens, setHiddens] = useState<string[]>([]);
  const [fixeds, setFixeds] = useState<IFixed[]>([]);

  const onChangeHiddens = (hiddens: string[]) => {
    setHiddens(hiddens);
  };

  const onChangeFixeds = (fixeds: IFixed[]) => {
    setFixeds(fixeds);
  };

  return { fixeds, hiddens, onChangeFixeds, onChangeHiddens };
};

export default useTable;
