import { Component } from '@angular/core';
import { BookServiceService } from '../services/book-service.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrl: './show-book.component.css'
})
export class ShowBookComponent {
  book: Array<Book> = []
  constructor(private books: BookServiceService) {
    this.book = this.books.getBooks();
  }


}
