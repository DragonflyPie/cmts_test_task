import type { RootState } from 'store/store';

export const selectArticles = (state: RootState) => state.article.data;
export const selectTotal = (state: RootState) => state.article.total;
export const selectLoading = (state: RootState) => state.article.status === 'pending';
