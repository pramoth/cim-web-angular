import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileComplaintDetailComponent } from './mobile-complaint-detail.component';

describe('MobileComplaintDetailComponent', () => {
  let component: MobileComplaintDetailComponent;
  let fixture: ComponentFixture<MobileComplaintDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileComplaintDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileComplaintDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
