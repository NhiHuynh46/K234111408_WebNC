import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listcustomer3Component } from './listcustomer3.component';

describe('Listcustomer3Component', () => {
  let component: Listcustomer3Component;
  let fixture: ComponentFixture<Listcustomer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Listcustomer3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listcustomer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
