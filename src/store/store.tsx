import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import notesReducer from './notesSlice/notesSlice'

// export const store = configureStore({
//   reducer: {
//     notes: notesReducer,
//   },
// })

const persistConfig = { key: 'root', storage, version: 1 }
const persistedReducder = persistReducer(persistConfig, notesReducer)
export const store = configureStore({
  reducer: {
    notes: persistedReducder,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
