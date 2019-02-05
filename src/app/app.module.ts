import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

import {ApplicationRoutesModule} from './application-routes/application-routes.module'


import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    BooksComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,NgbModule,ApplicationRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
