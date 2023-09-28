import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
city:string="Hyderabad";
salary:number=52000.50;
mobile:number=8299552516;
person:object={firstname:"Adam",lastname:"Smith"};
date:Date=new Date();

}
