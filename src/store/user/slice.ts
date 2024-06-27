//dependencies
import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './middleware';

//types
import { IUser } from 'types/user.type';

const initialState = {
  data: [],
  total: 0,
  status: 'idle',
  error: {},
} as IUser;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.data = action.payload.data;
      state.total = action.payload.total;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = action.error;
      state.status = 'failed';

      console.log('Failed to load user data');
    });
  },
});

export default userSlice.reducer;
