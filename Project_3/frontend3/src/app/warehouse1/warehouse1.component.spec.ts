import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warehouse1Component } from './warehouse1.component';

describe('Warehouse1Component', () => {
  let component: Warehouse1Component;
  let fixture: ComponentFixture<Warehouse1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Warehouse1Component]
    });
    fixture = TestBed.createComponent(Warehouse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
