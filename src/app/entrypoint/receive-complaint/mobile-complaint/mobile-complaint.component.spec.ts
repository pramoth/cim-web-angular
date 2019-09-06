import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileComplaintComponent } from './mobile-complaint.component';

describe('MobileComplaintComponent', () => {
  let component: MobileComplaintComponent;
  let fixture: ComponentFixture<MobileComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
