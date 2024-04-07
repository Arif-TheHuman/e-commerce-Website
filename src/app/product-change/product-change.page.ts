import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-product-change',
  templateUrl: './product-change.page.html',
  styleUrls: ['./product-change.page.scss'],
})
export class ProductChangePage implements OnInit {
  product: any = null;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id') ?? '';
    this.product = this.productService.getProductByIdPopular(productId);
  }

  updateProduct() {
    // Update the product details in the ProductService
    this.productService.updateProduct(this.product);

    // Navigate back to the dashboard
    this.router.navigate(['/dashboard']);
  }
}