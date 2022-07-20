import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../service/people.service';
import { Gender } from '../model/gender';
import { GenderService } from '../service/gender.service';
import { Ethnicity } from '../model/ethnicity';
import { EhnicityService } from '../service/ehnicity.service';
import { NgModel } from '@angular/forms';

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
    private ethnicityService: EhnicityService
  ) { }

  ngOnInit(): void {
    this.getGender();
    this.getEthnicity();
  }
  postPerson(){
    let gender = [];
    let ethnicity = [];
    let person = {};
    this.peopleService.postPerson(person).subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }
  getGender(){
    this.genderService.getGender().subscribe({
      next: (data) => {
        
        this.genders = data;
        console.log(this.genders);
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
