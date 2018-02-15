import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfficiencyRatioComponent } from './efficiency-ratio.component';

describe('EfficiencyRatioComponent', () => {
  let component: EfficiencyRatioComponent;
  let fixture: ComponentFixture<EfficiencyRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfficiencyRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfficiencyRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
