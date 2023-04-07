import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { Observable, finalize, timer } from 'rxjs';
import { CategoryFacadeService } from 'src/app/NGRX/facades/category.facade.service';
import { ICategory } from 'src/app/models/ICategory';
import { ToastyService } from 'src/app/services/toast/toasty.service';
// import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {


  form!: FormGroup
  faBack = faArrowLeft
  fileSelected: File | null = null
  file: string | ArrayBuffer | null | undefined
  filePercentLoading$: Observable<number | undefined> = new Observable()
  uploading = false
  uploaded = false
  inputFile: HTMLInputElement | null = null
  submit = false
  categoryId = ''
  editMode = false

  //Observable
  category$ = this.categoryFacade.category$

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private storage: AngularFireStorage,
    private categoryFacade: CategoryFacadeService,
    // private categoryService: CategoryService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private toastyService: ToastyService
  ) {
    this.buildForm()
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.categoryId = params['id']
      if (this.categoryId) {
        this.editMode = true
        this.getCategory(this.categoryId)
        this.uploaded = true
      }
    })
  }

  private buildForm() {
    this.form = this.formBuilder
      .group({
        name: [
          '',
          [Validators.required, Validators.minLength(4)],
          // [CustomValidators.validateCategory(this.categoryService)]
        ],
        image: ['', Validators.required]
      })
  }

  private getCategory(id: string) {
    this.categoryFacade.get(id)

    this.category$.subscribe(data => this.form.patchValue(data))
  }

  // success(type: string) {
  //   this.messageService.add({ severity: 'success', summary: `${type.charAt(0).toUpperCase()} created Successfully`, detail: 'Message Content' });
  // }
  onGoBack(event: Event) {
    event.preventDefault()
    this.location.back()
  }

  onSubmit(event: Event) {
    event.preventDefault()
    this.form.markAllAsTouched()
    this.submit = true
    if (!this.form.invalid && this.uploaded && !this.editMode) {
      const messageUpdated = 'Category created'
      this.categoryFacade.create(this.form.value)
      this.messageService.add({ severity: 'success', summary: `${messageUpdated} Successfully`, detail: '¡¡Congratulations!! \u{1F600}' })
      timer(4000).subscribe(() => this.location.back())
    } else if (this.editMode) {
      this.categoryFacade.update(this.form.value, this.categoryId)
      this.toastyService.success('category updated')
      timer(4000).subscribe(() => this.location.back())
    }
  }

  selectFile(event: Event) {
    this.inputFile = event.target as HTMLInputElement
    this.filePercentLoading$ = new Observable()
    if (this.inputFile.files?.length) {
      this.form.get('image')?.markAsTouched()
      this.uploading = false
      this.uploaded = false
      const file = this.inputFile.files[0]

      this.fileSelected = this.inputFile.files[0]
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        this.file = fileReader.result
        this.image?.setValue(this.file)
      }
      fileReader.readAsDataURL(file)
    }
  }

  uploadFile() {
    if (this.fileSelected) {
      this.uploading = true
      const name = `${this.fileSelected?.name}`

      const imgRef = this.storage.ref(name)
      const task = this.storage.upload(name, this.fileSelected)

      this.filePercentLoading$ = task.percentageChanges()

      task.snapshotChanges()
        .pipe(
          finalize(() => {
            const url$ = imgRef.getDownloadURL()
            url$.subscribe((url: string) => {
              this.file = url
              this.uploaded = true
              this.image?.setValue(url)
            })
          })
        )
        .subscribe()
    }
    else {
      console.log('select a file')
    }
  }

  cancelUpload() {
    this.fileSelected = null
    this.file = null

    this.inputFile && (this.inputFile.value = '')
    this.form.get('image')?.setValue('')
  }

  get name() {
    return this.form.get('name')
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

  get image() {
    return this.form.get('image')
  }
  get _imageError() {
    return this.image?.touched && this.image.invalid
  }
  get _imageErrorRequired() {
    return this.image?.hasError('required')
  }
}
