import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  auth(userName: string, password: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: userName, 
      password: password
    })
  }
}
