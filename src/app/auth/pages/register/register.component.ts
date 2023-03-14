import { Component } from '@angular/core';
import { faLock, faUserLarge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  faUser = faUserLarge
  faLock = faLock

  password = ''
}
