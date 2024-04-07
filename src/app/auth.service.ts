import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  businessProfile: any = null;

  private users = [
    {
      email: 'customer@gmail.com',
      password: 'password',
      accountType: 'Customer'
    },
    {
      email: 'seller@gmail.com',
      password: 'password',
      accountType: 'Seller',
      businessProfile: {
        businessName: 'Seller Business',
        contactDetails: '123 Seller St, Sellerville',
        businessDescription: 'We sell things.'
      }
    }
  ];

  loggedInUser: any = null;

  constructor() { }

  setBusinessProfile(profile: any) {
    this.businessProfile = profile;
  }

  getBusinessProfile(): Promise<any> {
    return Promise.resolve(this.businessProfile);
  }
  
  setAccountType(type: string) {
    if (this.loggedInUser) {
      this.loggedInUser.accountType = type;
    }
  }

  getUserDetails(): Promise<any> {
    return Promise.resolve(this.loggedInUser);
  }

  logout() {
    this.loggedInUser = null;
    this.businessProfile = null;
  }

  login(email: string, password: string): Promise<string> {
    return new Promise((resolve) => {
      if (this.users.some(user => user.email === email && user.password === password)) {
        this.loggedInUser = this.users.find(user => user.email === email);
        this.businessProfile = this.loggedInUser.businessProfile;
        resolve('success');
      } else {
        resolve('Invalid email or password');
      }
    });
  }

  
  signup(email: string, password: string, accountType: string): string {
    if (this.users.some(user => user.email === email)) {
      return 'Email already in use';
    } else {
      const newUser = { email, password, accountType };
      this.users.push(newUser);
      this.loggedInUser = newUser;
      return 'success';
    }
  }
}