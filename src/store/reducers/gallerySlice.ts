import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPhoto } from 'src/data/models/photo-model';
import { getPhotosByTerm } from '../../services/UnsplashService';

export type IGallery = { photos: IPhoto[]; length: number };

type Gallery = {
  gallery: Record<string, IGallery>;
  isLoading: boolean;
  error: string;
  lastTerm: string;
};

const initialState: Gallery = {
  gallery: {},
  error: '',
  isLoading: false,
  lastTerm: '',
};

export const gallerySlice = createSlice({
  initialState,
  name: 'gallery',
  reducers: {},
  extraReducers: {
    [getPhotosByTerm.pending.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
    },
    [getPhotosByTerm.fulfilled.type]: (
      state,
      { payload }: PayloadAction<{ data: IPhoto[]; termName: string }>
    ) => {
      state.isLoading = false;
      state.error = ''; // in case there was an error
      state.lastTerm = payload.termName;

      const photosByTerm = state.gallery[payload.termName];

      state.gallery[payload.termName] = photosByTerm
        ? {
            length: photosByTerm.length + 1,
            photos: photosByTerm.photos.concat(...payload.data),
          }
        : {
            length: 2, // first request goes with 1
            photos: payload.data,
          };
    },
    [getPhotosByTerm.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default gallerySlice.reducer;
