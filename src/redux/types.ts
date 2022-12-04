import { store } from './store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type DispatchActionType = Parameters<AppDispatch>[0];
export type StoreType = typeof store;
