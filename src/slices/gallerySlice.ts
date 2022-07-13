import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPhoto } from 'src/data/models/photo-model';
import { getPhotosByTermAction } from '../actions/getPhotosByTermAction';

export interface IGallery {
  photos: IPhoto[];
  length: number;
}

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
    [getPhotosByTermAction.pending.type]: (state, _) => {
      state.isLoading = true;
    },
    [getPhotosByTermAction.fulfilled.type]: (
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
    [getPhotosByTermAction.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default gallerySlice.reducer;
