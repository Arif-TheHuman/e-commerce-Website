import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users = [
    {
      email: 'customer@gmail.com',
      password: 'password',
      accountType: 'Customer'
    },
    {
      email: 'seller@gmail.com',
      password: 'password',
      accountType: 'Seller'
    }
  ];

  loggedInUser: any = null;

  constructor() { }
  
  setAccountType(type: string) {
    if (this.loggedInUser) {
      this.loggedInUser.accountType = type;
    }
  }

  getUserDetails(): Promise<any> {
    return Promise.resolve(this.loggedInUser);
  }

  login(email: string, password: string): Promise<string> {
    return new Promise((resolve) => {
      if (this.users.some(user => user.email === email && user.password === password)) {
        this.loggedInUser = this.users.find(user => user.email === email);
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