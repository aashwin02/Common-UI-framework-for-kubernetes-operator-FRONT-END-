import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url1 = "http://localhost:8080/login" ;
  url2 = "http://localhost:8080/signup" ;
  constructor(private http : HttpClient, private router: Router) {}

  loggedIn = false ;

  public setValue( logged : string ) : void {
    localStorage.setItem('logged', logged) ;
  }

  public getValue(): string | null{
    return localStorage.getItem('logged') ;
  }

  public logOut() {
    localStorage.removeItem('logged');
    this.router.navigate(['login'])
  }

  public isLoggedIn() {
    return (this.getValue() !== null) ;
  }

  public login(data:any):Observable<any> {
    let body = new URLSearchParams();
    body.set('email', data.email);
    body.set('password', data.password);

    let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    console.log("in service") ;
    return this.http.post(this.url1,body.toString(), options).pipe(tap((res) => {
      this.setValue("true") ;
    })) ;
  }

  public signup(data: any):Observable<any> {
    let body = new URLSearchParams();
    body.set('email', data.email);
    body.set('password', data.password);

    let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    console.log("in service") ;
    return this.http.post(this.url2,body.toString(), options).pipe(tap((res) => {
      this.setValue("true") ;
    }))
  }
}
