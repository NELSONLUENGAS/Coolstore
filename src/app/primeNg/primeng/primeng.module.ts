import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';

const UX_MODULE = [
  TableModule, DividerModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UX_MODULE
  ],
  exports: [
    UX_MODULE
  ]
})
export class PrimengModule { }
