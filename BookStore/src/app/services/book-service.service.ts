import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  books: Array<Book> = []
  constructor() { }
  newBook(book: Book) {
    this.books.push(book)
  }
  getBooks() {
    return this.books;
  }
}
