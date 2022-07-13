import { IUrls } from './urls-model';
import { IUser } from './user-model';

export interface IPhoto {
  id: string;
  description: string;
  user: IUser;
  urls: IUrls;
}
