import { Component } from '@angular/core';
import { faBarsStaggered, faBell, faCircleUser, faTimes, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { NavFacadeService } from 'src/app/NGRX/facades/nav.facade.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  faBars = faBarsStaggered
  faUser = faCircleUser
  faBell = faBell


  constructor(
    private navFacade: NavFacadeService
  ) { }

  onOpenSidebar(event: Event) {
    event.preventDefault()
    this.navFacade.openSidebar()
  }
}
