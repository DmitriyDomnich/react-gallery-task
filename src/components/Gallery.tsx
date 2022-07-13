import React, { FC } from 'react';
import { IPhoto } from 'src/data/models/photo-model';
import Button from './Button';
import Photo from './Photo';

type Props = {
  photos: IPhoto[];
  onLoadMoreRequest: () => void;
};

const Gallery: FC<Props> = ({ photos, onLoadMoreRequest }: Props) => {
  return (
    <div className='w-full p-2 md:p-1 mx-auto md:w-11/12'>
      <div className='flex flex-wrap justify-center'>
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>

      <div className='text-center mt-5'>
        <Button color='blue' handleClick={() => onLoadMoreRequest()}>
          Load more
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
