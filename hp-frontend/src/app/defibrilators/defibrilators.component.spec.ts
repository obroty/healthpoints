import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefibrilatorsComponent } from './defibrilators.component';

describe('DefibrilatorsComponent', () => {
  let component: DefibrilatorsComponent;
  let fixture: ComponentFixture<DefibrilatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefibrilatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefibrilatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
