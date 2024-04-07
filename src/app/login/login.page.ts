import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  async login() {
    const result = await this.authService.login(this.email, this.password);
    if (result === 'success') {
      this.router.navigateByUrl('/home');
    } else {
      this.errorMessage = result;
    }
  }

}
