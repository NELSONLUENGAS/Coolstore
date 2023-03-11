import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

const UX_MODULE = [
  TableModule, DividerModule, ToastModule, ButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UX_MODULE
  ],
  exports: [
    UX_MODULE
  ],
  providers: [
    MessageService
  ]
})
export class PrimengModule { }
