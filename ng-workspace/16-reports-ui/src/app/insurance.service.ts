import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Searchrequest } from './searchrequest';
import { Searchresponse } from './searchresponse';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  private baseUrl="http://localhost:9090";

  constructor(private httpClient:HttpClient ) { }

  getPlanNames():Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/plans`);
  }

  getPlanStatuses():Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/statuses`);
  }

  search(request:Searchrequest):Observable<Searchresponse[]>{
    return this.httpClient.post<Searchresponse[]>(`${this.baseUrl}/search`,request);
  }

  getExcel(){
    return this.httpClient.get<any>(`${this.baseUrl}/excel`,{responseType:'arraybuffer' as 'json'});
  }

  getPdf(){
    return this.httpClient.get<any>(`${this.baseUrl}/pdf`,{responseType:'arraybuffer' as 'json'});
  }

}
