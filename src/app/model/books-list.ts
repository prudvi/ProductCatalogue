import { BookModel } from "./book-model";

const books_list: BookModel[] = [
  {
    "_id": "5c5ae4c9fca0b04c3f0f9f8a",
    "bookTitle": "Heather Gallegos",
    "rating": 5,
    "authorName": "Jeannette Mayo",
    "isSelected": false
  },
  {
    "_id": "5c5ae4c938b55b7a0205d2bc",
    "bookTitle": "Foster Burch",
    "rating": 4,
    "authorName": "Skinner Beasley",
    "isSelected": false
  },
  {
    "_id": "5c5ae4c9fefe6f6a7ada1ebd",
    "bookTitle": "Flowers Oconnor",
    "rating": 3,
    "authorName": "Torres Britt",
    "isSelected": false
  },
  {
    "_id": "5c5ae4c9432dab24c2acbd34",
    "bookTitle": "Louella Morris",
    "rating": 3,
    "authorName": "Schroeder Holman",
    "isSelected": false
  },
  {
    "_id": "5c5ae4c91b11f6a9a31d2660",
    "bookTitle": "Pena Cotton",
    "rating": 1,
    "authorName": "Perkins Perez",
    "isSelected": false
  },
  {
    "_id": "5c5ae4c9aa47ea1059e78cc8",
    "bookTitle": "Minnie Obrien",
    "rating": 8,
    "authorName": "Hooper Dorsey",
    "isSelected": false
  },
  {
    "_id": "5c5ae4c94dc59d6f67a8866c",
    "bookTitle": "Darcy Hopper",
    "rating": 9,
    "authorName": "Yesenia Pratt",
    "isSelected": false
  },
  {
    "_id": "5c5ae4c983e61b2ba588f964",
    "bookTitle": "Moore Rivera",
    "rating": 8,
    "authorName": "Williamson Shields",
    "isSelected": false
  },
  {
    "_id": "5c5ae4c956a28d8ddbfc7fa3",
    "bookTitle": "Hardy Levy",
    "rating": 6,
    "authorName": "Hardin Newton",
    "isSelected": false
  },
  {
    "_id": "5c5ae4c9e81383db38fcf7dc",
    "bookTitle": "Mcknight Sykes",
    "rating": 3,
    "authorName": "Jacquelyn Parrish",
    "isSelected": false
  },
  {
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
  },
  {
    "_id": "5c606d9cb266f23fac8eaa92",
    "bookTitle": "Shaffer Oliver",
    "rating": 10,
    "authorName": "Debora Berry",
    "isSelected": false
  },
  {
    "_id": "5c606d9cdd4219ad19457134",
    "bookTitle": "Harrison Walters",
    "rating": 2,
    "authorName": "Noble Gilliam",
    "isSelected": false
  },
];

export class staticBookList  {
  static getList():BookModel[] {
    return books_list
  } ;
};