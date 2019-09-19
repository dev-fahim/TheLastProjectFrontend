import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoInsightsComponent } from './info-insights.component';

describe('InfoInsightsComponent', () => {
  let component: InfoInsightsComponent;
  let fixture: ComponentFixture<InfoInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
