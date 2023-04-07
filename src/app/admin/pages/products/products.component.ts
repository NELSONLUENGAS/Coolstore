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

  nameField = new FormControl()


  currentPath: string[] = []

  faListIcon = faListAlt
  faAddIcon = faCirclePlus



  constructor(

    private sanitizer: DomSanitizer,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.currentPath = location.pathname.split('/')
    console.log(this.currentPath)
    this.location.onUrlChange((url) => this.currentPath = url.split('/'))
    this.nameField.valueChanges
      .subscribe()
  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url)
  }

  getNameValue() {
    console.log(this.nameField
      .value)
  }




}

