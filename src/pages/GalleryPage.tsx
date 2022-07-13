import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import Gallery from 'src/components/Gallery';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { getPhotosByTermAction } from 'src/actions/getPhotosByTermAction';

function GalleryPage() {
  const { gallery, error, isLoading, lastTerm } = useAppSelector(
    (state) => state.galleryReducer
  );
  const dispatch = useAppDispatch();

  const [term, setTerm] = useState(lastTerm);
  const photos = gallery[term]?.photos;

  useEffect(() => {
    if (term && term !== lastTerm && !photos?.length) {
      dispatch(getPhotosByTermAction({ page: gallery[term]?.length, term }));
    }
  }, [term]);

  const loadMore = () =>
    dispatch(getPhotosByTermAction({ term, page: gallery[term].length }));

  return (
    <div className='pt-32 flex flex-col items-center'>
      <Search onTermSubmit={setTerm} defaultTerm={lastTerm} />
      {error && (
        <div className='text-3xl text-center font-bold text-red-500'>
          {error}
        </div>
      )}
      {isLoading && <div>Loading...</div>}
      {photos?.length && photos.length ? (
        <Gallery onLoadMoreRequest={loadMore} photos={photos} />
      ) : (
        term &&
        !isLoading && (
          <div className='text-4xl text-center'>
            No photos for this term, try another one
          </div>
        )
      )}
    </div>
  );
}

export default GalleryPage;
