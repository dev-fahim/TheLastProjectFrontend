import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BillPOST, BillGET, BillDataPUT } from 'src/app/models/bill.model';
import { bill_api_endpoints } from 'src/app/api/server.urls';
import { map, catchError } from 'rxjs/operators';
import { get_http_response_error } from '../http_error_handler';
import { AuthService } from '../auth/auth.service';
import { BillDataGET, BillPUT } from '../../models/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }

  postBill(payloads: BillPOST): Observable<BillPOST> {
    return this._http.post(bill_api_endpoints.bill_all, payloads).pipe(
      map((result: BillPOST) => {
        return result;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(get_http_response_error(error, this._authService));
      })
    )
  }

  getAllBill(): Observable<BillGET[]> {
    return this._http.get(bill_api_endpoints.bill_all).pipe(
      map((result: BillGET[]) => {
        return result;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(get_http_response_error(error, this._authService));
      })
    )
  }

  getBill(id: number): Observable<BillGET> {
    return this._http.get(bill_api_endpoints.bill + id + '/').pipe(
      map((result: BillGET) => {
        return result;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(get_http_response_error(error, this._authService));
      })
    )
  }

  getBillData(id: number): Observable<BillDataGET> {
    return this._http.get(bill_api_endpoints.bill_data + id + '/').pipe(
      map((result: BillDataGET) => {
        return result;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(get_http_response_error(error, this._authService));
      })
    )
  }

  putBill(id: number, payloads: BillPUT): Observable<BillPUT> {
    return this._http.put(bill_api_endpoints.bill + id + '/', payloads).pipe(
      map((result: BillPUT) => {
        return result;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(get_http_response_error(error, this._authService));
      })
    )
  }

  putBillData(id: number, payloads: BillDataPUT): Observable<BillDataPUT> {
    return this._http.put(bill_api_endpoints.bill_data + id + '/', payloads).pipe(
      map((result: BillDataPUT) => {
        return result;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(get_http_response_error(error, this._authService));
      })
    )
  }

  deleteBill(id: number): Observable<BillGET> {
    return this._http.delete(bill_api_endpoints.bill + id + '/').pipe(
      map((result: BillGET) => {
        return result;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(get_http_response_error(error, this._authService));
      })
    )
  }

  deleteBillData(id: number): Observable<BillDataGET> {
    return this._http.delete(bill_api_endpoints.bill_data + id + '/').pipe(
      map((result: BillDataGET) => {
        return result;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(get_http_response_error(error, this._authService));
      })
    )
  }

}
