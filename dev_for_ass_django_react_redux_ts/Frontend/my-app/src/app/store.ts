import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import associationSlice from '../slicers/developer/Association/associationSlice';
import developerSlice from '../slicers/developer/developerSlice';
import postsSlice  from '../slicers/developer/posts/postsSlice';

export const store = configureStore({
  reducer: {
    developer: developerSlice,
    association:associationSlice,
    post:postsSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
