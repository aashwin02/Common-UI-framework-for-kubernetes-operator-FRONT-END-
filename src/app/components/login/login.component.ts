import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faLock = faLock ;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if ( this.auth.isLoggedIn() ) {
      this.router.navigate(['admin'])
    }
  }

  onSubmit(): void {
    console.log(this.loginForm.value) ;
    // new
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          alert("Login Successfully") ;
          this.router.navigate(['/admin']) ;
        },
        (err: Error) => {
          //alert(err.message);
          alert("Invalid username or password") ;
        }
      );
    }
  }
}
