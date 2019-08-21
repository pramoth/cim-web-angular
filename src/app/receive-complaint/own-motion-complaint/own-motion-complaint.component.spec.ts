import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnMotionComplaintComponent } from './own-motion-complaint.component';

describe('OwnMotionComplaintComponent', () => {
  let component: OwnMotionComplaintComponent;
  let fixture: ComponentFixture<OwnMotionComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnMotionComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnMotionComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
