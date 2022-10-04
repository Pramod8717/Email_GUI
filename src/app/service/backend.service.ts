import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl:string=" http://localhost:3000"
  constructor(private http:HttpClient) { }

  sendEmail(data:any){
    return this.http.post(`${this.baseUrl}/sendemail`,data)
  }
}
