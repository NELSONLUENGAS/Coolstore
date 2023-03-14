import { Component } from '@angular/core';
import { faLock, faUserLarge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  faUser = faUserLarge
  faLock = faLock

  password = ''
}
