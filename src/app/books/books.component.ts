
//import { BookServiceService } from './../services/book-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookModel } from '../model/book-model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmationComponent } from '../common/delete-confirmation/delete-confirmation.component';
import { Store } from '@ngrx/store';
import { getBooks } from '../books/store/selector/book.selector';
import * as BookActions from '../books/store/actions/book.actions';

import { BookListState } from '../books/store/reducers/book.reducers';

import { Subscription,Observable, of } from 'rxjs';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy  {

	bookList: BookModel[] = [] ;
	selectedBooks: BookModel[] = [] ;

	bkListSubscibe: Subscription;
	bkDeletetSubscibe: Subscription;

	bookListState$: Observable<BookModel[]>;
	
	constructor(
		// private bks :BookServiceService,
		private store: Store<BookListState>, 
		private modalService: NgbModal) { }
	

	ngOnInit() {
		this.selectedBooks = [];
		this.getBooks();
  }
  
  getBooks() {
		this.bookList = [];
		this.bookListState$ = this.store.select( state => state.bookList);
		this.store.dispatch(new BookActions.GetBooks());
	}

	addMultiple(book:BookModel) {
		if (book.isSelected)
			this.selectedBooks.push(book);
		else
			this.selectedBooks.splice(this.selectedBooks.indexOf(book), 1)
	}

	deleteSelected() {
		this.store.dispatch(new BookActions.DeleteMultipleBOOK(this.selectedBooks));
		this.selectedBooks = [];
	}

	
	deleteSingleBook( book: BookModel) {
		this.store.dispatch(new BookActions.RemoveBOOK(book));
	}

  ngOnDestroy() {
		//this.emListSubscibe.unsubscribe();
		//this.emDeletetSubscibe.unsubscribe();
	}
}
