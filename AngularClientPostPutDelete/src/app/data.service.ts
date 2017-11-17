import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/toPromise';

import { Customer } from './customer';
import { Dashboard } from './dashboard/dashboard';

@Injectable()
export class DataService {

  private customersUrl = 'api/customer';  // URL to web API
  private dashboardUrl = 'api/dashboard';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  loggedStatus(){
    if(sessionStorage.getItem("loggedInUser") != ""){
      return true ; //if logged in
    }else{
      return false; // if logged out
    }
  }

  // Get all customers
  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.customersUrl)
               .toPromise()
               .then(response => response.json() as Customer[])
               .catch(this.handleError);
  }

  getDashboard(): Promise<Dashboard[]> {
    return this.http.get(this.dashboardUrl)
               .toPromise()
               .then(response => response.json() as Dashboard[])
               .catch(this.handleError);
  }

  getCustomer(id: number): Promise<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Customer)
      .catch(this.handleError);
  }

  create(customer: Customer): Promise<Customer> {
    return this.http
      .post(this.customersUrl, JSON.stringify(customer), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Customer)
      .catch(this.handleError);
  }

  createAuthor(dashboard: Dashboard): Promise<Dashboard> {
    return this.http
      .post(this.dashboardUrl, JSON.stringify(dashboard), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Dashboard)
      .catch(this.handleError);
  }  

  update(customer: Customer): Promise<Customer> {
    const url = `${this.customersUrl}/${customer.id}`;
    return this.http
      .put(url, JSON.stringify(customer), {headers: this.headers})
      .toPromise()
      .then(() => customer)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  deleteAuthor(id: number): Promise<void> {
    const url = `${this.dashboardUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
