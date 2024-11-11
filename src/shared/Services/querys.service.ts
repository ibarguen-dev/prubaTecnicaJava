import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PeopleQuery } from '../model/peopleQuery';
@Injectable({
  providedIn: 'root',
})
export class QuerysService {
  private url = environment.api;
  constructor(private http: HttpClient) {}

  getAllPeople(): Observable<any> {
    return this.http.get<any>(`${this.url}/Peoples/`);
  }

  findPeopleByDocumentNumer(data: PeopleQuery): Observable<any> {
    return this.http.post<any>(`${this.url}/Peoples/`, data);
  }

  findPeopleByDocumentFilter(number: number, type: string): Observable<any> {
    return this.http.get<any>(
      `${this.url}/Peoples/get?number=${number}&type=${type}`
    );
  }
}
