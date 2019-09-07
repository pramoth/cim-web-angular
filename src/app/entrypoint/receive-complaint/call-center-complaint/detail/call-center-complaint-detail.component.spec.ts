import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallCenterComplaintDetailComponent } from './call-center-complaint-detail.component';

describe('CallCenterComplaintDetailComponent', () => {
  let component: CallCenterComplaintDetailComponent;
  let fixture: ComponentFixture<CallCenterComplaintDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallCenterComplaintDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallCenterComplaintDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
