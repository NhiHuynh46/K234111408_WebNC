import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeproductComponent } from './fakeproduct.component';

describe('FakeproductComponent', () => {
  let component: FakeproductComponent;
  let fixture: ComponentFixture<FakeproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FakeproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
