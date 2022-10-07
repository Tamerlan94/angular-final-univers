import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UniversitiesService } from '../universities.service';
import { Subscription } from 'rxjs';
import { University } from 'src/models/universModel';

@Component({
  selector: 'app-univers-item',
  templateUrl: './univers-item.component.html',
  styleUrls: ['./univers-item.component.css']
})
export class UniversItemComponent implements OnInit {
  private subscription: Subscription
  name: string = '';
  univer: University | undefined;

  constructor(private route: ActivatedRoute, private service: UniversitiesService) {
    this.subscription = route.params.subscribe(params => this.name = params['name']);
  }

  ngOnInit(): void {
    this.service.getUniversityBySingleName(this.name).subscribe(u => this.univer = u[0]);
  }

}
