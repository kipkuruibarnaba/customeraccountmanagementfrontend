import { Component, OnInit } from '@angular/core';
import { Employee,Customer } from '../employee.mode';
import { EmployeeService,CustomerService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  customer: Customer ={
    // Id:0,
    name:'',
    username:'',
    email:'',
    password:''
  }
  skills: string[]=[];
  constructor(private employeeService: EmployeeService,  private router:Router){


  }
  ngOnInit(): void {
      // throw new Error('Method not Implemented');
  }
    submitCustomer(customerForm: NgForm):void{
      console.log(this.customer);
     this.employeeService.submitCustomer(this.customer).subscribe({
      next: (res:Customer)=>{
        console.log(res);
        customerForm.reset();
        this.router.navigate(["/list-customers"])
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
     });
  }

}
