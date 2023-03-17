import { configureStore } from '@reduxjs/toolkit';
import bridgeReducer from '../redux/bridge';

export default configureStore({
  reducer: {
    bridge: bridgeReducer,
  },
});
