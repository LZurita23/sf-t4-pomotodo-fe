import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const todoAPI = {
  fetchAll: () => axios
    .get(`${baseURL}/api/todo-data`)
    .then((response) => response.data),

  postTodo: (newTodo) => axios
    .post(`${baseURL}/api/todo-data`, newTodo)
    .then((response) => response.data),

  updateTodo: (id, options) => axios
    .patch(`${baseURL}/api/todo-data/${id}`, options)
    .then((response) => response.data),

  updateOrder: (options) => axios
    .patch(`${baseURL}/api/todo-data`, options)
    .then((response) => response.data),

  deleteCompletedTodos: () => axios.delete(`${baseURL}/api/todo-data/completed`),
};

export default todoAPI;
