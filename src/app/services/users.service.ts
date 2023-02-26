import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, ICreateUser } from '../models/IUsers';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/users/'

  constructor(
    private http: HttpClient
  ) { }

  Create(data: ICreateUser): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl, data)
  }

  GetAll(): Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>(this.apiUrl)
  }
}
