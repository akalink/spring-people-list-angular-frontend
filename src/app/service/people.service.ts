import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';


const URL ='http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor( private http: HttpClient) { }

  getPeople(): Observable<any>{
    console.log(URL+"/Person")
    console.log(this.http.get<any>(URL+"/Perosn"))
    return this.http.get<any>(URL+'/Person')
  }

  postPerson(person:any): Observable<any>{
    return this.http.post<any>(URL+"/Person", person)
  }
}
