import { configureStore } from '@reduxjs/toolkit';
import cityReducer from '../features/City/CitySlices';

export const store = configureStore({
  reducer: {
    store: cityReducer,
  },
});
