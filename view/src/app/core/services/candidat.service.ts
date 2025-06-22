import {Injectable} from '@angular/core';
import {ApiService} from './ApiService';
import {Observable} from 'rxjs';
import {Candidat} from '../models/candidat.model';

@Injectable({ providedIn: 'root' })
export class CandidatService extends ApiService {

  getAll(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.url('candidat'));
  }

  getById(id: number): Observable<Candidat> {
    return this.http.get<Candidat>(this.url(`candidat/${id}`));
  }

  create(candidat: { user: { id: any } }): Observable<Candidat> {
    return this.http.post<Candidat>(this.url('candidat'), candidat);
  }

  update(id: number, candidat: { user: { id: any } }): Observable<any> {
    return this.http.put(this.url(`candidat/${id}`), candidat);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.url(`candidat/${id}`));
  }
}
