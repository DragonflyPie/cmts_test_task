//types
import { ISorter, TSorterOperator, TFixedOperator, IFixed } from 'types/types';

//styles
import { WrapperStyled, TitleStyled } from './Title.style';

//dependencies
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps } from 'antd';

interface TitleProps {
  text: string;
  column: string;
  settings: {
    sorter?: ISorter;
    onChangeSorter: (newSort?: ISorter) => void;
    fixeds?: IFixed[];
    onChangeFixeds: (fixeds: IFixed[]) => void;
    hiddens?: string[];
    onChangeHiddens: (hiddens: string[]) => void;
  };
}

const Title = ({
  text,
  column,
  settings: { hiddens, onChangeFixeds, onChangeHiddens, fixeds, sorter, onChangeSorter },
}: TitleProps) => {
  //hiddens
  const onChangeHide = () => {
    if (!!hiddens) {
      const newHiddens = [...hiddens];
      const id = hiddens.findIndex((el) => el === column);

      id !== -1 ? newHiddens.splice(id, 1) : newHiddens.push(column);

      onChangeHiddens(newHiddens);
    }
  };

  //fixeds
  const onChangeFix = (operator: TFixedOperator = 'left') => {
    if (!!fixeds) {
      const newFixeds = [...fixeds];
      const id = fixeds.findIndex((el) => el.key === column);

      id !== -1 ? newFixeds.splice(id, 1) : newFixeds.push({ key: column, fixed: operator });

      onChangeFixeds(newFixeds);
    }
  };

  const items: MenuProps['items'] = [
    !!hiddens && fixeds?.findIndex((el) => el.key === column) === -1
      ? {
          key: '1',
          label: 'Скрыть',
          onClick: onChangeHide,
        }
      : null,
    fixeds?.findIndex((el) => el.key === column) === -1
      ? {
          key: '2',
          label: 'Закрепить',
          children: [
            {
              key: '1-1',
              label: 'Слева',
              onClick: () => onChangeFix(),
            },
            {
              key: '1-2',
              label: 'Справа',
              onClick: () => onChangeFix('right'),
            },
          ],
        }
      : !!fixeds
        ? {
            key: '3',
            label: 'Открепить',
            onClick: () => onChangeFix(),
          }
        : null,
  ];

  const switchDirection = (direction?: TSorterOperator) => {
    switch (direction) {
      case undefined:
        return 'ASC';
      case 'ASC':
        return 'DESC';
      case 'DESC':
        return undefined;
      default:
        return undefined;
    }
  };

  const isSorted = sorter?.key === column;

  const onClickTitle = () => {
    const newDirection = switchDirection(sorter?.direction);
    if (!isSorted) {
      onChangeSorter({
        key: column,
        direction: 'ASC',
      });
      return;
    }

    if (newDirection === undefined) {
      onChangeSorter(undefined);
      return;
    }

    onChangeSorter({
      key: column,
      direction: newDirection as TSorterOperator,
    });
  };

  return (
    <Dropdown menu={{ items }} trigger={['contextMenu']}>
      <WrapperStyled>
        <TitleStyled
          className="filterTitle"
          onClick={onClickTitle}
          style={{ cursor: 'pointer', flexGrow: '1' }}
        >
          <div style={{ display: 'flex', gap: '5px' }}>
            {text}
            {isSorted && sorter?.direction === 'ASC' && <SortAscendingOutlined />}
            {isSorted && sorter?.direction === 'DESC' && <SortDescendingOutlined />}
          </div>
        </TitleStyled>
      </WrapperStyled>
    </Dropdown>
  );
};

export default Title;
