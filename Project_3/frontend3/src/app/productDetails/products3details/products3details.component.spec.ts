import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Products3detailsComponent } from './products3details.component';

describe('Products3detailsComponent', () => {
  let component: Products3detailsComponent;
  let fixture: ComponentFixture<Products3detailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Products3detailsComponent]
    });
    fixture = TestBed.createComponent(Products3detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
