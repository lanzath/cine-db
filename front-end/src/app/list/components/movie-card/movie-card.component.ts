import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import Movie from '../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit, OnChanges {

  @Input() movieData: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.movieData.currentValue) {
      this.movieData.release_date = new Date(this.movieData.release_date).toLocaleDateString('pt-BR');
    }
  }

}
