import { Injectable } from '@angular/core';
import {environments} from '../../../environments/enviroments';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import {UserPagination, UserSummary} from '../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly apiUsersUrl = `${environments.apiBackEnd}api/users`;

  constructor( private readonly http: HttpClient ) { }

  getSummaryUsers(): Observable<UserSummary> {
    return this.http.get<UserSummary>(`${this.apiUsersUrl}/summary`, {withCredentials: true})
  }

  getFilteredUsers(filters: any, pageIndex: number, pageSize: number): Observable<UserPagination> {
    let params = new HttpParams()
      .set('page', pageIndex.toString())
      .set('size', pageSize.toString());

    if (filters.name) {
      params = params.set('name', filters.name.toString());
    }
    if (filters.username) {
      params = params.set('username', filters.username.toString());
    }
    if (filters.roles) {
      params = params.set('roles', filters.roles.toString());
    }

    return this.http.get<UserPagination>(`${this.apiUsersUrl}`, { params, withCredentials: true })
      .pipe(
        catchError(() => {
          return of({
            data: [],
            pagination: {
              current_page: 1,
              size: 0,
              next_page: 1,
              last_page: 1,
              total_elements: 0,
              previousPageUrl: '',
              currentPageUrl: '',
              nextPageUrl: '',
              lastPageUrl: '',
            }
          });
        })
      );
  }

  createUser(body: any): Observable<any> {
    return this.http.post(`${this.apiUsersUrl}`, body, {withCredentials: true});
  }

}
