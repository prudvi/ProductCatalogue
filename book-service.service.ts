import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { BookModel } from '../model/book-model';
import { staticBookList } from '../model/books-list'
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  getBooks(): Observable<BookModel[]> {
    return of(staticBookList.getList());
  }

  addBook (book): Observable<any> {
    staticBookList.getList().push(book);
    return of(staticBookList.getList());
  }
}
