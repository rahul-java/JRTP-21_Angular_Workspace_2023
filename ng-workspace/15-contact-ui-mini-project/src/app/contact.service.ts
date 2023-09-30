import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl="http://localhost:8081";

  constructor(private httpClient:HttpClient) { }

  createContact(contact:Contact): Observable<string>{
    return this.httpClient.post(`${this.baseUrl}/contact`,contact,{responseType:'text'}) ;
  }

  getContacts():Observable<Contact[]>
  {
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contacts`);
  }

  findContactById(id:number):Observable<Contact>
  {
    return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${id}`);
  }

  deleteContactById(id:number):Observable<string>
  {
    return this.httpClient.delete(`${this.baseUrl}/contact/${id}`,{responseType:'text'});
  }

}
