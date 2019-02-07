import { BookModel } from "./book-model";

const books_list: BookModel[] = [
  {
    "_id": "5c5ae4c9fca0b04c3f0f9f8a",
    "bookTitle": "Heather Gallegos",
    "rating": 5,
    "authorName": "Jeannette Mayo"
  },
  {
    "_id": "5c5ae4c938b55b7a0205d2bc",
    "bookTitle": "Foster Burch",
    "rating": 4,
    "authorName": "Skinner Beasley"
  },
  {
    "_id": "5c5ae4c9fefe6f6a7ada1ebd",
    "bookTitle": "Flowers Oconnor",
    "rating": 3,
    "authorName": "Torres Britt"
  },
  {
    "_id": "5c5ae4c9432dab24c2acbd34",
    "bookTitle": "Louella Morris",
    "rating": 3,
    "authorName": "Schroeder Holman"
  },
  {
    "_id": "5c5ae4c91b11f6a9a31d2660",
    "bookTitle": "Pena Cotton",
    "rating": 1,
    "authorName": "Perkins Perez"
  },
  {
    "_id": "5c5ae4c9aa47ea1059e78cc8",
    "bookTitle": "Minnie Obrien",
    "rating": 8,
    "authorName": "Hooper Dorsey"
  },
  {
    "_id": "5c5ae4c94dc59d6f67a8866c",
    "bookTitle": "Darcy Hopper",
    "rating": 9,
    "authorName": "Yesenia Pratt"
  },
  {
    "_id": "5c5ae4c983e61b2ba588f964",
    "bookTitle": "Moore Rivera",
    "rating": 8,
    "authorName": "Williamson Shields"
  },
  {
    "_id": "5c5ae4c956a28d8ddbfc7fa3",
    "bookTitle": "Hardy Levy",
    "rating": 6,
    "authorName": "Hardin Newton"
  },
  {
    "_id": "5c5ae4c9e81383db38fcf7dc",
    "bookTitle": "Mcknight Sykes",
    "rating": 3,
    "authorName": "Jacquelyn Parrish"
  },
  {
    "_id": "5c5ae4c958c3a1132598418b",
    "bookTitle": "Neal Dickerson",
    "rating": 3,
    "authorName": "Dickson Orr"
  },
  {
    "_id": "5c5ae4c9cf860752d52a4510",
    "bookTitle": "Essie Barrera",
    "rating": 7,
    "authorName": "Coleen Cannon"
  },
  {
    "_id": "5c5ae4c9647bc310ba53a5b2",
    "bookTitle": "Fletcher Wise",
    "rating": 2,
    "authorName": "Christine Moody"
  },
  {
    "_id": "5c5ae4c947135109cbae40a9",
    "bookTitle": "Maxwell Gentry",
    "rating": 3,
    "authorName": "Sargent Black"
  },
  {
    "_id": "5c5ae4c921c95fd86ccbca6f",
    "bookTitle": "Tanya Armstrong",
    "rating": 10,
    "authorName": "Mccullough Combs"
  }
];

export class staticBookList  {
  static getList():BookModel[] {
    return books_list
  } ;
};