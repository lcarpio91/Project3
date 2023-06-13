import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warehouse1detailsComponent } from './warehouse1details.component';

describe('Warehouse1detailsComponent', () => {
  let component: Warehouse1detailsComponent;
  let fixture: ComponentFixture<Warehouse1detailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Warehouse1detailsComponent]
    });
    fixture = TestBed.createComponent(Warehouse1detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
