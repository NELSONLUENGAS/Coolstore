import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { ILogin } from '../models/IAuth';
import { IUser } from '../models/IUsers';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl = `${environment.apiUrl}/auth`

  constructor(
    private http: HttpClient,
    private TokenService: TokenService
  ) { }

  private userActive = new BehaviorSubject<IUser | null>(null)
  user$ = this.userActive.asObservable()

  Login(email: string, password: string): Observable<IUser> {
    return this.http.post<ILogin>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap((response: any) => {
          this.TokenService.saveToken(response.access_token)
        }),
        switchMap(() => this.Profile())
      )
  }

  Logout() {
    this.TokenService.removeToken()
  }

  Profile(): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/profile`)
      .pipe(
        tap((user: any) => this.userActive.next(user))
      )
  }
}
