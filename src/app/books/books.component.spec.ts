import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { BooksComponent } from './books.component';
//import { BookServiceService } from '../services/book-service.service'
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookListState } from '../books/store/reducers/book.reducers';
import { staticBookList  } from '../model/books-list';

import { BookModel } from '../model/book-model';
const BookServiceServiceStub = {
  get() {
    const books = [{
      "_id": "5c5b2a5c641eb32f96ddb2ad",
      "bookTitle": "Jaclyn Graves",
      "rating": 10,
      "authorName": "Fern Ingram"
    }];
    return of( books );
  }
};

const bookListState: BookListState = {
  bookList: staticBookList.getList(),
  loading: false

}

const mockBookList = {
  get bookList() { return of(staticBookList.getList()); }
}


describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksComponent ],
      schemas:[NO_ERRORS_SCHEMA],
      providers: [
        { provide:  Store, useValue: BookServiceServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    component.bookListState$ = mockBookList.bookList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get values from Service', () => {
    component.getBooks();
    expect(component.bookList.length).toBeGreaterThanOrEqual(0);
  });
});
