import axios from 'axios';
import { IPhotosResponse } from 'src/data/models/photo-response-model';

export class ApiService {
  private static readonly API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT!;
  private static readonly API_KEY = process.env.REACT_APP_API_KEY!;

  static getPhotosByTermAndPage(term: string, page: number) {
    return axios.get<IPhotosResponse>(this.API_ENDPOINT, {
      params: {
        client_id: this.API_KEY,
        query: term,
        orientation: 'squarish',
        page,
      },
    });
  }
}
