import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users = [
    {
      email: 'customer@gmail.com',
      password: 'password'
    },
    {
      email: 'seller@gmail.com',
      password: 'password'
    }
  ];

  constructor() { }

  login(email: string, password: string): string {
    if (this.users.some(user => user.email === email && user.password === password)) {
      return 'success';
    } else {
      return 'Invalid email or password';
    }
  }
  
  signup(email: string, password: string): string {
    if (this.users.some(user => user.email === email)) {
      return 'Email already in use';
    } else {
      this.users.push({ email, password });
      return 'success';
    }
  }
}