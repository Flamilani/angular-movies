import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
    ) { 
      headerService.headerData = {
        title: 'Filmes',
        icon: 'movie_filter',
        routerUri: ''
      }
    }

  ngOnInit(): void {
  }

  navigateToMovieCreate() {
    this.router.navigate(['movies/create']);
  }

}
