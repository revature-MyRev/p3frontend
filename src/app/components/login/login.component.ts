import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  firstName: string;
  user;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    if (this.isLoggedIn) {
      this.router.navigate(['feed']);
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.user = this.tokenStorage.getUser();
        localStorage.setItem('userId', this.user.id);

        this.roles = this.tokenStorage.getUser().roles;

        this.router.navigate(['feed']);
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.reloadPage();
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  registerRedirect(): void {
    this.router.navigate(['register']);
  }

  isLogin() {
    return this.router.url === '/';
  }
}
