import { IPhoto } from './photo-model';

export interface IPhotosResponse {
  total: number;
  total_pages: number;
  results: Array<IPhoto>;
}
