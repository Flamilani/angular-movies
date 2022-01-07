import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
    ) { 
      headerService.headerData = {
        title: 'Séries',
        icon: 'theaters',
        routerUri: ''
      }
    }

  ngOnInit(): void {
  }

  navigateToSerieCreate() {
    this.router.navigate(['series/create']);
  }

}
