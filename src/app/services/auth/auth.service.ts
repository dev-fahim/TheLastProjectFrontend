import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { auth_api_endpoints } from 'src/app/api/server.urls';
import { Login, LoginResponse } from '../../models/login.model';
import { map } from 'rxjs/operators'
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService();

  redirectUrl: string;

  constructor(private _http: HttpClient, private _router: Router) { }

  login_user(payloads: Login): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(auth_api_endpoints.login, JSON.stringify(payloads)).pipe(
      map((resonse) => {
        localStorage.setItem("token", resonse.token);
        this._router.navigate(['/app/bill/add']);
        return resonse;
      })
    )
  }

  logout_user(): void {
    localStorage.removeItem("token");
    this._router.navigate(['/login']);
  }
  
  getToken(){
    return localStorage.getItem("token");
  }

  isLoggedIn(){
    if(this.getToken() != null) {
      try {       
        return !this.helper.isTokenExpired(this.getToken());
      } catch (error) {
        console.log("Error on token");
        this.logout_user();
        return false;
      }
    } else {
      return false;
    }
  }

}
