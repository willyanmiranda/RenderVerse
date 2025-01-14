import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './features/photos/photos'

export default configureStore({
  reducer: {
    photos: photosReducer,
  },
});