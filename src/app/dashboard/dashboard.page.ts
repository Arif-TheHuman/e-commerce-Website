import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, DoCheck {
  user: any = null;
  businessProfile: any = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.loggedInUser;
    this.authService.getBusinessProfile().then(profile => {
      this.businessProfile = profile;
    });
  }

  ngDoCheck() {
    if (this.authService.loggedInUser !== this.user) {
      this.user = this.authService.loggedInUser;
    }
  }

}
