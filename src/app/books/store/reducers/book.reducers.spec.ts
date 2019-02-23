import { BookModel } from './../../../model/book-model';
import { staticBookList } from './../../../model/books-list';
import { getBooks } from './../selector/book.selector';
import { Action } from '@ngrx/store';
import * as fromBookactions from './../actions/book.actions';
import * as fromBookReducers from './book.reducers';


import { GetBooks, REMOVE_BOOK, DeleteMultipleBOOK } from './../actions/book.actions';

fdescribe('BooksReducer', () => {
    const deleteBook: BookModel =  {
        "_id": "5c606d9cdd4219ad19457134",
        "bookTitle": "Harrison Walters",
        "rating": 2,
        "authorName": "Noble Gilliam",
        "isSelected": false
      };

      const newBook: BookModel = {
        "_id": "5c606d9cdd4219ad194632134",
        "bookTitle": "Dream wit your Ees Open",
        "rating": 2,
        "authorName": "Rssvile ame",
        "isSelected": false
    };

    const DeleteMultipeook: BookModel[] = [{
        "_id": "5c5ae4c958c3a1132598418b",
        "bookTitle": "Neal Dickerson",
        "rating": 3,
        "authorName": "Dickson Orr",
        "isSelected": false
       },
    
       {
        "_id": "5c606d9c8486d868d5430f46",
        "bookTitle": "Conley Morgan",
        "rating": 6,
        "authorName": "Stefanie Rhodes",
        "isSelected": false
      },
      {
        "_id": "5c606d9c35d1bd2f01afcbd7",
        "bookTitle": "Estella Whitehead",
        "rating": 8,
        "authorName": "Hannah Mays",
        "isSelected": false
      }];
    
    it('should return the default state', () => {
      const { initialState } = fromBookReducers;
      const action = {};
      const state = fromBookReducers.reducer(undefined, action);

      expect(state).toBe(initialState);
    });

    it('GET BOOKS STATE Should msatch ACTON REDUCER', () => {
      const { initialState } = fromBookReducers;
      const action = new fromBookactions.GetBooks();
      const state = fromBookReducers.reducer(initialState, action);
  
      expect(state.bookList).toEqual(staticBookList.getList())
      expect(state.bookList.length).toEqual(staticBookList.getList().length);
    });
 
    it('DELETE_MULTIPLE_BOOK BOOKS STATE Should Execute ACTON REDUCER', () => {
      const { initialState } = fromBookReducers;
      const action = new fromBookactions.DeleteMultipleBOOK(DeleteMultipeook);
      const state = fromBookReducers.reducer(initialState, action);
  
     // expect(state.bookList).toEqual(staticBookList.())
     expect(state.bookList.length).toEqual(staticBookList.getList().length)
    });
 
    it(' SINGLE BOOK DELETE EXECUTION ACTON REDUCER', () => {
      const { initialState } = fromBookReducers;
      
      const action = new fromBookactions.RemoveBOOK(deleteBook);
      const state = fromBookReducers.reducer(initialState, action);
  
      expect(state.bookList.length).toEqual(staticBookList.getList().length-1);
    });
  
    it('ADD_BOOK ACTON REDUCER', () => {
      const { initialState } = fromBookReducers;
    
      const action = new fromBookactions.AddBOOK(newBook);
      const state = fromBookReducers.reducer(initialState, action);
      expect(state.bookList.length).toEqual(staticBookList.getList().length+1);
    });
  
});