import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Form } from '../models/form.model';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  _url = "https://formspree.io/f/mjvlvybl";

  constructor(private _http:HttpClient) { }

  submitEmail(form: Form){
    return this._http.post<any>(this._url, form)
    .pipe(catchError(this.errorHandler));

  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error('test'));
  }
}
