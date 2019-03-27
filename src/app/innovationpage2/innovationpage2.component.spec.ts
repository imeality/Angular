import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Innovationpage2Component } from './innovationpage2.component';

describe('Innovationpage2Component', () => {
  let component: Innovationpage2Component;
  let fixture: ComponentFixture<Innovationpage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Innovationpage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Innovationpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
