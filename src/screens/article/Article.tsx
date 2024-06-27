import { useAppDispatch, useAppSelector } from 'store/hooks';
import { articlesColumnHeaders } from 'utils/columns';
import { GetDataArgs } from 'types/types';
import { selectArticles, selectLoading, selectTotal } from 'store/article/selector';
import { getArticles } from 'store/article/middleware';
import Table from 'components/table/Table';
import { useCallback } from 'react';

const Article = () => {
  const articlesLoading = useAppSelector(selectLoading);
  const articlesData = useAppSelector(selectArticles);
  const articlesTotal = useAppSelector(selectTotal);
  const dispatch = useAppDispatch();

  const getArticlesData = useCallback(
    ({ sorter, page, pageSize }: GetDataArgs) => {
      dispatch(getArticles({ sorter, page, pageSize }));
    },
    [dispatch],
  );

  return (
    <Table
      loading={articlesLoading}
      total={articlesTotal}
      data={articlesData}
      initColumns={articlesColumnHeaders}
      getData={getArticlesData}
    />
  );
};

export default Article;
