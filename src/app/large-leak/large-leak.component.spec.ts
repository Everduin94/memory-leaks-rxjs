import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeLeakComponent } from './large-leak.component';

describe('LargeLeakComponent', () => {
  let component: LargeLeakComponent;
  let fixture: ComponentFixture<LargeLeakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeLeakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeLeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
