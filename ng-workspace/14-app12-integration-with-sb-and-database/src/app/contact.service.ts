import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private restUrl='http://localhost:8081/contact';

  constructor(private httpClient:HttpClient) { }

  // createContact(contact:Contact):Observable<string>
  // {
  //   return this.httpClient.post(this.restUrl,contact,{responseType:'text'});
  // }

  createContact(contact:Contact):Observable<Contact[]>
  {
    return this.httpClient.post<Contact[]>(this.restUrl,contact,{responseType:'json'});
  }
}
