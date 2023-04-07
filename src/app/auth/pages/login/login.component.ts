import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faLock, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { AuthFacadeService } from 'src/app/NGRX/facades/auth.facade.service';
import { NavFacadeService } from 'src/app/NGRX/facades/nav.facade.service';
import { CustomValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  faUser = faUserLarge
  faLock = faLock

  password = ''
  formLogin!: FormGroup;

  constructor(
    private navFacade: NavFacadeService,
    private formBuilder: FormBuilder,
    private authFacade: AuthFacadeService
  ) {
    this.buildForm()
  }

  login(event: Event) {
    event.preventDefault()
    if (this.formLogin.valid) {
      const form = this.formLogin.value
      this.authFacade.login(form)
    } else {
      console.log('complete all fields')
    }
  }

  handleSideMenuClose() {
    this.navFacade.closeSidebar()
  }

  private buildForm() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }
}
