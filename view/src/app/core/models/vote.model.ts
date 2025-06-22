import { User } from './user.model';
import { Candidat } from './candidat.model';

export interface Vote {
  id: number;
  createDate: string;
  updateDate: string;
  user: User;
  candidat: Candidat;
}
