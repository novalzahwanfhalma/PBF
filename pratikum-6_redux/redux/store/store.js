import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { RootState as CounterState } from '../counter/naikTurunSlice';
import authReducer from '../auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

// 1. Gabungkan reducers menjadi satu rootReducer
const rootReducer = combineReducers({
   auth: authReducer,
   counter: counterReducer,
});

// 2. Konfigurasi redux-persist
const persistConfig = {
   key: "belajar_nextjs_di_PBF",
   storage,
   whitelist: ['auth'],
};

// 3. Buat persistedReducer dengan persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Buat store dengan configureStore
const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: ['persist/PERSIST'],
         },
      }),
});

// 5. Buat persistor untuk menyimpan data yang dipersistensikan
const persistor = persistStore(store);

export { store, persistor ,authReducer ,CounterState};
