import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListComponent } from './books-list.component';
import { BookModel } from '../../model/book-model';
//import { staticBookList } from '../model/books-list';
import { SortByRatingPipe } from '../../rating-books-module/pipes/sort-by-rating.pipe'
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { staticBookList } from '../../model/books-list'
 describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksListComponent, SortByRatingPipe ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    component.bookList = staticBookList.getList();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Setting booklist items ', () => {
    component.bookList = staticBookList.getList();
    expect(component.bookList.length).toBeLessThanOrEqual(staticBookList.getList().length)
  });
});
