import { Component, HostListener, OnInit } from '@angular/core';
import { faEye, faFileEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { CategoryFacadeService } from 'src/app/NGRX/facades/category.facade.service';
import { ICategory } from 'src/app/models/ICategory';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  constructor(
    private categoryFacade: CategoryFacadeService,
    private messageService: MessageService
  ) { }

  allCategories: ICategory[] = []
  faView = faEye
  faEdit = faFileEdit
  faDelete = faTrashAlt
  idSelected = ''
  contentHeight = 0
  rows = 0
  valueEmpty = [0]
  scrollHeight = 0

  allCategories$ = this.categoryFacade.getAll$
  categoriesLoading$ = this.categoryFacade.loading$


  ngOnInit(): void {
    this.categoryFacade.loadCategories()
    this.allCategories$.subscribe(categories => this.allCategories = [...categories])
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

  onConfirm() {
    this.categoryFacade.delete(this.idSelected)
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
