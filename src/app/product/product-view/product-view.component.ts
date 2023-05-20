/* Angular */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/* Services */
import { LocalStorageService } from '../../core/services/local-storage/local-storage.service';
import { BookCategoryService } from '../../core/services/book-category/book-category.service';

/* Models */
import { Book } from '../../core/models/book/book';
import { BookCategory } from '../../core/models/book-category/book-category';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  // Used to keep the selected book data.
  public book: Book | null = null;
  
  // Used for the category dropdown options.
  public bookCategoryDropdown: BookCategory[] = [];

  // Used to dynamically show a list of all the desired book properties.
  public bookProperties: { label: string, value: string }[] = [];

  constructor(
    private localStorage: LocalStorageService,
    private bookCategoryService: BookCategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.bookCategoryDropdown = this.bookCategoryService.getBookCategories();
    const bookISBN = parseInt(this.route.snapshot.paramMap.get('id') ?? "");

    this.book = this.localStorage.getBookByISBN(bookISBN);
    if( !this.book ) alert("Book not found!");

    this.populateBookProperties();
  }

  populateBookProperties() {
    if( !this.book ) return;

    this.bookProperties = [
      { label: 'Publisher', value: this.book.publisher },
      { label: 'Published Year', value: this.book.published.toString() },
      { label: 'Categories', value: this.bookCategoryService.getCategoryNamesForIds( this.book.categories ) },
      { label: 'No. of Pages', value: this.book.pages.toString() },
      { label: 'ISBN-10', value: this.book.isbn },
      { label: 'ISBN-13', value: this.book.isbn13 },
    ];
  }

  getAuthorNames() {
    if( !this.book || !this.book.author ) return "-";

    return Array.isArray( this.book.author ) ? this.book.author.join(', ') : this.book?.author;
  }
}
