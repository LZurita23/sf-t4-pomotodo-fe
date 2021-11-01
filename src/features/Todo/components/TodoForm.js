import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import createTodoItem from '../../../models/TodoItem';
import { deleteCompletedTodos, postTodoData, selectTodoOrder } from '../todoSlice';

const uuid = require('uuid');

const TodoForm = () => {
  const textInput = useRef(null);
  const dispatch = useDispatch();

  let form;
  const [todoName, setTodoName] = useState('');
  const [todoDesc, setTodoDesc] = useState('');
  const [isShowingForm, setIsShowingForm] = useState(false);

  const todoOrder = useSelector(selectTodoOrder);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoName !== '' && todoDesc !== '') {
      const id = uuid.v4();
      dispatch(
        postTodoData(createTodoItem(id, todoName, todoDesc)),
      );
      setTodoName('');
      setTodoDesc('');
      textInput.current.focus();
    }
  };

  const toggleForm = () => {
    setIsShowingForm(!isShowingForm);
  };

  if (!isShowingForm) {
    form = (
      <button type="button" onClick={toggleForm} className="placeholder-text mt-4">
        Edit items
      </button>
    );
  } else {
    form = (
      <form className="flex justify-between mt-4" onSubmit={handleSubmit}>
        <div>
          <input
            name="todo-input-name"
            type="text"
            placeholder="Name"
            value={todoName}
            onChange={({ target }) => {
              setTodoName(target.value);
            }}
            ref={textInput}
          />
          <input
            name="todo-input-desc"
            type="text"
            placeholder="Description"
            value={todoDesc}
            onChange={({ target }) => {
              setTodoDesc(target.value);
            }}
          />
        </div>
        <div className="text-right">
          <input type="submit" value="Add" className="ml-4" />
          <button
            type="button"
            onClick={() => {
              if (todoOrder.length > 0) {
                dispatch(deleteCompletedTodos());
              }
            }}
            className="ml-4"
          >
            Rem
          </button>
          <button
            type="button"
            onClick={toggleForm}
            className="ml-4"
          >
            Done
          </button>
        </div>
      </form>
    );
  }

  return form;
};

export default TodoForm;
