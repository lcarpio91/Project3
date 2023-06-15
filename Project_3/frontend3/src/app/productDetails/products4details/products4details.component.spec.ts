import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Products4detailsComponent } from './products4details.component';

describe('Products4detailsComponent', () => {
  let component: Products4detailsComponent;
  let fixture: ComponentFixture<Products4detailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Products4detailsComponent]
    });
    fixture = TestBed.createComponent(Products4detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
