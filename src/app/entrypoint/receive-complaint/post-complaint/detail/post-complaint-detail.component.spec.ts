import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComplaintDetailComponent } from './post-complaint-detail.component';

describe('PostComplaintDetailComponent', () => {
  let component: PostComplaintDetailComponent;
  let fixture: ComponentFixture<PostComplaintDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComplaintDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComplaintDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
