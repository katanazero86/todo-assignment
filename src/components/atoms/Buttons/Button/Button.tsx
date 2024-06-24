import { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  type?: 'submit' | 'button' | 'reset';
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ type = 'button', children, onClick }: ButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
  };

  return (
    <button
      type={type}
      className="text-white bg-indigo-500 hover:bg-indigo-600 p-4 text-sm rounded-md"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
