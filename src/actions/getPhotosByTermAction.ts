import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService } from 'src/services/ApiService';

export const getPhotosByTermAction = createAsyncThunk(
  'gallery/getPhotosByTerm',
  async (
    { term, page = 1 }: { term: string; page: number | undefined },
    thunkAPI
  ) => {
    try {
      const { data } = await ApiService.getPhotosByTermAndPage(term, page);
      return { data: data.results, termName: term };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
