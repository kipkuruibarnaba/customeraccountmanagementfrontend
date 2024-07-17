import { Component, OnInit } from '@angular/core';
import { Employee,Customer } from '../employee.mode';
import { EmployeeService,CustomerService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  dataSource:Customer[] =[];
  displayedColumns: string[] = ['id', 'name', 'username', 'email'];

  constructor(private employeeService:EmployeeService){
    this.getCustomerDetails();
  }

  ngOnInit(): void {
    // throw new Error('Method not Implemented');
}

getCustomerDetails(): void {
  this.employeeService.getCustomers().subscribe({
    next:(res:Customer[])=>{
      console.log(res);
      this.dataSource=res;
    },
    error:(err:HttpErrorResponse)=>{
      console.log(err);    }
  });
}

}
