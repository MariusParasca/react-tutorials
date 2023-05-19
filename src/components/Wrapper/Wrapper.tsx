import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Wrapper = ({ children }: Props) => {
  return <div className='min-h-screen bg-gray-100 flex justify-center pt-16'>{children}</div>;
};
