import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetComplaintComponent } from './internet-complaint.component';

describe('InternetComplaintComponent', () => {
  let component: InternetComplaintComponent;
  let fixture: ComponentFixture<InternetComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
