import * as yup from 'yup';

export const todoSchema = yup.object().shape({
  task: yup.string().required('Task is required').min(2, 'Task must be at least 2 characters long'),
});
