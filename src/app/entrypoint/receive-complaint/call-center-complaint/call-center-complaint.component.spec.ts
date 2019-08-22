import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallCenterComplaintComponent } from './call-center-complaint.component';

describe('CallCenterComplaintComponent', () => {
  let component: CallCenterComplaintComponent;
  let fixture: ComponentFixture<CallCenterComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallCenterComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallCenterComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
