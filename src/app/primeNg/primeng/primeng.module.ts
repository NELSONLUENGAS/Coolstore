import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { ChartModule } from 'primeng/chart';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { InputNumberModule } from 'primeng/inputnumber';
import { DataViewModule } from 'primeng/dataview';
import { SplitButtonModule } from 'primeng/splitbutton';

const UX_MODULE = [
  TableModule,
  DividerModule,
  ToastModule,
  ButtonModule,
  PasswordModule,
  InputTextModule,
  SkeletonModule,
  ChartModule,
  RadioButtonModule,
  FileUploadModule,
  ProgressBarModule,
  DropdownModule,
  EditorModule,
  InputNumberModule,
  DataViewModule,
  SplitButtonModule
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
