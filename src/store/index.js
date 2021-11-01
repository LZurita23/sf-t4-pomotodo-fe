import { configureStore } from '@reduxjs/toolkit';
import timerReducer from '../features/Timer/timerSlice';
import todoReducer from '../features/Todo/todoSlice';

export default configureStore({
  reducer: {
    timer: timerReducer,
    todo: todoReducer,
  },
});
