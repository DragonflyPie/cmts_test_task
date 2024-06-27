//dependencies
import { createAsyncThunk } from '@reduxjs/toolkit';

//types
import { IArticleItem } from 'types/article.type';

//data
import { GetDataArgs, ISorter, Return } from 'types/types';
import { getPageData, sortData } from 'utils/transformData';
import { articles } from 'data/article';

export const getArticles = createAsyncThunk<Return<IArticleItem>, GetDataArgs>(
  'user/getUser',
  async (options, { rejectWithValue }) => {
    const { sorter, pageSize, page } = options;
    const total = articles.length;
    const promise: Promise<Return<IArticleItem>> = new Promise((resolve) => {
      const sortedArticles = sortData(articles, sorter as ISorter);
      const paginatedData = getPageData(sortedArticles, page, pageSize);

      setTimeout(() => {
        resolve({
          data: paginatedData,
          total,
        });
      }, 500);
    });

    try {
      return await promise;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
