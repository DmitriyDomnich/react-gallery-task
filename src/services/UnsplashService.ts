import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPhoto } from 'src/data/models/photo-model';

interface PhotosResponse {
  total: number;
  total_pages: number;
  results: Array<IPhoto>;
}

export const getPhotosByTerm = createAsyncThunk(
  'gallery/getPhotosByTerm',
  async (
    { term, page = 1 }: { term: string; page: number | undefined },
    thunkAPI
  ) => {
    try {
      const { data } = await axios.get<PhotosResponse>(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            client_id:
              'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9',
            query: term,
            orientation: 'squarish',
            page,
          },
        }
      );
      return { data: data.results, termName: term };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
