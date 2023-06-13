import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warehouse2detailsComponent } from './warehouse2details.component';

describe('Warehouse2detailsComponent', () => {
  let component: Warehouse2detailsComponent;
  let fixture: ComponentFixture<Warehouse2detailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Warehouse2detailsComponent]
    });
    fixture = TestBed.createComponent(Warehouse2detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
