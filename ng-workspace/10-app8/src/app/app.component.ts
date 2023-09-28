import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  msg:string="";

  onFormSubmit(form:any){

    console.log(form.bookname);
    console.log(form.bookisbn);
    console.log(form.bookauthor);

    this.msg="Submitted Successfully for "+form.bookauthor;
  }
}
