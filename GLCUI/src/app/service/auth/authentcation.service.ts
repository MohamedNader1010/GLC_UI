import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthentcationService {
URL="https://localhost:7027/api/account";
public isLogin = false;

  constructor(public Auth:HttpClient) { }


  Login(obj:{}):Observable<any> 
  {
    return this.Auth.post(`${this.URL+"/login"}`,obj);
  }

  ForgetPass(Email:any)
  {
    return this.Auth.post(`${this.URL+"/ForgetPasswowrd"}`,Email);

  }

}
