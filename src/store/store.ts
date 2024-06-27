import articleSlice from './article/slice';
import userSlice from './user/slice';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		article: articleSlice,
		user: userSlice,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
