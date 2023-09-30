import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  contacts:Contact[]=[];
  delMsg:string="";

  constructor(private service:ContactService,private router:Router){}

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts()
  {
    this.service.getContacts()
    .subscribe(response=>{
      this.contacts=response;
    });
  }

  editContact(id:number){
    this.router.navigate(['/edit',id]);
  }

  deleteContact(id:number){
    this.service.deleteContactById(id)
    .subscribe(response=>{
      this.delMsg=response;
    });
    this.getContacts();
  }


}
