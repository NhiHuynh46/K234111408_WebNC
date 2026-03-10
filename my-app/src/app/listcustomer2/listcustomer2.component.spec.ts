import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listcustomer2Component } from './listcustomer2.component';

describe('Listcustomer2Component', () => {
  let component: Listcustomer2Component;
  let fixture: ComponentFixture<Listcustomer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Listcustomer2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listcustomer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
