import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IPhoto } from 'src/data/models/photo-model';

export interface Props extends IPhoto {}

function PicturePage() {
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);

  const { photoURL, alt } = location.state as any;

  useEffect(() => {
    const image = new Image();
    image.onload = (e) => setLoaded(true);
    image.src = photoURL;
  }, [photoURL]);

  return (
    <div className='h-screen bg-gray-200 flex justify-center items-center '>
      <div className='h-auto px-4 w-full max-w-3xl'>
        {loaded ? (
          <img
            className='rounded-xl shadow-2xl overflow-hidden'
            src={photoURL}
            alt={alt}
          />
        ) : (
          <div className='rounded-xl animate-pulse bg-slate-500 shadow-2xl h-[75vh] overflow-hidden'></div>
        )}
      </div>
    </div>
  );
}

export default PicturePage;
