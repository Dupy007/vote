import {Injectable} from '@angular/core';
import {ApiService} from './ApiService';
import {WinnerProjection} from '../models/winner-projection.model';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResultService extends ApiService {

  getAllResults(): Observable<WinnerProjection[]> {
    return this.http.get<WinnerProjection[]>(this.url('result'));
  }

  getResultById(id: number): Observable<WinnerProjection> {
    return this.http.get<WinnerProjection>(this.url(`result/${id}`));
  }
}
