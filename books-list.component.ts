import { Component, OnInit, Input,Output } from '@angular/core';
import { BookModel } from '../../model/book-model';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  @Input()
  bookList: BookModel[];

  @Output()
  selectMultiple = new EventEmitter();

  @Output()
  deleteSelected = new EventEmitter();

  ngOnInit() {
    this.clearSelectedList();
  }

  clearSelectedList() {
    this.bookList.forEach(element=>{
      element.isSelected = false;
    });
  }

  onRowSelect(event) {
    let book:BookModel;
    this.bookList.forEach(element => {
      if (element._id === event.target.id) {
        book = element;
        element.isSelected = !element.isSelected;
      }
    });

    if (book)
      this.selectMultiple.emit(book);
  }

  onRowDelete(event) {
    let book  = this.bookList.find(x => x._id === event.target.id);
    this.deleteSelected.emit(book);
  }

}
