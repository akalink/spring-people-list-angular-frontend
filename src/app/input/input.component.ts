import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../service/people.service';
import { Gender } from '../model/gender';
import { GenderService } from '../service/gender.service';
import { Ethnicity } from '../model/ethnicity';
import { EhnicityService } from '../service/ehnicity.service';

import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  genders : Gender[] = [];
  ethnicity : Ethnicity[] = [];
  eth : Ethnicity = {id:1,ethnicityType : "White"};
  gen : Gender = {id:1, genderType:"Male"};
  constructor(
    private peopleService: PeopleService,
    private genderService: GenderService,
    private ethnicityService: EhnicityService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getGender();
    this.getEthnicity();
  }
  postPerson(fullName: String, age:any){
    console.log(age);
    let gender = [];
    let ethnicity = [];
    const person = {fullName, age, gender: this.gen, ethnicity : this.eth};
    this.peopleService.postPerson(person).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/people'])
      }
    })
  }
  getGender(){
    this.genderService.getGender().subscribe({
      next: (data) => {
        
        this.genders = data;
        console.log(this.genders);
      },
      error: (err: any) => {
        console.log("Error, did not post person");
      }
    })
  }

  getEthnicity(){
    this.ethnicityService.getEthnicity().subscribe({
      next: (data) => {
        this.ethnicity = data;
        console.log(this.ethnicity);
      }
    })
  }
  onChangeEth(num:number, type: String){
    this.eth = {id:num, ethnicityType: type};
    console.log(this.eth);
  }
  
  onChangeGen(num:number, type: String){
    this.gen = {id: num, genderType: type};
    console.log(this.gen);
  }

}
