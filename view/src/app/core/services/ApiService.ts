import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(protected http: HttpClient) {}

  protected url(path: string): string {
    return `${this.apiUrl}/${path}`;
  }
}
