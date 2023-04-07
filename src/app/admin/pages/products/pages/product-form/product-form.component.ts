import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { Observable, finalize, switchMap, timer } from 'rxjs';
import { CategoryFacadeService } from 'src/app/NGRX/facades/category.facade.service';
import { ProductFacadeService } from 'src/app/NGRX/facades/product.facade.service';
import { ICategory } from 'src/app/models/ICategory';
import { ToastyService } from 'src/app/services/toast/toasty.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  form!: FormGroup
  faBack = faArrowLeft
  filesSelected: File[] = []
  files: Array<string | ArrayBuffer> = []
  filePercentLoading$: Observable<number | undefined> = new Observable()
  uploading = false
  uploaded = false
  inputFile: HTMLInputElement | null = null
  submit = false
  productId = ''
  editMode = false
  categories: ICategory[] = []

  //Observable
  product$ = this.productFacade.product$
  categories$ = this.categoryFacade.getAll$

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private storage: AngularFireStorage,
    private productFacade: ProductFacadeService,
    private route: ActivatedRoute,
    private categoryFacade: CategoryFacadeService,
    private toastyService: ToastyService,
    private messageService: MessageService
  ) {
    this.buildForm()
  }

  ngOnInit(): void {
    this.categoryFacade.loadCategories()
    this.categories$.pipe(
      switchMap((categories) => {
        this.categories = [...categories]
        return this.route.params
      })
    )
      .subscribe((params: Params) => {
        this.productId = params['id']
        if (this.productId) {
          this.editMode = true
          this.getProduct(this.productId)
          this.uploaded = true
        }
      })
  }

  private buildForm() {
    this.form = this.formBuilder
      .group({
        title: [
          '',
          [Validators.required, Validators.minLength(4)],
        ],
        price: [
          0,
          [Validators.required, Validators.min(1)],
        ],
        description: [
          '',
          [Validators.required, Validators.minLength(40)],
        ],
        categoryId: [
          '',
          [Validators.required],
        ],
        images: [[], Validators.required]
      })
  }

  private getProduct(id: string) {
    this.productFacade.get(id)

    this.product$.subscribe(data => {
      this.form.patchValue(data)
      this.form.get('categoryId')?.patchValue(data.category.id)
    })
  }

  onGoBack(event: Event) {
    event.preventDefault()
    this.location.back()
  }

  onSubmit(event: Event) {
    event.preventDefault()
    this.form.markAllAsTouched()
    this.submit = true
    if (!this.form.invalid && this.uploaded && !this.editMode) {
      this.productFacade.create(this.form.value)
      const messageUpdated = 'Product created'
      this.categoryFacade.create(this.form.value)
      this.messageService.add({ severity: 'success', summary: `${messageUpdated} Successfully`, detail: '¡¡Congratulations!! \u{1F600}' })
      timer(4000).subscribe(() => this.location.back())
    } else if (this.editMode) {
      this.productFacade.update(this.form.value, this.productId)
      this.toastyService.success('product updated')
      timer(4000).subscribe(() => this.location.back())
    }
  }

  selectFile(event: Event) {
    this.inputFile = event.target as HTMLInputElement
    this.filePercentLoading$ = new Observable()
    if (this.inputFile.files?.length) {
      this.form.get('images')?.markAsTouched()
      this.uploading = false
      this.uploaded = false
      const file = this.inputFile.files[0]

      this.filesSelected = [...this.filesSelected, this.inputFile.files[0]]
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        if (fileReader.result !== null) {
          this.files = [...this.files, fileReader.result]

        }
        this.image?.setValue(this.files)
      }
      fileReader.readAsDataURL(file)
    }
  }

  uploadFile() {
    if (this.filesSelected) {
      this.uploading = true
      this.files = []
      for (const file of this.filesSelected) {

        const name = `${file.name}`

        const imgRef = this.storage.ref(name)
        const task = this.storage.upload(name, file)

        this.filePercentLoading$ = task.percentageChanges()

        task.snapshotChanges()
          .pipe(
            finalize(() => {
              const url$ = imgRef.getDownloadURL()
              url$.subscribe((url: string) => {
                this.files = [...this.files, url]
                this.uploaded = true
                this.image?.setValue(this.files)
              })
            })
          )
          .subscribe()
      }
    }
    else {
      console.log('select a file')
    }
  }

  cancelUpload() {
    this.filesSelected = []
    this.files = []

    this.inputFile && (this.inputFile.value = '')
    this.form.get('images')?.setValue([])
  }

  deleteItem(index: number) {
    if (this.files.length === 1) {
      this.cancelUpload()
    }
    this.files = this.files.filter(file => this.files.indexOf(file) !== index)
    this.filesSelected = this.filesSelected.filter(file => this.filesSelected.indexOf(file) !== index)
    this.inputFile && (this.inputFile.value = '')
    this.form.get('images')?.setValue(this.files)
  }

  get name() {
    return this.form.get('title')
  }
  get _nameError() {
    return this.name?.touched && this.name.invalid
  }
  get _nameErrorRequired() {
    return this.name?.hasError('required')
  }
  get _nameErrorExist() {
    return this.name?.hasError('name_exist')
  }
  get _nameErrorLength() {
    return this.name?.errors?.['minlength'] && this.name?.errors?.['minlength']['actualLength'] < this.name?.errors?.['minlength']['requiredLength']
  }

  get price() {
    return this.form.get('price')
  }
  get _priceError() {
    return this.price?.touched && this.price.invalid
  }
  get _priceErrorRequired() {
    return this.price?.hasError('required')
  }
  get _priceErrorMin() {
    return this.price?.errors?.['min'] && this.price?.errors?.['min']['actual'] < this.price?.errors?.['min']['min']
  }

  get description() {
    return this.form.get('description')
  }
  get _descriptionError() {
    return this.description?.touched && this.description.invalid
  }
  get _descriptionErrorRequired() {
    return this.description?.hasError('required')
  }
  get _descriptionErrorLength() {
    return this.description?.errors?.['minlength'] && this.description?.errors?.['minlength']['actualLength'] < this.description?.errors?.['minlength']['requiredLength']
  }

  get category() {
    return this.form.get('categoryId')
  }
  get _categoryError() {
    return this.category?.touched && this.category.invalid
  }
  get _categoryErrorRequired() {
    return this.category?.hasError('required')
  }

  get image() {
    return this.form.get('images')
  }
  get _imageError() {
    return this.image?.touched && this.image.invalid
  }
  get _imageErrorRequired() {
    return this.image?.hasError('required')
  }
}
