import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetComplaintDetailComponent } from './internet-complaint-detail.component';

describe('InternetComplaintDetailComponent', () => {
  let component: InternetComplaintDetailComponent;
  let fixture: ComponentFixture<InternetComplaintDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetComplaintDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetComplaintDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
