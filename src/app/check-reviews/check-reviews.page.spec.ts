import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckReviewsPage } from './check-reviews.page';

describe('CheckReviewsPage', () => {
  let component: CheckReviewsPage;
  let fixture: ComponentFixture<CheckReviewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
