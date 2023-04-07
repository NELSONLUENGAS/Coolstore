import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faBoxOpen, faChartPie, faBoxesStacked, faTableCells, faDollyFlatbed, faUserCircle, faUserGroup, faListAlt, faChevronRight, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { NavFacadeService } from 'src/app/NGRX/facades/nav.facade.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  dashboardIcon = faTableCells
  productsIcon = faBoxOpen
  categoriesIcon = faBoxesStacked
  ordersIcon = faDollyFlatbed
  statisticIcon = faChartPie
  profileIcon = faUserCircle
  usersIcon = faUserGroup
  listIcon = faListAlt
  chevronRightIcon = faChevronRight
  chevronDownIcon = faChevronDown
  faClose = faTimes
  openProducts = false

  currentRoute: string | null = 'dashboard'

  sidebarOpen$ = this.navFacade.sidebarOpened$

  constructor(
    private navFacade: NavFacadeService
  ) { }

  ngOnInit(): void {
    const path = location.pathname.split('/')[2]
    this.currentRoute = path
  }

  getCurrentRoute(event: Event) {
    const element = event.target as HTMLInputElement
    this.currentRoute = element.ariaLabel
  }

  onCloseSidebar(event: Event) {
    event.preventDefault()
    this.navFacade.closeSidebar()
  }

  onOpenProductsLink(event: Event) {
    event.preventDefault()
    this.openProducts = !this.openProducts
  }


}
