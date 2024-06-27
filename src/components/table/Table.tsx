//types
import type { ResizeCallbackData } from 'react-resizable';
import { ColumnsType } from 'antd/es/table';
import { ColumnHeader, GetDataArgs } from 'types/types';

//dependencies
import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import { Table as AntdTable, Button, Space, Tooltip } from 'antd';

//components
import Pagination from 'components/pagination/Pagination';

//constants
import { BUTTON_SIZE, BUTTON_TYPE, TABLE_MIN_HEIGHT } from 'utils/constants';

//styles
import style from './Table.module.scss';
import useTable from './useTable';
import Title from 'components/title/Title';
import ResizableTitle from './ResizableTitle';
import useSort from './useSort';
import usePagination from './usePageination';
import { IUserItem } from 'types/user.type';
import { IArticleItem } from 'types/article.type';
import { RedoOutlined } from '@ant-design/icons';

interface TableProps {
  loading?: boolean;
  initColumns: ColumnHeader[];
  total?: number;
  getData: (getDataArgs: GetDataArgs) => void;
  data: Array<IUserItem> | Array<IArticleItem>;
}

const Table = ({ loading, initColumns, total, data, getData }: TableProps) => {
  const [columns, setColumns] = useState<ColumnHeader[]>([]);
  const [height, setHeight] = useState('0px');
  const { page, pageSize, onChangePage, onChangePageSize } = usePagination();
  const { fixeds, hiddens, onChangeFixeds, onChangeHiddens } = useTable();
  const { sorter, onChangeSorter } = useSort();

  useEffect(() => {
    getData({ sorter, page, pageSize });
  }, [page, pageSize, sorter]);

  const refresh = () => {
    onChangeFixeds([]);
    onChangeHiddens([]);
    onChangeSorter(undefined);
    onChangePage(0);
  };

  const onResize =
    (index: number) =>
    (e: React.SyntheticEvent<Element, Event>, { size }: ResizeCallbackData) => {
      const newColumns = [...columns];

      newColumns[index] = {
        ...newColumns[index],
        width: size.width,
      };

      setColumns(newColumns);
    };

  const resizedColumns = columns.map((col, index) => {
    const fixedId = fixeds?.findIndex((el) => el.key === col.key);
    const isFixed = fixedId !== undefined && fixedId !== -1;

    const settings = {
      fixeds,
      hiddens,
      onChangeFixeds,
      onChangeHiddens,
      sorter: sorter,
      onChangeSorter,
    };

    return {
      ...col,
      hidden: hiddens?.includes(col.key as string),
      fixed: isFixed ? fixeds[fixedId].fixed : false,
      dataIndex: col.dataIndex,
      title: <Title text={col.text} column={col.key} settings={settings} />,
      onHeaderCell: (column: ColumnsType<any>[number]) => ({
        width: column.width,
        onResize: onResize(index) as React.ReactEventHandler<any>,
      }),
    };
  });

  const calculateTableHeight = () => {
    const table = document.querySelector('.ant-table')?.getBoundingClientRect();
    const height = document.body.offsetHeight;

    if (table !== undefined) {
      const tableHeight = height - table?.top - 120;

      return tableHeight < TABLE_MIN_HEIGHT ? TABLE_MIN_HEIGHT + 'px' : tableHeight + 'px';
    } else {
      return TABLE_MIN_HEIGHT + 'px';
    }
  };

  useEffect(() => {
    setHeight(calculateTableHeight);
  }, []);

  useEffect(() => {
    setColumns(initColumns);
  }, [initColumns]);

  return (
    <div className={style.wrapper__table}>
      <Space className={style.refresh}>
        <Tooltip title="Обновить">
          <Button type={BUTTON_TYPE} size={BUTTON_SIZE} icon={<RedoOutlined />} onClick={refresh} />
        </Tooltip>
      </Space>
      <div className={style.wrapper}>
        <AntdTable
          bordered
          showHeader
          rowKey="id"
          loading={loading}
          pagination={false}
          dataSource={data}
          columns={resizedColumns}
          className={style.table}
          components={{
            header: {
              cell: ResizableTitle,
            },
          }}
          scroll={{
            x: 'calc(100vw - 300px)',
            y: `calc(${height} - 64px)`,
          }}
          style={{ height, minHeight: TABLE_MIN_HEIGHT + 'px' }}
        />

        <Pagination
          total={total}
          page={page}
          pageSize={pageSize}
          onChangePage={onChangePage}
          onChangePageSize={onChangePageSize}
        />
      </div>
    </div>
  );
};

export default Table;
