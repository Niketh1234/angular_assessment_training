import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  constructor(private books: BookServiceService) { }
  book: Book = new Book();
  addFunction() {
    if (this.book.authorName == '' || this.book.publishingYear == '' || this.book.bookName == '' || this.book.language == '') {
      alert('Enter all the fields')
    }
    else {
      this.books.newBook(this.book);
      this.book = new Book();
      alert("Book Added Successfully")
    }
  }
  cancelFunction() {
    this.book = new Book();
  }

}
