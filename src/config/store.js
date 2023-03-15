import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/Counter/slice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
