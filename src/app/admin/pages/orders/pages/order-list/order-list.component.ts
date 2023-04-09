import { Component, HostListener, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { IOrder } from 'src/app/models/IOrder';
import { orders } from '../../data/orders.data';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  allOrders: IOrder[] = orders
  faView = faEye
  idSelected = ''
  contentHeight = 0
  rows = 0
  scrollHeight = 0

  ngOnInit(): void {
    this.contentHeight = document.documentElement.clientHeight - 204;
    this.rows = Math.round(this.contentHeight / 54) + 1
    this.scrollHeight = this.contentHeight + 69
  }

  //events
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.contentHeight = document.documentElement.clientHeight - 204;
    this.rows = Math.round(this.contentHeight / 54) + 1
    this.scrollHeight = this.contentHeight + 69
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.contentHeight = document.documentElement.clientHeight - 204;
    this.rows = Math.round(this.contentHeight / 54) + 1
    this.scrollHeight = this.contentHeight + 69
  }
}
