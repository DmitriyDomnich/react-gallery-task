import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IPhoto } from 'src/data/models/photo-model';

type Props = {
  photo: IPhoto;
};

const Photo: FC<Props> = ({ photo }: Props) => {
  return (
    <Link
      to={`p/${photo.id}`}
      state={{ photoURL: photo.urls.full, alt: photo.description }}
    >
      <div
        className='rounded-xl m-1 max-w-[458px] sm:m-4 sm:w-[448px] w-full flex-auto
       transition-shadow overflow-hidden shadow-md  hover:shadow-xl active:shadow-2xl'
      >
        <img
          className='h-[450px] w-full pointer-events-none'
          src={photo.urls.regular}
          alt={photo.description}
        />
        <div className='flex flex-col p-3'>
          <h3 className='text-2xl text-rose-400 text-center'>
            {photo.user.name}
          </h3>
          <div
            title={photo.description}
            className='h-14 text-xl text-justify line-clamp-2'
          >
            {photo.description}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Photo;
