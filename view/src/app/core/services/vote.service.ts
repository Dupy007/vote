import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Vote} from '../models/vote.model';
import {ApiService} from './ApiService';

@Injectable({ providedIn: 'root' })
export class VoteService extends ApiService {

  getAll(): Observable<Vote[]> {
    return this.http.get<Vote[]>(this.url('vote'));
  }

  getById(id: number): Observable<Vote> {
    return this.http.get<Vote>(this.url(`vote/${id}`));
  }

  create(vote: { user: { id: any }; candidat: { id: any } }): Observable<Vote> {
    return this.http.post<Vote>(this.url('vote'), vote);
  }


  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.url(`vote/${id}`));
  }
}
