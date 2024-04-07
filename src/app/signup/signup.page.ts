import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);
  businessName = new FormControl('', Validators.required);
  contactDetails = new FormControl('', Validators.required);
  businessDescription = new FormControl('', Validators.required);
  accountType: string = '';
  errorMessage: string = '';
  showAccountTypeButtons: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  signup() {
    if (this.email.valid && this.password.valid) {
      const result = this.authService.signup(this.email.value ?? '', this.password.value ?? '', this.accountType ?? '');
      if (result === 'success') {
        this.showAccountTypeButtons = true;
      } else {
        this.errorMessage = result || 'An error occurred during signup.';
      }
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }
  
  setAccountType(type: string) {
    if (type) {
      this.accountType = type;
      this.authService.setAccountType(type);
    } else {
      this.errorMessage = 'Account type is required.';
    }
  }

  submitBusinessProfile() {
    if (this.businessName.valid && this.contactDetails.valid && this.businessDescription.valid) {
      const businessProfile = {
        businessName: this.businessName.value,
        contactDetails: this.contactDetails.value,
        businessDescription: this.businessDescription.value
      };
    
      this.authService.setBusinessProfile(businessProfile);
  
      // Reset the form
      this.businessName.reset();
      this.contactDetails.reset();
      this.businessDescription.reset();
  
      // Navigate to the home page
      this.router.navigateByUrl('/home');
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }
}