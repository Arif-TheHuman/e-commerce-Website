import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  signup() {
    const result = this.authService.signup(this.email, this.password);
    if (result === 'success') {
      this.router.navigateByUrl('/home');
    } else {
      this.errorMessage = result;
    }
  }
}