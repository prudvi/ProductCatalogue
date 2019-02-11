import { createSelector } from '@ngrx/store';

import { reducer } from '../reducers/book.reducers';
import { BookModel } from '../../../model/book-model';

export function getState(state: BookModel[]): BookModel[] {
    return state;
}

export function fetchBooks(state: BookModel[]): BookModel[] {
    return state;
}

export const getBooks = createSelector(getState, fetchBooks);