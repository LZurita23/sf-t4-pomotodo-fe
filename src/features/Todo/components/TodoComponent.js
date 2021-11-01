import { useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {
  updateTodoOrder,
  updateOrder,
  selectTodoOrder,
  fetchTodoData,
} from '../todoSlice';

const Todo = () => {
  const dispatch = useDispatch();
  const todoOrder = useSelector(selectTodoOrder);

  useEffect(() => {
    dispatch(fetchTodoData());
  }, [dispatch]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId
      && destination.index === source.index
    ) {
      return;
    }

    const newTaskIds = Array.from(todoOrder);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);
    dispatch(updateTodoOrder(newTaskIds));
    dispatch(updateOrder({ order: newTaskIds }));
  };

  return (
    <div>
      <TodoForm />
      <DragDropContext onDragEnd={onDragEnd}>
        <TodoList />
      </DragDropContext>
    </div>
  );
};

export default Todo;
