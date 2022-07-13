import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import Gallery from 'src/components/Gallery';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { getPhotosByTermAction } from 'src/actions/getPhotosByTermAction';
import Scroller from 'src/components/Scroller';
import Loader from 'src/components/Loader/Loader';

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
      {isLoading && <Loader />}
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
      <Scroller />
    </div>
  );
}

export default GalleryPage;
