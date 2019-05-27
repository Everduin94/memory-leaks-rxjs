import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiniteObservableComponent } from './finite-observable.component';

describe('FiniteObservableComponent', () => {
  let component: FiniteObservableComponent;
  let fixture: ComponentFixture<FiniteObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiniteObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiniteObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
