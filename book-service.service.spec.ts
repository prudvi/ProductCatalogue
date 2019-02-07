import { TestBed } from '@angular/core/testing';
import { BookModel } from '../model/book-model'

import { staticBookList } from '../model/books-list'
import { BookServiceService } from './book-service.service';

describe('BookServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookServiceService = TestBed.get(BookServiceService);
    expect(service).toBeTruthy();
  });

  it('should call the getBooks() service and check the Books List Length', (done) => {
    let currentBookCOuntLenth = 15;
    const service: BookServiceService = TestBed.get(BookServiceService);
    service.getBooks().subscribe((data: BookModel[]) => {
      expect(data.length).toBeGreaterThanOrEqual(currentBookCOuntLenth);
      done()
    });
  });

  it('should call the addBooks() service and check the Books List Length', (done) => {
    const service: BookServiceService = TestBed.get(BookServiceService);
    let currentLenth = staticBookList.getList().length;
    let newBook: BookModel = {
      "_id": "5c5b2a5c641eb32f96ddb2ad",
      "bookTitle": "Jaclyn Graves",
      "rating": 10,
      "authorName": "Fern Ingram"
    };

    service.addBook(newBook).subscribe((data: BookModel[]) => {
      expect(data.length).toEqual(currentLenth+1);
      done()
    });
  });
});
