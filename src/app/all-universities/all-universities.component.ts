import { Component, OnInit } from '@angular/core';
import { University } from 'src/models/universModel';
import { UniversitiesService } from '../universities.service';

@Component({
  selector: 'app-all-universities',
  templateUrl: './all-universities.component.html',
  styleUrls: ['./all-universities.component.css']
})
export class AllUniversitiesComponent implements OnInit {
  universities: University[] = [];
  paginatedUnivers: University[] = [];

  allPage: number = 0;
  allPageArray: number[] = [];

  constructor(private service: UniversitiesService) { }

  ngOnInit(): void {
    this.service.getUniversities().subscribe(u => {
      this.allPage = Math.ceil(u.length / 100);
      for (var i = 0; i < this.allPage; i++) {
        this.allPageArray.push(i);
      }
      this.universities = u;
      this.slice(0);
    })
  }

  slice(page: number) {
    if (page * 100 > this.universities.length) {
      let end = (page * 100 - this.universities.length) - 1;
      let beg = (page - 1) * 100;
      this.paginatedUnivers = this.universities.slice(beg, end);
      console.log(this.paginatedUnivers);
    } else {
      let beg = page * 100;
      let end = beg + 99;
      this.paginatedUnivers = this.universities.slice(beg, end);
    }
  }
}
