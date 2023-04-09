import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { faCirclePlus, faList, faList12, faListAlt, faListSquares, faListUl } from '@fortawesome/free-solid-svg-icons';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  currentPath: string[] = []

  faListIcon = faListAlt
  faAddIcon = faCirclePlus



  constructor(
    private location: Location
  ) { }


  ngOnInit(): void {
    this.currentPath = location.pathname.split('/')
    this.location.onUrlChange((url) => this.currentPath = url.split('/'))
  }




}

