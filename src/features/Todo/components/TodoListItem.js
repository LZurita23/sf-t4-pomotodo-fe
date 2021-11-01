import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { updateTodos, toggleItemCompletion } from '../todoSlice';

const TodoListItem = ({
  index,
  todoName,
  todoDesc,
  id,
  completed,
  pomodoroCount,
}) => {
  let body;
  let nameSize;
  let showPomodoroCount;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(!isEditing);
  };

  if (index === 0) {
    nameSize = 'text-3xl';
    showPomodoroCount = (
      <span>
        <span className="mr-2">{`${pomodoroCount} Pomodoros`}</span>
        <span className="mr-2">/</span>
      </span>
    );
  } else {
    nameSize = 'text-xl';
    showPomodoroCount = null;
  }

  if (isEditing) {
    body = (
      <form className="flex justify-between mt-4" onSubmit={handleSubmit}>
        <div>
          <input
            name="todo-input-name"
            type="text"
            placeholder="New Item"
            value={todoName}
            onChange={({ target }) => {
              dispatch(updateTodos(id, { name: target.value }));
            }}
            className={`${nameSize} font-medium w-60`}
          />
          <input
            name="todo-input-desc"
            type="text"
            placeholder="New description"
            value={todoDesc}
            onChange={({ target }) => {
              dispatch(updateTodos(id, { desc: target.value }));
            }}
            className="text-gray-400 text-sm"
          />
        </div>
        <div className="text-right">
          <input type="submit" value="Apply" />
        </div>
      </form>
    );
  } else {
    body = (
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <li
            className="flex justify-between mt-6"
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div>
              <p
                onClick={() => dispatch(toggleItemCompletion(id, !completed))}
                className={`${nameSize} font-medium ${
                  completed ? 'line-through' : ''
                }`}
              >
                {todoName}
              </p>
              <p className="text-gray-400 text-sm">
                {showPomodoroCount}
                {todoDesc}
              </p>
            </div>
            <div className="text-gray-400 flex mr-2">
              <div>
                <button type="button" onClick={handleEdit}>
                  ...
                </button>
                <p {...provided.dragHandleProps} className="text-xl">
                  =
                </p>
              </div>
            </div>
          </li>
        )}
      </Draggable>
    );
  }

  return body;
};

export default TodoListItem;
