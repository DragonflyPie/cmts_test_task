import type { RootState } from 'store/store';

export const selectUsers = (state: RootState) => state.user.data;
export const selectTotal = (state: RootState) => state.user.total;
export const selectLoading = (state: RootState) => state.user.status === 'pending';
