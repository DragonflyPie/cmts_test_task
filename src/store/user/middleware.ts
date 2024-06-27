//dependencies
import { createAsyncThunk } from '@reduxjs/toolkit';

//types
import { IUserItem } from 'types/user.type';

//data
import { users } from 'data/user';
import { GetDataArgs, ISorter, Return } from 'types/types';
import { getPageData, sortData } from 'utils/transformData';

export const getUsers = createAsyncThunk<Return<IUserItem>, GetDataArgs>(
  'user/getUser',
  async (options, { rejectWithValue }) => {
    const { sorter, pageSize, page } = options;
    const total = users.length;
    const promise: Promise<Return<IUserItem>> = new Promise((resolve) => {
      const sortedUsers = sortData(users, sorter as ISorter);
      const paginatedData = getPageData(sortedUsers, page, pageSize);

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
