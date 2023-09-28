import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '03-app3';
  msg:string="Welcome to Data Binding using interpolation";

  fname:string="Suyash";
  lname:string="Singh";
  age:number=30;
  gender:string="Male";
  country:string="India";
  isEmployed:boolean=true;

  handleSubmitButton()
  {
    this.fname="Rohit";
  this.lname="Pandey";
  this.age=28;
  this.gender="Female";
  this.country="USA";
  this.isEmployed=false;

  }
}


