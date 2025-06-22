import { Candidat } from './candidat.model';

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  birthdate: string; // format ISO: YYYY-MM-DD
  createDate: string;
  updateDate: string;
  candidats?: Candidat[];
}
