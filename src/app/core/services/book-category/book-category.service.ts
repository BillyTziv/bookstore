import { Injectable } from '@angular/core';

/* Models */
import { BookCategory } from '../../../core/models/book-category/book-category';

@Injectable({
  providedIn: 'root'
})
export class BookCategoryService {
  private bookCategories: BookCategory[] = [
    { id: 1, name: 'Fiction' },
    { id: 2, name: 'Non-fiction' },
    { id: 3, name: 'Science' },
    { id: 4, name: 'History' },
    { id: 5, name: 'Fantasy' },
    { id: 6, name: 'Thriller' },
    { id: 7, name: 'Westerns' },
    { id: 8, name: 'Dystopian' },
    { id: 9, name: 'Contemporary' }
  ];

  getBookCategories(): BookCategory[] {
    return this.bookCategories;
  }

  getCategoryNamesForIds(categoryIds: number[]): string {
    if( !categoryIds ) return "";

    const categoryNames = categoryIds.map((categoryId) => {
      const category = this.bookCategories.find((c) => c.id === categoryId);
      return category ? category.name : '';
    });

    return categoryNames.join(', ');
  }
}
