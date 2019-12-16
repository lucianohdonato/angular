import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPostByIdComponent } from './get-post-by-id.component';

describe('GetPostByIdComponent', () => {
  let component: GetPostByIdComponent;
  let fixture: ComponentFixture<GetPostByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPostByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPostByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
