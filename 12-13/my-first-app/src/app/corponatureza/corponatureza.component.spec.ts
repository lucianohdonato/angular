import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorponaturezaComponent } from './corponatureza.component';

describe('CorponaturezaComponent', () => {
  let component: CorponaturezaComponent;
  let fixture: ComponentFixture<CorponaturezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorponaturezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorponaturezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
