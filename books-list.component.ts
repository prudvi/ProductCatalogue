import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../../model/book-model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  @Input()
  bookList: BookModel[];
  constructor() { }

  ngOnInit() {
  }

}
