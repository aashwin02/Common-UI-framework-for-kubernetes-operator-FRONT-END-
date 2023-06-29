import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DashService {

  constructor(private http: HttpClient) { }

  public getfoodMenu(url:any): Observable<any> {
    console.log('in service');
    return this.http.get(url);
  }

  //new code
  public getLogs(url:any): Observable<any> {
    console.log('in second') ;
    return this.http.get(url) ;
  }
}
