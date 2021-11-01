const TodoItem = (id, name, desc) => {
  const todo = {};
  todo.name = name;
  todo.desc = desc;
  todo.id = id;
  todo.dateCreated = Date.now();
  todo.dateCompleted = null;
  todo.completed = false;
  todo.tags = [];
  todo.pomodoroCount = 0;

  return todo;
};

export default TodoItem;
