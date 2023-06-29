import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  faLock = faLock ;

  signupForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', Validators.minLength(4))
  })

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if ( this.auth.isLoggedIn() ) {
      this.router.navigate(['admin'])
    }
  }

  onSubmit(): void {
    console.log(this.signupForm.value) ;
    // new
    if (this.signupForm.valid) {
      this.auth.signup(this.signupForm.value).subscribe(
        (result) => {
          console.log(result);
          alert("Signup successfully") ;
          this.router.navigate(['/admin']) ;
        },
        (err: Error) => {
          //alert(err.message);
          alert(err.message) ;
        }
      );
    }
  }
}
