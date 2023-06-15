import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Products2detailsComponent } from './products2details.component';

describe('Products2detailsComponent', () => {
  let component: Products2detailsComponent;
  let fixture: ComponentFixture<Products2detailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Products2detailsComponent]
    });
    fixture = TestBed.createComponent(Products2detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
