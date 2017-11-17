import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMoreComponent } from './addMore/addMore.component';
import {LogOutComponent } from './logOut/logout.component';
import {ReadStoryComponent } from './readStory/readStory.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full'},

    { path: 'login', component: LoginComponent},
   { path: 'customer', component: CustomersComponent},
   { path: 'add', component: CreateCustomerComponent },
   { path: 'detail/:id', component: CustomerDetailsComponent },
   { path: 'dashboard', component: DashboardComponent },
   { path: 'readStory', component: ReadStoryComponent },
   { path: 'addMore', component: AddMoreComponent },
   {path: 'logout', component: LogOutComponent}
  // { path: '', redirectTo: 'customer', pathMatch: 'full' },
  // { path: 'customer',  component: CustomersComponent },
  // { path: 'add', component: CreateCustomerComponent },
  // { path: 'detail/:id', component: CustomerDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
