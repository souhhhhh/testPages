import { combineReducers, configureStore } from '@reduxjs/toolkit'


import {photosSlice} from './slice/photosSlice'
import {api} from './api/getPhotos'
import { likeSlice } from './slice/likeSlice'
import { StoreSchema } from './types/storeType'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['like']
}


const rootReducer = combineReducers<StoreSchema>({
  photos: photosSlice.reducer,
  like: likeSlice.reducer,
  [api.reducerPath]: api.reducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  //@ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})


export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type TypeRootState = ReturnType<typeof rootReducer>;