/* Angular */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Models */
import { Book } from '../../../core/models/book/book';

interface APIResponse {
  books: Book[]
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = 'https://gist.githubusercontent.com/nanotaboada/6396437/raw/855dd84436be2c86e192abae2ac605743fc3a127/books.json';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<APIResponse>(this.booksUrl);
  }
}
