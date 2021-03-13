import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListService } from './list.service';
import Movie from './models/movie.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movies: Movie[];

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit(): void {
    this.listService.getMovies().subscribe((res: Movie[]) => {
      this.movies = res;
    });
  }

  navigateToPost(): void {
    this.router.navigateByUrl('/post');
  }

}
