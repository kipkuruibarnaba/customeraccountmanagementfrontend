import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.mode';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: Employee ={
    Id:0,
    employeeName:'',
    employeeContact:'',
    employeeAddress:'',
    employeeGender:'',
    employeeDepartment:'',
    employeeSkills:''
  }
  skills: string[]=[];
  constructor(private employeeService: EmployeeService,  private router:Router){


  }
  ngOnInit(): void {
      // throw new Error('Method not Implemented');
  }
  checkSkills(skill:string){
    return this.employee.employeeSkills !==null && this.employee.employeeSkills.includes(skill);
  }
  submitEmployee(employeeForm: NgForm):void{
     this.employeeService.submitEmployee(this.employee).subscribe({
      next: (res:Employee)=>{
        console.log(res);
        employeeForm.reset();
        this.employee.employeeGender='';
        this.router.navigate(["/list-employee"])
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
     });
  }

  selectGender(gender:string): void{
    this.employee.employeeGender=gender;
  };

  onkillsChange(event:any): void{
    console.log(event);
    if(event.checked){
      this.skills.push(event.source.value);
    }else{
      this.skills.forEach((value, index, array) => {
        if(value==event.source.value){
          this.skills.splice(index,1);
        }
      }
    );
    }
    this.employee.employeeSkills=this.skills.toString();
  };
}
