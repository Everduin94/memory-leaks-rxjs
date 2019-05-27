import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceObservableLeakComponent } from './service-observable-leak.component';

describe('ServiceObservableLeakComponent', () => {
  let component: ServiceObservableLeakComponent;
  let fixture: ComponentFixture<ServiceObservableLeakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceObservableLeakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceObservableLeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
