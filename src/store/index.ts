import { configureStore } from '@reduxjs/toolkit'
import userInfoSlice from './modules/userInfo'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'userInfo',
  version: 1,
  storage,
  // whitelist: ["counter"], // 字段白名单，意思是只持久化counter这个字段
}

const store = configureStore({
  reducer: {
    userInfo: persistReducer(persistConfig, userInfoSlice),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
persistStore(store)

export default store
