import { Todos } from '../Todo.tsx';
import TodoItem from '../TodoItem/TodoItem.tsx';

interface TodoListProps {
  todos: Todos[];
  activateEditTodo: (todoId: string) => void;
  updateTodo: (todoId: string, updatedTask: string) => void;
  deleteTodo: (id: string) => void;
}

export default function TodoList({
  todos,
  activateEditTodo,
  updateTodo,
  deleteTodo,
}: TodoListProps) {
  return (
    <ul className="p-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          activateEditTodo={activateEditTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
