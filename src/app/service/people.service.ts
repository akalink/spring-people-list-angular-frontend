import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Person } from '../model/person';

const URL ='http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor( private http: HttpClient) { }

  GetPeople(): Observable<any>{
    console.log(URL+"/Person")
    console.log(this.http.get<any>(URL+"/Perosn"))
    return this.http.get<any>(URL+'/Person')
  }

  PostPerson(person:any): Observable<any>{
    return this.http.post<any>(URL+"/Person", person)
  }
}
