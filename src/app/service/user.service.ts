import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../model/user';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }
  register(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/register', user);
  }
  login(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/login', user);
  }
}
