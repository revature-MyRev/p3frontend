import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    password: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { firstName, lastName, username, email, password } = this.form;

    this.authService
      .register(firstName, lastName, username, email, password)
      .subscribe(
        (data) => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['']);
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
  }

  loginRedirect(): void {
    this.router.navigate(['']);
  }

  isRegister() {
    return this.router.url === '/register';
  }
}
