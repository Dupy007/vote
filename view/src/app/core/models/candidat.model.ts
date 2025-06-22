import { User } from './user.model';
import { Vote } from './vote.model';

export interface Candidat {
  id: number;
  createDate: string;
  updateDate: string;
  user: User;
  votes?: Vote[];
}
