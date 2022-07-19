import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  {path: 'people', component: PeopleComponent},
  {path: 'submit', component: InputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
