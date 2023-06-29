import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOperComponent } from './add-oper.component';

describe('AddOperComponent', () => {
  let component: AddOperComponent;
  let fixture: ComponentFixture<AddOperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
