import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  user: any = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.loggedInUser;
  }

  ngDoCheck() {
    if (this.authService.loggedInUser !== this.user) {
      this.user = this.authService.loggedInUser;
    }
  }
}