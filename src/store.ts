import { init, RematchRootState } from '@rematch/core';
import * as models from './models';

const store = init({
  models,
});

export type Store = typeof store
export type Dispatch = typeof store.dispatch
export type iRootState = RematchRootState<typeof models>

export default store;
