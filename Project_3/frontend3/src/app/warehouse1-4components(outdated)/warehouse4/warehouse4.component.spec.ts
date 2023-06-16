import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warehouse4Component } from './warehouse4.component';

describe('Warehouse4Component', () => {
  let component: Warehouse4Component;
  let fixture: ComponentFixture<Warehouse4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Warehouse4Component]
    });
    fixture = TestBed.createComponent(Warehouse4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
