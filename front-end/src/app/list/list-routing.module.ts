import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { PostMovieComponent } from './pages/post-movie/post-movie.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'post', component: PostMovieComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
