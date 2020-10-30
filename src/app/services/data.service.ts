import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppErrors } from './../common/app-errors';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll(): Observable<any[]>{
    return this.http.get(this.url).pipe(
      map((data: any[]) => {
        return data;
      }),
      catchError(this.handleError)
      // ,
      // catchError((error: Response) => {
      //   if(error.status === 404)
      //   return Observable.throw(new NotFoundError());

      // return Observable.throw(new AppErrors(error));
      // })
    );
  }

  create(resource){
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError));
  }

  update(resource){
    return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource)).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError));
  }

  delete(id: number){
    return this.http.delete(this.url + '/' + id).pipe(
      map(data => {
        return data;
      }),
    catchError(this.handleError));
  }

  private handleError(error: Response){
    if (error.status === 400) {
    return throwError(new BadInput());
    }

    if (error.status === 404) {
    return throwError(new NotFoundError());
    }

    return throwError(new AppErrors(error));
  }
}
