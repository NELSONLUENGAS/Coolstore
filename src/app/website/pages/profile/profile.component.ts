import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUsers';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: IUser | null = null

  constructor(
    private AuthService: AuthService
  ) { }

  ngOnInit(): void {
    this.AuthService.user$
      .subscribe(profile => this.user = profile)
  }


}
