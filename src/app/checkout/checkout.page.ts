import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  orderConfirmed = false;
  totalCost = 0;
  image: File | undefined;
  isLoading = false;

  async submitImage() {
    this.isLoading = true;

    setTimeout(async () => {
      this.isLoading = false;

      const alert = await this.alertController.create({
        header: 'Order Confirmed',
        message: 'Your basket number is 49. You can pick it up at this location.',
        buttons: [{
          text: 'OK',
          handler: () => {
            this.orderConfirmed = true;
          }
        }]
      });

      await alert.present();
    }, 2000); // Remove this line when you implement the image upload
  }

  constructor(public cartService: CartService, public alertController: AlertController) { }

  ngOnInit() {
    this.totalCost = this.cartService.getTotalCost();
  }

}
