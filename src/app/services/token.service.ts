import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private CookieService: CookieService
  ) { }

  saveToken(token: string) {
    this.CookieService.set('authToken', token)
  }

  getToken() {
    return this.CookieService.get('authToken')
  }

  removeToken() {
    this.CookieService.delete('authToken')
  }
}
