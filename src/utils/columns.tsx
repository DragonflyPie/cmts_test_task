import { ColumnHeader } from 'types/types';
import { setArrayInTable, setDateInTable } from './formats';
import { Checkbox } from 'antd';

export const userColumnHeaders: ColumnHeader[] = [
  {
    key: 'name',
    dataIndex: 'name',
    text: 'Имя',
    width: 200,
  },
  {
    key: 'surname',
    dataIndex: 'surname',
    text: 'Фамилия',
    width: 200,
  },
  {
    key: 'patronymic',
    dataIndex: 'patronymic',
    text: 'Отчество',
    width: 200,
  },
  {
    key: 'gender',
    dataIndex: 'gender',
    text: 'Пол',
    width: 200,
  },
  {
    key: 'email',
    dataIndex: 'email',
    text: 'E-mail',
    width: 200,
  },
  {
    key: 'phone',
    dataIndex: 'phone',
    text: 'Телефон',
    width: 200,
  },
];

export const articlesColumnHeaders: ColumnHeader[] = [
  {
    key: 'number',
    dataIndex: 'number',
    text: 'Номер',
    width: 200,
  },
  {
    key: 'name',
    dataIndex: 'name',
    width: 200,
    text: 'Название',
  },
  {
    key: 'expirationTime',
    dataIndex: 'expirationTime',
    width: 200,
    text: 'Срок годности',
  },
  {
    key: 'gtin',
    dataIndex: 'gtin',
    width: 200,
    text: 'GTIN',
  },
  {
    key: 'groups',
    dataIndex: 'groups',
    width: 200,
    text: 'Артикульные группы',
    render: (data) => setArrayInTable(data),
  },
  {
    key: 'unitOfMeasure',
    dataIndex: 'unitOfMeasure',
    width: 200,
    text: 'Единица измерения',
  },
  {
    key: 'owner',
    dataIndex: 'owner',
    width: 200,
    text: 'Владелец',
  },
  {
    key: 'length',
    width: 200,
    text: 'Длина',
    dataIndex: 'dimension',
    render: (data) => data?.length,
  },
  {
    key: 'width',
    width: 200,
    text: 'Ширина',
    dataIndex: 'dimension',
    render: (data) => data?.width,
  },
  {
    key: 'height',
    width: 200,
    text: 'Высота',
    dataIndex: 'dimension',
    render: (data) => data?.height,
  },
  {
    key: 'accountingBySeries',
    dataIndex: 'accountingBySeries',
    width: 200,
    align: 'center',
    text: 'Cерийный номер',
    render: (data) => <Checkbox checked={data} />,
  },
  {
    key: 'accountingByQuantLot',
    dataIndex: 'accountingByQuantLot',
    width: 200,
    align: 'center',
    text: 'Партия',
    render: (data) => <Checkbox checked={data} />,
  },
  {
    key: 'createDate',
    dataIndex: 'createDate',
    width: 200,
    text: 'Дата создания',
    render: (data) => setDateInTable(data),
  },
  {
    key: 'updateDate',
    dataIndex: 'updateDate',
    width: 200,
    text: 'Дата изменения',
    render: (data) => setDateInTable(data),
  },
];
