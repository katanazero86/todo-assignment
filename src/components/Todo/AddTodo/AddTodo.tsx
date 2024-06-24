import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from '../../atoms/Forms/TextInput/TextInput.tsx';
import Button from '../../atoms/Buttons/Button/Button.tsx';
import { todoSchema } from '../../../validations/yup/todo.schemas.ts';

interface AddTodoProps {
  addTodo: (task: string) => void;
}

export default function AddTodo({ addTodo }: AddTodoProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ task: string }>({
    resolver: yupResolver(todoSchema),
    defaultValues: {
      task: '',
    },
  });

  const onSubmit = (data: { task: string }) => {
    const { task } = data;
    addTodo(task);
    reset();
  };

  return (
    <form className="p-2 border border-gray-300" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center gap-2">
        <TextInput register={register('task')} />
        <Button type="submit">추가</Button>
      </div>
      <div>
        <p>{errors.task?.message}</p>
      </div>
    </form>
  );
}
