/* Angular */
import { Injectable } from '@angular/core';

/* Models */
import { Book } from '../../models/book/book';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly localStorageKey = 'books';
  
  constructor() { }

  getBookByISBN( bookISBN: number ) {
    const storedBookList = this.getData( this.localStorageKey );
    
    if( !storedBookList || !Array.isArray(storedBookList)) return null;

    return storedBookList.find( book => parseInt(book.isbn) === bookISBN) ?? null;
  }

  getData(key: string): any {
    const data = localStorage.getItem(key);
    if( !data ) return null;
    
    return JSON.parse(data);
  }

  storeData(key: string, newBook: any): void {
    // Get all the books from the local storage.
    const storedBookList = this.getData( key );
    let updatedBookList = storedBookList ?? [];
    
    // Check if the new book already exists in the stored book list.
    const bookExists = updatedBookList.some((book: Book) => book.title === newBook.title);

    // Store the new book only if it doesn't already exist.
    if( bookExists ) return;

    // Add the new book to the updated book list.
    updatedBookList.push(newBook);

    // Store the updated book list in the local storage.
    localStorage.setItem(key, JSON.stringify(updatedBookList));
  }

  clearData(key: string): void {
    localStorage.removeItem(key);
  }
}
