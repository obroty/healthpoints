import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefibrilatorDetailComponent } from './defibrilator-detail.component';

describe('DefibrilatorDetailComponent', () => {
  let component: DefibrilatorDetailComponent;
  let fixture: ComponentFixture<DefibrilatorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefibrilatorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefibrilatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
