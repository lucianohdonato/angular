import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpouniversoComponent } from './corpouniverso.component';

describe('CorpouniversoComponent', () => {
  let component: CorpouniversoComponent;
  let fixture: ComponentFixture<CorpouniversoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpouniversoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpouniversoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
