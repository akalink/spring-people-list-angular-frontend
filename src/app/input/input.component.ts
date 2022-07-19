import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../service/people.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
  }
  postPerson(){
    let person = {};
    this.peopleService.PostPerson(person).subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }

}
