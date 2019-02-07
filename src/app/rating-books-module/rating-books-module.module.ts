import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SortByRatingPipe} from './pipes/sort-by-rating.pipe'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SortByRatingPipe],
  exports: [SortByRatingPipe]
})
export class RatingBooksModuleModule { }
