import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { menu_api_endpoints } from 'src/app/api/server.urls';
import { map, catchError } from 'rxjs/operators';
import { MenuGET } from '../../models/menu.model';
import { MenuPost } from 'src/app/models/menu.model';
import { get_http_response_error } from '../http_error_handler';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }

  get_all_menu(): Observable<MenuGET[]> {
    return this._http.get(menu_api_endpoints.menu_all).pipe(
      map((response: MenuGET[]) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(get_http_response_error(error, this._authService));
      })
    )
  }

  get_menu(id: number): Observable<MenuGET> {
    return this._http.get(menu_api_endpoints.menu + id + '/').pipe(
      map((response: MenuGET) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(get_http_response_error(error, this._authService));
      })
    )
  }

  add_menu_item(payloads: MenuPost): Observable<MenuGET> {
    return this._http.post<MenuGET>(menu_api_endpoints.menu_all, payloads).pipe(
      map((response: MenuGET) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(get_http_response_error(error, this._authService));
      })
    )
  }

  put_menu_item(payloads: MenuPost, id: number): Observable<MenuGET> {
    return this._http.put<MenuGET>(menu_api_endpoints.menu + id + '/', payloads).pipe(
      map((response: MenuGET) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(get_http_response_error(error, this._authService));
      })
    )
  }

  del_menu_item(id: number): Observable<MenuGET> {
    return this._http.delete<MenuGET>(menu_api_endpoints.menu + id + '/').pipe(
      map((response: MenuGET) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(get_http_response_error(error, this._authService));
      })
    )
  }

}
