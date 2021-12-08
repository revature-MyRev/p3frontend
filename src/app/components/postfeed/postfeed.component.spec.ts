import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostfeedComponent } from './postfeed.component';

describe('PostfeedComponent', () => {
  let component: PostfeedComponent;
  let fixture: ComponentFixture<PostfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
