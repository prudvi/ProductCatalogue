import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  // const endpoint = 'http://localhost:3000/api/v1/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getBooksList(): Observable<any> {
    return this.http.get('booksList').pipe(
      map(this.extractData));
  }
  
  getBook(id): Observable<any> {
    return this.http.get( 'book/' + id).pipe(
      map(this.extractData));
  }

  addBook (book): Observable<any> {
    console.log(book);
    return this.http.post<any>( 'book', JSON.stringify(book), this.httpOptions).pipe(
      tap((product) => console.log(`added book w/ id=${book.employeeCode}`)),
      catchError(this.handleError<any>('addBook'))
    );
  }
  
  updateBook (id, book): Observable<any> {
    return this.http.put( 'employee/' + id, JSON.stringify(book), this.httpOptions).pipe(
      tap(_ => console.log(`updated book id=${id}`)),
      catchError(this.handleError<any>('updateBook'))
    );
  }
  
  deleteBookeDetails (id): Observable<any> {
    return this.http.delete<any>( 'book/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted book id=${id}`)),
      catchError(this.handleError<any>('deleteBookeDetails'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
