import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL ='http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor( private http: HttpClient) { }

  getGender(): Observable<any>{
    return this.http.get<any>(URL+'/gender');
  }
}


