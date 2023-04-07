import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCity, faLock, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { ICreateUser } from 'src/app/models/IUsers';
import { AuthFacadeService } from 'src/app/NGRX/facades/auth.facade.service';
import { NavFacadeService } from 'src/app/NGRX/facades/nav.facade.service';
import { CustomValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  faUser = faUserLarge
  faLock = faLock
  faCity = faCity


  formRegister!: FormGroup
  avatarDefault = "https://api.lorem.space/image/face?w=640&h=480&r=867"

  constructor(
    private navFacade: NavFacadeService,
    private formBuilder: FormBuilder,
    private authFacade: AuthFacadeService,
    private router: Router

  ) {
    this.buildForm()
  }

  userRegistered$ = this.authFacade.userRegistered$
  userRegisteredState$ = this.authFacade.userRegisteredState$
  ngOnInit(): void {
    this.userRegisteredState$
      .pipe(map(bool => bool && this.router.navigate(['/auth/login'])))
      .subscribe()
  }

  handleSideMenuClose() {
    this.navFacade.closeSidebar()
  }

  register(event: Event) {
    event.preventDefault()
    if (this.formRegister.valid) {
      const form = this.formRegister.value
      const user: ICreateUser = {
        name: `${form.name} ${form.last}`,
        email: form.email,
        password: form.password,
        avatar: form.avatar
      }
      this.authFacade.createUser(user)
    } else {
      this.formRegister.markAllAsTouched()
      console.log('complete los campos')
    }
  }

  private buildForm() {
    this.formRegister = this.formBuilder.group({
      name: ['', [Validators.required]],
      last: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), CustomValidators.validPassword]],
      confirmPassword: ['', [Validators.required]],
      avatar: [this.avatarDefault, [Validators.required]],
      type: ['company', [Validators.required]],
      companyName: ['', [Validators.required, Validators.minLength(3)]]
    }, {
      validators: CustomValidators.matchPassword
    })

    this._type?.valueChanges.subscribe(value => {
      value === 'company' ?
        this._companyName?.setValidators([Validators.required, Validators.minLength(3)])
        :
        this._companyName?.setValidators(null)

      this._companyName?.updateValueAndValidity()
    })
  }

  private get _type() {
    return this.formRegister.get('type')
  }

  get _typeValue() {
    return this._type?.value
  }

  private get _companyName() {
    return this.formRegister.get('companyName')
  }

  get _companyNameError() {
    return this._companyName?.touched && this._companyName.invalid
  }

  get _companyNameErrorRequired() {
    return this._companyName?.hasError('required')
  }

  get _companyNameErrorLength() {
    return this._companyName?.errors?.['minlength'] && this._companyName?.errors?.['minlength']['actualLength'] < this._companyName?.errors?.['minlength']['requiredLength']
  }

  /*---------------------name------------- */
  private get _name() {
    return this.formRegister.get('name')
  }
  get _nameError() {
    return this._name?.touched && this._name.invalid
  }
  get _nameErrorRequired() {
    return this._name?.hasError('required')
  }
  /*---------------------lastname------------- */
  private get _lastname() {
    return this.formRegister.get('last')
  }
  get _lastnameError() {
    return this._lastname?.touched && this._lastname.invalid
  }
  get _lastnameErrorRequired() {
    return this._lastname?.hasError('required')
  }
  /*---------------------email------------- */
  private get _email() {
    return this.formRegister.get('email')
  }
  get _emailError() {
    return this._email?.touched && this._email.invalid
  }
  get _emailErrorRequired() {
    return this._email?.hasError('required')
  }
  get _emailInvalidError() {
    return this._email?.hasError('email')
  }
  /*---------------------password------------- */
  private get _password() {
    return this.formRegister.get('password')
  }
  get _passwordError() {
    return this._password?.touched && this._password.invalid
  }
  get _passwordErrorRequired() {
    return this._password?.hasError('required')
  }
  get _passwordErrorLength() {
    return this._password?.errors?.['minlength'] && this._password?.errors?.['minlength']['actualLength'] < this._password?.errors?.['minlength']['requiredLength']
  }
  get _passwordErrorCustom() {
    return this._password?.hasError('invalid_password')
  }
  /*---------------------confirm password------------- */
  private get _confirmPassword() {
    return this.formRegister.get('confirmPassword')
  }
  get _confirmPasswordError() {
    return this._confirmPassword?.touched && (this.formRegister.errors || this._confirmPassword.invalid)
  }
  get _confirmPasswordErrorRequired() {
    return this._confirmPassword?.hasError('required')
  }
  get _passwordErrorMatch() {
    return this.formRegister.hasError('notMatched_password')
  }


}
