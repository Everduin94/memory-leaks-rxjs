import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEventObservableComponent } from './from-event-observable.component';

describe('FromEventObservableComponent', () => {
  let component: FromEventObservableComponent;
  let fixture: ComponentFixture<FromEventObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromEventObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromEventObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
