import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, DoCheck {
  user: any = null;
  businessProfile: any = null;
  isEditing = false;
  newProduct = { name: '', description: '', price: 0, stock: 0, image: null };
  products: any[] = [];
  reviews: any[] = [];
  quantity: number = 0;

  constructor(private authService: AuthService, private router: Router, private alertController: AlertController, private productService: ProductService) {}

  ngOnInit() {
    this.user = this.authService.loggedInUser;
    this.products = this.productService.product_Popular;
    this.reviews = this.productService.reviews;
    this.authService.getBusinessProfile().then(profile => {
      this.businessProfile = profile;
    });
  }

  ngDoCheck() {
    if (this.authService.loggedInUser !== this.user) {
      this.user = this.authService.loggedInUser;
    }
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Yes',
          handler: () => {
            this.authService.logout();
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }

  editBusinessProfile() {
    this.isEditing = true;
  }

  submitBusinessProfile() {
    // Update the business profile in the AuthService
    this.authService.setBusinessProfile(this.businessProfile);

    // Hide the form
    this.isEditing = false;

    // Show a success message
    alert('Business profile updated successfully!');
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.newProduct.image = event.target.files[0];
    }
  }

  addProduct() {
    const formData = new FormData();
    if (this.newProduct.image) {
      formData.append('image', this.newProduct.image);
    }
    formData.append('name', this.newProduct.name);
    formData.append('description', this.newProduct.description);
    formData.append('price', this.newProduct.price.toString());
    formData.append('stock', this.newProduct.stock.toString());

    // Send the formData to your server
    // this.productService.addProduct(formData);

    this.newProduct = { name: '', description: '', price: 0, stock: 0, image: null };
  }

  navigateToPerformance() {
    this.router.navigate(['/performance']);
  }

  editProduct(product: any) {
    this.router.navigate(['../product-change', product.id]);
  }
}