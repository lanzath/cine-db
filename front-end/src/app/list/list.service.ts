import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Movie from './models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:8000/api/v1/movies');
  }

  postMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>('http://localhost:8000/api/v1/movies', movie);
  }
}
