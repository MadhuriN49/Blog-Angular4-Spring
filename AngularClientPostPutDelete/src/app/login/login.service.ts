import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/toPromise';

import { Login } from './login';



@Injectable()
export class LoginService {

  private loginUrl = 'user/login';
  userStatus  : number ;
  private headers = new Headers({'Content-Type': 'application/json'});  
  constructor( private http: Http ){};

  checkUser(user : string , password : string) : Promise<Number> {
    const url = `${this.loginUrl}/${user}/${password}`;
     // const url = this.loginUrl 
        return this.http.post(url, {headers: this.headers} )
        .toPromise()
        .then( response => this.userStatus)
        .catch(this.handleError);
  }
  

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

   
}