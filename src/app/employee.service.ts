import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee,Customer } from './employee.mode';

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
   public submitCustomer(customer:Customer):Observable<Customer> {
    return this.httpClient.post<Customer>(`http://127.0.0.1:9595/api/auth/signup`,customer);
   }
   public getCustomers():Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`http://127.0.0.1:9595/api/customers`);
   }
}

export class CustomerService {

  constructor(private httpClient:HttpClient) {

   }
   host ='http://127.0.0.1:8080';

   public submitCustomer(customer:Customer):Observable<Customer> {
    return this.httpClient.post<Customer>(`${this.host}/api/employee`,customer);
   }
   public getCustomers():Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.host}/api/employee`);
   }
}
