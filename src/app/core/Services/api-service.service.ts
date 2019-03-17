import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { API_KEY } from './../../../../Api_key';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private API_URL = environment.API_URL;

    constructor(private http: HttpClient) {}

    public getAllImages(page = 1): Observable<any> {
        return this.http.get(`${this.API_URL}/photos?client_id=${API_KEY}`, {params: {
                page: page + '',
                per_page: '20',
            }})
            .pipe(catchError(this.handleError));
    }

    private handleError (error: Response | any) {
        throwError('ApiService::handleError', error);
        return throwError(error);
    }

}
