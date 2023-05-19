import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className='p-2 bg-blue-500 hover:bg-blue-600 rounded text-white'>
      {children}
    </button>
  );
};
