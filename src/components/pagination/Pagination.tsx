//components
import { Pagination as AntdPagination } from 'antd';

//style
import styles from './Pagination.module.scss';

const Pagination: React.FC<{
  total?: number;
  page: number;
  pageSize: number;
  onChangePage: (page: number) => void;
  onChangePageSize: (pageSize: number) => void;
}> = ({ total, page, pageSize, onChangePage, onChangePageSize }) => {
  const changePage = (page: number) => {
    onChangePage(page - 1);
  };

  const changePageSize = (_: number, pageSize: number) => {
    onChangePageSize(pageSize);
  };

  return (
    <div className={styles.wrapper}>
      <AntdPagination
        showQuickJumper
        showSizeChanger
        total={total}
        current={page + 1}
        pageSize={pageSize}
        onChange={changePage}
        onShowSizeChange={changePageSize}
      />
    </div>
  );
};

export default Pagination;
