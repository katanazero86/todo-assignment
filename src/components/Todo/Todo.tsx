import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Todos } from '../../@types/todo/todo.types.ts';
import AddTodo from './AddTodo/AddTodo.tsx';
import TodoList from './TodoList/TodoList.tsx';

export default function Todo() {
  const [todos, setTodos] = useState<Todos[]>([]);
  const addTodo = (task: string) => {
    const todoObj = {
      id: uuidv4(),
      isEdit: false,
      task,
    };
    setTodos((prev) => {
      return [...prev, todoObj];
    });
  };

  const updateTodo = (todoId: string, updatedTask: string) => {
    const copyTodos = todos.map((todo) => {
      if (todoId === todo.id) {
        return {
          ...todo,
          task: updatedTask,
          isEdit: false,
        };
      }
      return todo;
    });
    setTodos(copyTodos);
  };
  const deleteTodo = (todoId: string) => {
    const copyTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(copyTodos);
  };

  const activateEditTodo = (todoId: string) => {
    const copyTodos = todos.map((todo) => {
      if (todoId === todo.id) {
        return {
          ...todo,
          isEdit: true,
        };
      }
      return todo;
    });
    setTodos(copyTodos);
  };

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        activateEditTodo={activateEditTodo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
