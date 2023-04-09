import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  currentPath: string[] = []
  faListIcon = faListAlt


  constructor(
    private location: Location
  ) { }


  ngOnInit(): void {
    this.currentPath = location.pathname.split('/')
    this.location.onUrlChange((url) => this.currentPath = url.split('/'))
  }


}
