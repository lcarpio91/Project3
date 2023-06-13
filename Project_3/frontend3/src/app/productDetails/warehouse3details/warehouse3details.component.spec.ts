import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warehouse3detailsComponent } from './warehouse3details.component';

describe('Warehouse3detailsComponent', () => {
  let component: Warehouse3detailsComponent;
  let fixture: ComponentFixture<Warehouse3detailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Warehouse3detailsComponent]
    });
    fixture = TestBed.createComponent(Warehouse3detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
