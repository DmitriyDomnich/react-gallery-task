import React, { FC, ReactNode } from 'react';

type Props = {
  handleClick: () => void;
  color?: 'pink' | 'blue';
  children: ReactNode;
};

const Button: FC<Props> = ({
  handleClick,
  children,
  color = 'pink',
}: Props) => {
  const className = `p-2 my-2 text-teal-50 rounded-md transition-colors duration-150 ease-in-out font-bold text-2xl ${
    color === 'pink'
      ? 'bg-pink-400 hover:bg-pink-500 active:bg-pink-600'
      : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
  }`;

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
