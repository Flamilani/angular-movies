import { SharedService } from './../../../shared/shared.service';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

  movie: Movie = {
    title: '',
    director: '',
    genres: '',
    year: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private sharedService: SharedService,
    private fb: FormBuilder
    ) { }
    
  updateForm!: FormGroup;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.updateForm = this.fb.group({
      id: [""],
      title: ["", [Validators.required, Validators.minLength(5)]],
      director: ["", [Validators.required]],
      genres: ["", [Validators.required]],
      year: ["", [Validators.required]],
    });

    this.movieService.getById(id).subscribe(movie => {
      this.movie = movie;
      this.updateForm.setValue({
        id: movie.id,
        title: movie.title,
        director: movie.director,
        genres: movie.genres,
        year: movie.year
      });
    });
  }

  errorHandlingForm = (control: string, error: string) => {
    return this.updateForm.controls[control].hasError(error);
  };

  updateMovie() {
    if (this.updateForm.valid) {
        this.movieService.update(this.updateForm.value).subscribe(() => {
        this.sharedService.showMessage("Filme Atualizado com sucesso!");
        this.router.navigate(["/movies"]);
      });
    }
  }

  cancel() {
    this.router.navigate(["/movies"]);
  }

}
