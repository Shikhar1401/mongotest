import { Injectable } from '@angular/core';
import { Http,Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: Http) { }

  saveUser(user){
    return this.http.post('hhtp://localhost:8080/api/SaveUser', user)
      .map((response:Response) => response.json)
  }

  GetUser(){
    return this.http.get('http://localhost:8080/api/getUser/')
        .map((response: Response) => response.json())
  }
}