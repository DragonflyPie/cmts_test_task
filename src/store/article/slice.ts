//dependencies
import { createSlice } from '@reduxjs/toolkit';
import { getArticles } from './middleware';

//types
import { IUser } from 'types/user.type';

const initialState = {
  data: [],
  total: 0,
  status: 'idle',
  error: {},
} as IUser;

export const userSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.data = action.payload.data;
      state.total = action.payload.total;
    });
    builder.addCase(getArticles.rejected, (state, action) => {
      state.error = action.error;
      state.status = 'failed';

      console.log('Failed to load article data');
    });
  },
});

export default userSlice.reducer;
