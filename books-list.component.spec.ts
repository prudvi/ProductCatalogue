import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListComponent } from './books-list.component';
import { BookModel } from '../../model/book-model';
//import { staticBookList } from '../model/books-list';
import { staticBookList } from '../../model/books-list'
describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
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
