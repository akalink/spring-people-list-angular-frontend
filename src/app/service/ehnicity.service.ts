import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL ='http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class EhnicityService {

  constructor(
    private http: HttpClient
  ) { }

    getEthnicity(): Observable<any>{
      return this.http.get<any>(URL + "/ethnicity");
    }
}
