import counterReducer from './features/counter/Counter_slice.js';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});
