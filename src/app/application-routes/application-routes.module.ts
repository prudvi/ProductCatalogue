import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from '../body/body.component';
import { BooksComponent } from '../books/books.component';
import { MoviesComponent } from '../movies/movies.component';

const routes: Routes = [
   { path: '', component: BodyComponent}
,
    { path: 'movies', component: MoviesComponent},
    { path: 'books', component: BooksComponent}

   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class ApplicationRoutesModule { }
