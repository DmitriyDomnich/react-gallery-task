import React, { FC, useRef } from 'react';
import Button from 'src/widgets/Button';

type Props = {
  onTermSubmit: (term: string) => void;
  defaultTerm?: string;
};

const Search: FC<Props> = ({ onTermSubmit, defaultTerm }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        ref={inputRef}
        defaultValue={defaultTerm}
        type='text'
        placeholder='Paris, sea, ice cream'
        className='p-2 transition-all ease-linear duration-150 text-center outline-none ring-0 rounded-md focus:ring
       focus:ring-cyan-300 '
      />
      <Button
        handleClick={() =>
          onTermSubmit(inputRef.current!.value.toLocaleLowerCase())
        }
      >
        Search
      </Button>
    </>
  );
};

export default Search;
