import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warehouse4detailsComponent } from './warehouse4details.component';

describe('Warehouse4detailsComponent', () => {
  let component: Warehouse4detailsComponent;
  let fixture: ComponentFixture<Warehouse4detailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Warehouse4detailsComponent]
    });
    fixture = TestBed.createComponent(Warehouse4detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
