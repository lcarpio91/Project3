import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warehouse3Component } from './warehouse3.component';

describe('Warehouse3Component', () => {
  let component: Warehouse3Component;
  let fixture: ComponentFixture<Warehouse3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Warehouse3Component]
    });
    fixture = TestBed.createComponent(Warehouse3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
