import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators, FormsModule} from '@angular/forms';
import {CommonService } from './common.service';

import { Http,Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   
  constructor(private http: Http) {}

  ngOnInit(){
   
  }

  // onSave = function(user,isValid: boolean) {
  //   user.mode = this.valButton;
  //   this.newService.saveUser(user)
  //   .subscribe(data => {
  //     alert(data.data);
  //     this.ngOnInit();
  //   },
  //   error => this.errorMessage = error);
  //   }
  upload(){
    this.http.get('http://localhost:8000/api/upload').subscribe((res)=>{
      alert(res);
    })
  }
  download(){
    this.http.get('http://localhost:8000/api/download').subscribe((res)=>{
      alert(res);
    })
  }
}
