import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.mode';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  dataSource:Employee[] =[];
  displayedColumns: string[] = ['id', 'employeeName', 'employeeContact', 'employeeAddress','employeeDepartment','employeeGender','employeeSkills'];

  constructor(private employeeService:EmployeeService){
    this.getEmployeeList();
  }

  ngOnInit(): void {
    // throw new Error('Method not Implemented');
}

getEmployeeList(): void {
  this.employeeService.getEmployees().subscribe({
    next:(res:Employee[])=>{
      console.log(res);
      this.dataSource=res;
    },
    error:(err:HttpErrorResponse)=>{
      console.log(err);    }
  });
}

}


