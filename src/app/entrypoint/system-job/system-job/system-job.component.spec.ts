import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemJobComponent } from './system-job.component';

describe('SystemJobComponent', () => {
  let component: SystemJobComponent;
  let fixture: ComponentFixture<SystemJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
