import {ApiService} from './ApiService';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService extends ApiService {

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url('users'));
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(this.url(`users/${id}`));
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.url('users'), user);
  }

  update(id: number, user: User): Observable<any> {
    return this.http.put(this.url(`users/${id}`), user);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.url(`users/${id}`));
  }
}
