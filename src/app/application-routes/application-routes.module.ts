import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from '../body/body.component';

const routes: Routes = [
   { path: '', component: BodyComponent}

  //  { path: '', component: BodyComponent}

   
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
