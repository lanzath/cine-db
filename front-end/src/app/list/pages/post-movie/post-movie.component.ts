import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ListService } from '../../list.service';
import Movie from './../../models/movie.model';

@Component({
  selector: 'app-post-movie',
  templateUrl: './post-movie.component.html',
  styleUrls: ['./post-movie.component.scss']
})
export class PostMovieComponent implements OnInit {

  postForm: FormGroup;
  id = this.fb.control('');
  name = this.fb.control('', [Validators.required]);
  release_date = this.fb.control('', [Validators.required]);
  synopsis = this.fb.control('', [Validators.required]);
  director = this.fb.control('', [Validators.required]);
  rate = this.fb.control('', [Validators.required, Validators.max(5), Validators.min(0)]);
  poster_url = this.fb.control('', [Validators.required]);

  constructor(private fb: FormBuilder, private listService: ListService, private router: Router) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      id: this.id,
      name: this.name,
      release_date: this.release_date,
      synopsis: this.synopsis,
      director: this.director,
      rate: this.rate,
      poster_url: this.poster_url,
    });
  }

  back(): void {
    this.router.navigateByUrl('/');
  }

  onSubmit(): void {
    if (!this.postForm.invalid) {
      this.release_date.setValue(new Date(this.release_date.value).toLocaleDateString('en-CA'))
      const result = this.postForm.value as Movie;
      this.listService.postMovie(result).subscribe((res: Movie) => {
        if (res) {
          this.back();
        }
      });
    } else {
      Object.keys(this.postForm.controls).forEach(key => {
        if (this[key].value === null || this[key].value.length === 0 && this[key].hasError('required')) {
          this[key].markAsDirty();
        }
      });
    }
  }

}
