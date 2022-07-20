import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { PeopleService } from '../service/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: Person[] = [];

  constructor(
    private peopleService: PeopleService
  ) { }

  getPeople(){
    this.people = [];
    this.peopleService.getPeople().subscribe({
      next: (data) => {
        this.people = data;
        
        
      },
      error: (err: any) => {
        console.log("Did not get people");
      }
    })
  }

  ngOnInit(): void {
    this.getPeople();
  }

}
