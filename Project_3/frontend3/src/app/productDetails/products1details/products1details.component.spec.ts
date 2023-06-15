import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Products1detailsComponent } from './products1details.component';

describe('Products1detailsComponent', () => {
  let component: Products1detailsComponent;
  let fixture: ComponentFixture<Products1detailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Products1detailsComponent]
    });
    fixture = TestBed.createComponent(Products1detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
