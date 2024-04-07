import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductChangePage } from './product-change.page';

describe('ProductChangePage', () => {
  let component: ProductChangePage;
  let fixture: ComponentFixture<ProductChangePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductChangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
