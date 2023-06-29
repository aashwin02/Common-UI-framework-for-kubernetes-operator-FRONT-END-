import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-oper',
  templateUrl: './add-oper.component.html',
  styleUrls: ['./add-oper.component.scss']
})
export class AddOperComponent {
  title = 'addOper';

  constructor(private http:HttpClient , private router: Router) {}
  name:string = '' ;
  file:any ;

  getName(name:string) {
    this.name = name ;
  }

  getFile(event:any) {
    this.file = event.target.files[0] ;
    console.log("file",this.file) ;
  }

  submitData() {
    let formData = new FormData() ;
    if ( !this.name ) {
      alert("Please fill the operator name") ;
      return ;
    }
    formData.set("name",this.name) ;
    formData.set("file",this.file) ;
    this.http
      .post('http://localhost:8080/Operator_onboard',formData)
      .subscribe((response) => {
        alert("Submitted successfully") ;
        this.router.navigate(['dashboard']) ;
      },
      (err: Error) => {
        alert(err.message);
        //alert("Invalid username or password") ;
      }) ;
  }
}
