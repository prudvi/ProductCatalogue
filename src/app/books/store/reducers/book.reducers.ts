import { Action } from '@ngrx/store'
import { BookModel } from '../../../model/book-model'
import * as BookActions from '../actions/book.actions'
import { staticBookList  } from '../../../model/books-list'

export interface BookListState {
    bookList: BookModel[];
    loading: boolean;
}

export const initialState: BookListState = {
    loading: false,
    bookList: staticBookList.getList()
} 

export function reducer(state: BookListState = initialState, action: BookActions.Actions) {
    switch(action.type) {
        case BookActions.ADD_BOOK:
            return {...state, bookList: [...state.bookList, {...action.payload }] };
        case BookActions.REMOVE_BOOK:
            return {
                ...state,
                bookList: state.bookList.filter(  book => 
                    book._id !== action.payload._id
                )
            }
			
        case BookActions.DELETE_MULTIPLE_BOOK:
            action.payload.forEach((element, index) => {
                const deletIndex = state.bookList.
                findIndex( item => element._id === item._id);
                state.bookList.splice(deletIndex, 1);
            });
            return {...state, bookList: 
                            state.bookList 
                    };
		case BookActions.GET_BOOKS:
            return { ...state }
        default:
            return state;
    }
}