import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any>{
    return this.http.post<any>('http://localhost:8085/login', user)
  }

  register(user: any): Observable<any>{
    return this.http.post<any>('http://localhost:8085/register', user)
  }
}
