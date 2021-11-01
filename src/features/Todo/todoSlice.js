import { createSlice } from '@reduxjs/toolkit';
import todoAPI from './todoAPI';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: {},
    order: [],
    loading: 'idle',
  },
  reducers: {
    todosLoading(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    todosReceived(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.todos = action.payload.todos;
        state.order = action.payload.order;
      }
    },
    updateTodoOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const selectTodos = (state) => state.todo.todos;
export const selectTodoOrder = (state) => state.todo.order;

export const { todosLoading, todosReceived, updateTodoOrder } = todoSlice.actions;

export const fetchTodoData = () => async (dispatch) => {
  dispatch(todosLoading());
  const response = await todoAPI.fetchAll();
  dispatch(todosReceived(response));
};

export const postTodoData = (newTodo) => async (dispatch) => {
  dispatch(todosLoading());
  await todoAPI.postTodo(newTodo);
  const response = await todoAPI.fetchAll();
  dispatch(todosReceived(response));
};

export const toggleItemCompletion = (id, completed) => async (dispatch) => {
  dispatch(todosLoading());
  await todoAPI.updateTodo(id, { completed });
  const response = await todoAPI.fetchAll();
  dispatch(todosReceived(response));
};

export const addPomodoro = (id, pomodoroCount) => async (dispatch) => {
  dispatch(todosLoading());
  await todoAPI.updateTodo(id, pomodoroCount);
  const response = await todoAPI.fetchAll();
  dispatch(todosReceived(response));
};

export const deleteCompletedTodos = () => async (dispatch) => {
  dispatch(todosLoading());
  await todoAPI.deleteCompletedTodos();
  const response = await todoAPI.fetchAll();
  dispatch(todosReceived(response));
};

export const updateTodos = (id, options) => async (dispatch) => {
  dispatch(todosLoading());
  await todoAPI.updateTodo(id, options);
  const response = await todoAPI.fetchAll();
  dispatch(todosReceived(response));
};

export const updateOrder = (options) => async (dispatch) => {
  dispatch(todosLoading());
  await todoAPI.updateOrder(options);
  const response = await todoAPI.fetchAll();
  dispatch(todosReceived(response));
};

export default todoSlice.reducer;
