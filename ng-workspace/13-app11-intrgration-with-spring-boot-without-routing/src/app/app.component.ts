import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '13-app11-intrgration-with-spring-boot-without-routing';

  msg:string="Welcome to Angular";

  constructor(@Inject (HttpClient)private httpClient:HttpClient)
  {

  }

  getWelcomeMessage()
  {
   //this.msg="Button clicked";
   this.httpClient.get("http://localhost:8081/welcome",{responseType:'text'})
   .subscribe(response=>{
    this.msg=response;
   });
  }
  getWishMessage()
  {
   //this.msg="Button clicked";
   this.httpClient.get("http://localhost:8081/wish",{responseType:'text'})
   .subscribe(response=>{
    this.msg=response;
   });
  }
  
}
