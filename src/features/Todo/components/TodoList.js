import React from 'react';
import { useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import TodoListItem from './TodoListItem';
import { selectTodos, selectTodoOrder } from '../todoSlice';

const uuid = require('uuid');

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const todoOrder = useSelector(selectTodoOrder);

  if (todos) {
    return (
      <ul>
        <Droppable droppableId={uuid.v4()}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todoOrder.map((id, index) => {
                const todo = todos[id];
                return (
                  <TodoListItem
                    index={index}
                    key={todo.id}
                    id={todo.id}
                    todoName={todo.name}
                    todoDesc={todo.desc}
                    completed={todo.completed}
                    pomodoroCount={todo.pomodoroCount}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </ul>
    );
  }
  return null;
};

export default TodoList;
