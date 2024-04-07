import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  addToCart(product: any, quantity: number) {
    for (let i = 0; i < quantity; i++) {
      this.items.push(product);
    }
  }

  getTotalCost() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}