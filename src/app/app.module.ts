import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

import {ApplicationRoutesModule} from './application-routes/application-routes.module';
import { StoreModule } from '@ngrx/store';

import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbActiveModal  } from '@ng-bootstrap/ng-bootstrap';

import { from } from 'rxjs';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { RatingBooksModuleModule } from './rating-books-module/rating-books-module.module';
import { AddNewBookComponent } from './books/add-books/add-new-book/add-new-book.component';
import { DeleteConfirmationComponent } from './common/delete-confirmation/delete-confirmation.component';

import { reducer } from '../app/books/store/reducers/book.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    BooksComponent,
    MoviesComponent,
    BooksListComponent,
    AddNewBookComponent,
    DeleteConfirmationComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, NgbModule,
    ApplicationRoutesModule, RatingBooksModuleModule, 
    StoreModule.forRoot({bookList: reducer})
  ],
  providers: [NgbActiveModal ],
  bootstrap: [AppComponent],
  entryComponents: [DeleteConfirmationComponent],

})
export class AppModule { }
