export interface Book {
    title: string,
    subtitle: string,
    description: string,
    author: string[],
    published: Date,
    publisher: string,
    categories: number[],
    isbn: string,
    isbn13: string,
    image: string
    pages: number,
    website: string,
    rating: number
}