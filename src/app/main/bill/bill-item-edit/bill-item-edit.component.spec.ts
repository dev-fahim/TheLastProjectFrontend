import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillItemEditComponent } from './bill-item-edit.component';

describe('BillItemEditComponent', () => {
  let component: BillItemEditComponent;
  let fixture: ComponentFixture<BillItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
