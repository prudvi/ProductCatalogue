import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../../model/book-model'
import { staticBookList } from '../../../model/books-list'
// import { BookServiceService } from '../../../services/book-service.service'

import { ActivatedRoute ,Router } from '@angular/router'; 
import { Subscription,Observable, of } from 'rxjs';

import { Store } from '@ngrx/store';

import * as BookActions from '../../store/actions/book.actions';

import { BookListState } from '../../store/reducers/book.reducers'
@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {
  model: any;
  bookListState$: Observable<BookModel[]>;
  
  constructor(private router:Router,
     private activatedRoute: ActivatedRoute, 
     private store: Store<BookListState>
     // , private booksvc :BookServiceService
      ) {
  }

  ngOnInit() {
    this.model = {};
  }

  add(addBookForm) {
    console.log("Add Form", addBookForm)
    let book: BookModel = {
      bookTitle : addBookForm.controls.bookName.value,
      authorName : addBookForm.controls.authorName.value,
      rating : addBookForm.controls.rating.value,
      isSelected : false,
      _id : this.randomString(32)
     }
     
    this.store.dispatch(new BookActions.AddBOOK(book)) 
    this.router.navigate(["/books"]);
    // this.booksvc.addBook(book).subscribe((data: BookModel[]) => {
    //   this.router.navigate(["/books"]);
    // });

  }

  cancel() {
    this.router.navigate(["/books"]);
  }
  randomString(length) {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = '';
    for (var i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
      return result;
  }


}
