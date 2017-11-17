import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMoreComponent } from './addMore/addMore.component';
import {LogOutComponent } from './logOut/logout.component';
import {ReadStoryComponent } from './readStory/readStory.component';



import { DataService } from './data.service';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { LoginService } from './login/login.service';
import { NavService } from './nav/nav.service';
import {DashboardService} from './dashboard/dashboard.service';

import {enableProdMode} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerDetailsComponent,
    CustomersComponent,
    CreateCustomerComponent,
    DashboardComponent,
    AddMoreComponent,
    LogOutComponent,
    ReadStoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService , LoginService,NavService , DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
