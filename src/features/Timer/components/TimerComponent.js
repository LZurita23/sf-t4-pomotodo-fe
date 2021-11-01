import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import timesUp from '../../../assets/times-up.mp3';
import { addPomodoro, selectTodoOrder, selectTodos } from '../../Todo/todoSlice';
import {
  tick,
  setSeconds,
  toggleBreak,
  toggleActive,
  selectSeconds,
  selectIsOnBreak,
  selectIsActive,
} from '../timerSlice';

const Timer = () => {
  const dispatch = useDispatch();
  const isOnBreak = useSelector(selectIsOnBreak);
  const isActive = useSelector(selectIsActive);
  const seconds = useSelector(selectSeconds);

  const todoOrder = useSelector(selectTodoOrder);
  const todos = useSelector(selectTodos);

  let primaryTodoId;
  let primaryTodo;
  if (todoOrder.length > 0) {
    [primaryTodoId] = todoOrder;
    primaryTodo = todos[primaryTodoId];
  }

  const WORK_LIMIT = 1500;
  const BREAK_LIMIT = 300;

  function toggle() {
    dispatch(toggleActive());
  }

  function reset() {
    if (isActive === true || seconds !== WORK_LIMIT) {
      dispatch(setSeconds(WORK_LIMIT));
      dispatch(toggleActive(false));
      dispatch(toggleBreak('reset'));
    }
  }

  const changeSecondsAmount = useCallback(() => {
    if (isOnBreak) {
      dispatch(setSeconds(BREAK_LIMIT));
    } else {
      dispatch(setSeconds(WORK_LIMIT));
    }
  }, [dispatch, isOnBreak]);

  const playAudio = () => {
    const audioEl = document.getElementsByClassName('audio-element')[0];
    audioEl.play();
  };

  useEffect(() => {
    let interval = null;

    if (seconds === 0) {
      if (isOnBreak) {
        dispatch(addPomodoro(primaryTodoId, { pomodoroCount: primaryTodo.pomodoroCount + 1 }));
      }
      dispatch(toggleActive(false));
      dispatch(toggleBreak());
      changeSecondsAmount();
      playAudio();
    }
    if (isActive) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [dispatch,
    isActive,
    seconds,
    isOnBreak,
    changeSecondsAmount,
    primaryTodoId,
    primaryTodo,
  ]);

  return (
    <div className="text-center">
      <audio className="audio-element">
        <source src={timesUp} />
      </audio>
      <h1 className="text-6xl sm:mt-10">
        {`${Math.floor(seconds / 60)}:${
          seconds % 60 < 10
            ? `0${seconds % 60}`
            : seconds % 60
              ? seconds % 60
              : '00'
        }`}
      </h1>
      <div>
        <button type="button" className="m-4" onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button type="button" className="m-4" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
