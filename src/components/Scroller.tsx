import React, { FC } from 'react';

const Scroller: FC = () => {
  const scroll = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  return (
    <button
      onClick={scroll}
      className='fixed h-12  w-12 text-2xl opacity-50 hover:opacity-100 bottom-10 right-6 rounded-full transition-all ease-in-out duration-150 text-slate-100
    shadow-sm hover:bg-pink-400 active:bg-pink-500 hover:shadow-md active:shadow-2xl bg-pink-300'
    >
      ↑
    </button>
  );
};

export default Scroller;
