/* Angular */
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

/* Services */
import { BookCategoryService } from '../../core/services/book-category/book-category.service';
import { LocalStorageService } from '../../core/services/local-storage/local-storage.service';

/* Models */
import { BookCategory } from '../../core/models/book-category/book-category';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.scss']
})
export class ProductCreationComponent {
  // Used for the category dropdown options.
  public bookCategoryDropdown: BookCategory[] = [];

  // Used to store the final books payload.
  public bookForm: FormGroup = new FormGroup({});

  public authorName: FormControl = new FormControl('', Validators.required);

  constructor(
    private formBuilder: FormBuilder,
    private storageService: LocalStorageService,
    private bookCategoryService: BookCategoryService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.bookCategoryDropdown = this.bookCategoryService.getBookCategories();
    this.initializeΒοοκForm();
  }

  public initializeΒοοκForm(): void {
    this.bookForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(120), Validators.pattern(/^[a-zA-Z0-9@#&*! ]+$/)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern(/^[A-Z]/)]),
      categories: new FormControl([], [Validators.required, Validators.maxLength(4)]),
      author: new FormArray([], [Validators.required, Validators.maxLength(3)]),
      publisher: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
      published: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^\d{4}$/)]),
      pages: new FormControl(null, [Validators.required, Validators.max(9999)]),
      isbn: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d{10}$/)]),
      isbn13: new FormControl(null, [Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern(/^\d{13}$/)]),
      options: new FormControl('', Validators.maxLength(512)),
      rating: new FormControl(0, [Validators.min(0), Validators.max(5), Validators.pattern(/^\d{1}$/)]),
      image: new FormControl('')
    });
  }

  get getAuthor() {
    return this.bookForm.get('author') as FormArray;
  }

  get author(): FormArray {
    return this.bookForm.get('author') as FormArray;
  }

  addAuthor(author: string): void {
    if (!author) return;
  
    const authorControl = this.bookForm.get('author') as FormArray;
  
    if( authorControl.value.length < 3 ) {
      authorControl.push(this.formBuilder.control(author));
      this.authorName.setValue('');
    }
  
    this.isAuthorRequired();
  }

  isAuthorRequired() {
    const authorControl = this.bookForm.get('author');
    
    if( authorControl?.value.length === 0 || authorControl?.value.length > 3 ) {
      this.authorName?.setValidators([Validators.required]);
    } else {
      this.authorName?.clearValidators();
    }

    this.authorName?.updateValueAndValidity();
  }

  removeAuthor( authorIndex: number ): void {
    this.getAuthor.removeAt(authorIndex);
    this.isAuthorRequired();
  }

  hasError(field: string, errorName: string): boolean {
    const formField = this.bookForm.get( field );
    return formField?.hasError(errorName) && (formField?.dirty || formField?.touched) || false;
  }
  
  // Update the bookForm with the selected file.
  onFileSelected(imageBase64: string) {
    this.bookForm.get('image')?.setValue(imageBase64);
  }

  getFormControl(field: string): FormControl {
    const abstractControl = this.bookForm.get(field);

    return abstractControl as FormControl;
  }

  onSubmit(): void {
    // Store the book in local storage.
    this.storageService.storeData("books", this.bookForm.value);

    // Clear the form fields after successful submission
    this.bookForm.reset();

    // Navigate to the search page
    this.router.navigate(['/product-search']);
  }
}