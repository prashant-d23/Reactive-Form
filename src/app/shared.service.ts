import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpclient:HttpClient) { }
  baseUrl:string = 'http://localhost:3000/'
  httpHeaders:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');

  getData(endPoint:string){
    let url = this.baseUrl + endPoint;
    return this.httpclient.get(url,{headers:this.httpHeaders});
  }

  postData(endPoint:string,body:any){
    let url = this.baseUrl + endPoint;
    return this.httpclient.post(url,body,{headers:this.httpHeaders})
  }
}
