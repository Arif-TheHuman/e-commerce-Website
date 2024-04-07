import { Component } from '@angular/core';
import { ProductService } from '../product-service.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private productService: ProductService, private router: Router, public cartService: CartService) {}

  get productOfTheDay() {
    return this.productService.productOfTheDay;
  }

  get product_Popular() {
    return this.productService.product_Popular;
  }
  get Product_Trending() {
    return this.productService.product_Trending;
  }

  openProductDetails(product: any, section: string) {
    this.router.navigate(['/product-detail', product.id, section]);
  }
}