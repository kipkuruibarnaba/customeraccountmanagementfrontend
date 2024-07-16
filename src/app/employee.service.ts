import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.mode';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) {

   }
   host ='http://127.0.0.1:8080';

   public submitEmployee(employee:Employee):Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.host}/api/employee`,employee);
   }
   public getEmployees():Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.host}/api/employee`);
   }
}
