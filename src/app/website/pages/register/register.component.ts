import { Component, OnInit } from '@angular/core';
import { IOnExit } from 'src/app/guards/exit.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, IOnExit {

  constructor() { }

  ngOnInit(): void {

  }

  onExit(): boolean {
    const rta = confirm('Login on the Compoenet')
    return rta
  }
}
