import { Component, OnInit } from '@angular/core';
import { IUser } from './models/IUsers';
import { AuthService } from './services/auth.service';
import { FilesService } from './services/files.service';
import { TokenService } from './services/token.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  imgParent = '';
  showImg = true
  imgUpload = ''

  constructor(
    private UsersService: UsersService,
    private FileService: FilesService,
    private AuthService: AuthService,
    private TokenService: TokenService
  ) { }

  ngOnInit(): void {
    const token = this.TokenService.getToken()
    token && this.AuthService.Profile()
      .subscribe()
  }

  createUser() {
    this.UsersService.Create({
      name: 'Carla',
      email: 'Carla@gmail.com',
      password: '12345',
      // role: 'customer'
    })
      .subscribe(user => console.log(user))
  }

  download() {
    this.FileService.getFile('my.pdf', './assets/files/texto.pdf', 'application/pdf')
      .subscribe()
  }

  onUpload(event: Event) {
    const element = event.target as HTMLInputElement
    const file = element.files?.item(0)
    console.log(file);

    file && this.FileService.uploadFile(file)
      .subscribe(rta => {
        this.imgUpload = rta.location
      })
  }

}
