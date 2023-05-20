/* Angular */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/* External Libraries */
import * as _ from 'lodash';

/* Services */
import { BookService } from '../../core/services/book/book.service';
import { LocalStorageService } from '../../core/services/local-storage/local-storage.service';

/* Models */
import { Filters } from '../../core/models/filters/filters';
import { Book } from '../../core/models/book/book';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  // Used to keep untouched the initial book list as fetched from the API.
  public initialBooks: Book[] = [];

  // Used to filter down the book list and show results.
  public filteredBooks: Book[] = [];

  // Used to keep the selected filter values.
  public filters = {
    publishers: [] as string[],
    publishedYears: [] as Date[]
  }

  // Used to keep the user search keyword.
  public userInput: string = "";

  // Used to keep the filters dropdown options.
  public publisherDropdown: number[] = [];
  public publishedYearDropdown: number[] = [];

  public publishedYearsFormControl = new FormControl();
  public publishersFormControl = new FormControl();

  constructor(
    private bookService: BookService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      (response) => {
        _.forEach(response.books, (book) => {
          this.localStorageService.storeData("books", book);
        });

        this.fetchBooksFromLocalStorage();
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  public fetchBooksFromLocalStorage() {
    this.initialBooks = this.localStorageService.getData("books");
    this.filteredBooks = _.cloneDeep(this.initialBooks);

    this.loadDropdownOptions( this.initialBooks );
    this.initFilters();
  }

  public loadDropdownOptions( books: any[] ) {
    this.publisherDropdown = books
      .filter(book => book.publisher?.length > 0 )
      .map(book => book.publisher);

    this.publishedYearDropdown = books
      .filter(book => book.published )
      .map( book => book.published );
  }

  public initFilters() {
    this.publishedYearsFormControl.valueChanges.subscribe((selectedPublishedYears: Date[]) => {
      this.filters.publishedYears = selectedPublishedYears;

      this.applyFilters( this.filters, this.userInput );
    });

    this.publishersFormControl.valueChanges.subscribe((selectedPublishers: string[]) => {
      this.filters.publishers = selectedPublishers;

      this.applyFilters( this.filters, this.userInput );
    });
  }

  // Triggered when user type in search bar.
  public search() {
    this.applyFilters( this.filters, this.userInput );
  }

  // Apply all filters in the book list.
  public applyFilters( filters: Filters, searchKeyword: string) {
    if( !this.initialBooks ) {
      alert("Oups, something went wrong while fetching the books. Please refresh the page.");
      return;
    }
    
    if( this.initialBooks.length === 0 ) return;

    this.filteredBooks = this.initialBooks.filter(book => {
      return  this.filterByTitle(book, searchKeyword) &&
              this.filterByPublishedYear(book, filters.publishedYears) &&
              this.filterByPublisher(book, filters.publishers)
    });
  }

  // Title Filter.
  public filterByTitle(book: Book, searchKeyword: string): boolean {
    if( !book || !book.title ) return false;

    return book.title.toLowerCase().includes(searchKeyword.toLowerCase());
  }
  
  // Published Year Filter.
  public filterByPublishedYear(book: Book, selectedPublishedYears: Date[]): boolean {
    if( selectedPublishedYears.length === 0 ) return true;

    return selectedPublishedYears.includes(book.published);
  }
  
  // Publisher Filter.
  public filterByPublisher(book: Book, selectedPublishers: string[]): boolean {
    if( selectedPublishers.length === 0 ) return true;

    return selectedPublishers.includes(book.publisher);
  }

  public clearFilters(): void {
    this.publishedYearsFormControl.setValue([]);
    this.publishersFormControl.setValue('');
    this.userInput = '';

    this.applyFilters( this.filters, this.userInput );
  }
}
