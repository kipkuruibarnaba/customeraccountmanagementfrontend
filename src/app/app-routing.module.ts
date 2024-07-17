import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';


const routes:Routes=[
  {path :'header',component:HeaderComponent},
  {path :'create-employee',component:EmployeeComponent},
  {path :'',component:HomeComponent},
  {path :'list-employee',component:EmployeeListComponent},
  {path :'register',component:RegisterComponent},
  {path :'login',component:LoginComponent},
  {path :'customer-details',component:CustomerDetailsComponent}
]
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
export class AppRoutingModule { }
