import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BookModel } from '../../../model/book-model';

export const ADD_BOOK = '[BOOK] Add';
export const REMOVE_BOOK = '[BOOK] Remove';

export const DELETE_MULTIPLE_BOOK = '[BOOK] Delete Multiple';
export const GET_BOOKS = '[BOOK] GET LIST';

export class AddBOOK implements Action {
    readonly type = ADD_BOOK;

    constructor(public payload: BookModel) {}
}

export class RemoveBOOK implements Action {
    readonly type = REMOVE_BOOK;

    constructor(public payload: BookModel) {}
}

export class DeleteMultipleBOOK implements Action {
    readonly type = DELETE_MULTIPLE_BOOK;

    constructor(public payload: BookModel[]) {}
}

export class GetBooks implements Action {
    readonly type = GET_BOOKS;

    //constructor(public payload: BookModel[]) {}
}

export type Actions = AddBOOK | RemoveBOOK | GetBooks | DeleteMultipleBOOK;