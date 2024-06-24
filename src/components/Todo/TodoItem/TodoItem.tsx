import { MouseEvent } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { todoSchema } from '../../../validations/yup/todo.schemas.ts';
import { type Todos } from '../Todo.tsx';
import TextInput from '../../atoms/Forms/TextInput/TextInput.tsx';
import Button from '../../atoms/Buttons/Button/Button.tsx';

interface TodoItemProps {
  todo: Todos;
  activateEditTodo: (todoId: string) => void;
  updateTodo: (todoId: string, updatedTask: string) => void;
  deleteTodo: (todoId: string) => void;
}

export default function TodoItem({
  todo,
  activateEditTodo,
  updateTodo,
  deleteTodo,
}: TodoItemProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ task: string }>({
    resolver: yupResolver(todoSchema),
    defaultValues: {
      task: todo.task,
    },
  });

  const handleEditClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    activateEditTodo(todo.id);
  };

  const handleSaveClick = (data: { task: string }) => {
    const { task } = data;
    updateTodo(todo.id, task);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className="flex-col items-center">
      <form onSubmit={handleSubmit(handleSaveClick)} className="flex items-center">
        <div className="mr-3">
          <TextInput register={register('task')} disabled={!todo.isEdit} />
        </div>
        <div className="flex items-center gap-1">
          {todo.isEdit ? (
            <Button type="submit">Save</Button>
          ) : (
            <Button onClick={handleEditClick}>Edit</Button>
          )}
          <Button onClick={handleDeleteClick}>Delete</Button>
        </div>
      </form>
      <div>
        <p>{errors.task?.message}</p>
      </div>
    </li>
  );
}
