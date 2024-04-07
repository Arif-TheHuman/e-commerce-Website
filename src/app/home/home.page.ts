import { Component } from '@angular/core';
import { ProductService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private productService: ProductService, private router: Router) {}

  get product_Popular() {
    return this.productService.product_Popular;
  }

  openProductDetails(product: any) {
    this.router.navigate(['/product-detail', product.id]);
  }
}