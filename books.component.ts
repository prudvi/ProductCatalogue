
import { BookServiceService } from './../services/book-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookModel } from '../model/book-model';
import { Subscription,Observable, of } from 'rxjs';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit,OnDestroy  {

  bookList: BookModel[] = [] ;

	bkListSubscibe: Subscription;
	bkDeletetSubscibe: Subscription;
	constructor(private bks :BookServiceService) { }

	ngOnInit() {
		this.getBooks();
  }
  
  getBooks() {
		this.bookList = [];
		this.bkListSubscibe = this.bks.getBooks().subscribe((data: BookModel[]) => {
      
      this.bookList = data;
      console.log(":::"+this.bookList);
		});
	}

  ngOnDestroy() {
		//this.emListSubscibe.unsubscribe();
		//this.emDeletetSubscibe.unsubscribe();
	}
}
