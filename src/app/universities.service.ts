import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from 'src/models/universModel';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  url: string = "http://universities.hipolabs.com/search"

  constructor(private client: HttpClient) { }

  getUniversities(): Observable<University[]> {
    return this.client.get<University[]>(`${this.url}`);
  }

  getUniversityBySingleName(name: string): Observable<University[]> {
    return this.client.get<University[]>(`${this.url}?name=${name}`);
  }

  getUniversitiesByName(name: string): Observable<University[]> {
    return this.client.get<University[]>(`${this.url}?name=${name}`);
  }

  getUniversitiesByNameAndCountry(name: string, country: string): Observable<University[]> {
    return this.client.get<University[]>(`${this.url}?name=${name}&country=${country}`);
  }
}
