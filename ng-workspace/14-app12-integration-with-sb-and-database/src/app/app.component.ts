import { Component } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '14-app12-integration-with-sb-and-database';

  contact:Contact=new Contact();

  constructor(private contactService:ContactService){}

 // msg:string="";
 contacts:Contact[]=[];

  saveContact(){
    this.contactService.createContact(this.contact)
    .subscribe(response=>{
     // this.msg=response;
     this.contacts=response;
    });
  }
}
