import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { PostMovieComponent } from './pages/post-movie/post-movie.component';


@NgModule({
  declarations: [
    ListComponent,
    MovieCardComponent,
    PostMovieComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListRoutingModule
  ]
})
export class ListModule { }
