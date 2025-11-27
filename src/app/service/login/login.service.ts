import { Injectable } from '@angular/core';
import {environments} from '../../../environments/enviroments';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly apiLoginUrl = `${environments.apiBackEnd}api/auth`;
  private currentRole: string | null = null;

  constructor( private readonly http: HttpClient ) { }

  login(username: string, password: string) {
    return this.http.post(`${this.apiLoginUrl}/login`, { username, password },
      {
        withCredentials: true
      }
    );
  }

  loadUser() {
    return this.http.get(`${this.apiLoginUrl}/me`, {
      withCredentials: true
    });
  }

  setRole(role: string) {
    this.currentRole = role;
  }

  getRole() {
    return this.currentRole;
  }

  isLoggedIn() {
    return this.currentRole !== null;
  }

}
