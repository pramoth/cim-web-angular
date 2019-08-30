import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkInResultsComponent } from './results.component';

describe('WalkInResultsComponent', () => {
  let component: WalkInResultsComponent;
  let fixture: ComponentFixture<WalkInResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkInResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkInResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
