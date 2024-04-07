import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  product: any;
  quantity: number = 0;

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService, private router: Router) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id') ?? '';
    const section = this.route.snapshot.paramMap.get('section') ?? '';
    
    if (section === 'popular') {
      this.product = this.productService.getProductByIdPopular(productId);
    } else if (section === 'trending') {
      this.product = this.productService.getProductByIdTrending(productId);
    } else if (section === 'productOfTheDay') {
      this.product = this.productService.productOfTheDay.find(product => product.id === productId);
    }
  }

  addToCart(product: any, quantity: number) { // Add this method
    this.cartService.addToCart(product, quantity);
    this.increaseQuantity();
  }

  confirmPurchase(product: any) {
    this.cartService.addToCart(product, this.quantity);
    this.quantity = 0;
    this.router.navigate(['/home']); 
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
}