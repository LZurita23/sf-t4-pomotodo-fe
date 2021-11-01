import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    seconds: 1500,
    isOnBreak: true,
    isActive: false,
  },
  reducers: {
    tick: (state) => {
      state.seconds -= 1;
    },
    setSeconds: (state, action) => {
      state.seconds = action.payload;
    },
    toggleBreak: (state, action) => {
      if (action.payload === 'reset') {
        state.isOnBreak = true;
      } else {
        state.isOnBreak = !state.isOnBreak;
      }
    },
    toggleActive: (state, action) => {
      if (action.payload === false) {
        state.isActive = false;
      } else {
        state.isActive = !state.isActive;
      }
    },
  },
});

export const selectSeconds = (state) => state.timer.seconds;
export const selectIsOnBreak = (state) => state.timer.isOnBreak;
export const selectIsActive = (state) => state.timer.isActive;

export const {
  tick,
  setSeconds,
  toggleBreak,
  toggleActive,
} = timerSlice.actions;

export default timerSlice.reducer;
