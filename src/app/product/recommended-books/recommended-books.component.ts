import { Component } from '@angular/core';

/* Services */
import { LocalStorageService } from '../../core/services/local-storage/local-storage.service';

/* Models */
import { Book } from '../../core/models/book/book';

@Component({
  selector: 'app-recommended-books',
  templateUrl: './recommended-books.component.html',
  styleUrls: ['./recommended-books.component.scss']
})
export class RecommendedBooksComponent {

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  public books: Book[] = [];
  public visibleBooks: Book[] = [];

  ngOnInit() {
    this.books = this.localStorageService.getData("books");
    this.visibleBooks = [this.books[0], this.books[1], this.books[2], this.books[3]]
  }
}
