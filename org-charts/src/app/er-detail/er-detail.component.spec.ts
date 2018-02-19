import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErDetailComponent } from './er-detail.component';

describe('ErDetailComponent', () => {
  let component: ErDetailComponent;
  let fixture: ComponentFixture<ErDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
