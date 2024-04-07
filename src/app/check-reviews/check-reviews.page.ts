import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-check-reviews',
  templateUrl: './check-reviews.page.html',
  styleUrls: ['./check-reviews.page.scss'],
})
export class CheckReviewsPage implements OnInit {
  reviews: any[] = []; // Initialize the reviews array with the correct type

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.reviews = this.productService.reviews;
  }
  replyToReview(review: any, reply: string): void {
    // Here you can send the reply to your server
    // this.productService.replyToReview(review, reply);
    if (typeof reply !== 'string') {
      console.error('Invalid reply:', reply);
      return;
    }
    // Add the reply to the replies array of the review
    review.replies = review.replies || [];
    review.replies.push(reply);
  
    // For now, just log the reply
    console.log('Reply to review:', reply);
  }
}

