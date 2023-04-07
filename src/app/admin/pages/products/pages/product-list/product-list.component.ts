import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { faEye, faFileEdit, faNoteSticky, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MenuItem, MessageService } from 'primeng/api';
import { IProduct } from 'src/app/models/IProduct';
import { ProductFacadeService } from 'src/app/NGRX/facades/product.facade.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productFacade: ProductFacadeService,
    private messageService: MessageService,
  ) {
    
  }

  allProducts: IProduct[] = []
  faView = faEye
  faEdit = faFileEdit
  faDelete = faTrashAlt
  idSelected = ''
  contentHeight = 0
  rows = 0
  valueEmpty = [0]
  scrollHeight = 0

  allProducts$ = this.productFacade.allProducts$
  productsLoading$ = this.productFacade.productsLoading$


  ngOnInit(): void {
    this.productFacade.loadAllProducts(true)
    this.allProducts$.subscribe(products => this.allProducts = products)
    this.contentHeight = document.documentElement.clientHeight - 204;
    this.rows = Math.round(this.contentHeight / 97) + 1
    this.scrollHeight = this.contentHeight + 69
    for (let i = 0; i < this.rows; i++) {
      this.valueEmpty.push(i)
    }
  }

  showConfirm(id: string) {
    this.idSelected = id
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
  }

  onConfirm() {
    this.productFacade.delete(this.idSelected)
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }

  clear() {
    this.messageService.clear();
  }

  //events
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.contentHeight = document.documentElement.clientHeight - 204;
    this.rows = Math.round(this.contentHeight / 97) + 1
    this.scrollHeight = this.contentHeight + 69
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.contentHeight = document.documentElement.clientHeight - 204;
    this.rows = Math.round(this.contentHeight / 97) + 1
    this.scrollHeight = this.contentHeight + 69
  }






}
