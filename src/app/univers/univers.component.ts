import { Component, OnInit } from '@angular/core';
import { University } from 'src/models/universModel';
import { UniversitiesService } from '../universities.service';

@Component({
  selector: 'app-univers',
  templateUrl: './univers.component.html',
  styleUrls: ['./univers.component.css']
})
export class UniversComponent implements OnInit {

  title: string = "";
  country: string = "";
  universities: University[] = [];

  constructor(private service: UniversitiesService) { }

  ngOnInit(): void {
  }

  searchByName() {
    this.service.getUniversitiesByName(this.title).subscribe(u => this.universities = u);
  }

  searchByNameAndCountry() {
    this.service.getUniversitiesByNameAndCountry(this.title, this.country).subscribe(u => this.universities = u);
    console.log(this.universities);
  }
}
