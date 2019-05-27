import {Component, ElementRef, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';

@Component({
  selector: 'app-from-event-observable',
  templateUrl: './from-event-observable.component.html',
  styleUrls: ['./from-event-observable.component.css']
})
export class FromEventObservableComponent implements OnInit, OnDestroy {

  observable$: Observable<Event>;
  componentValue = 0;
  componentEvent;

  @ViewChild('eventButton')
  eventBtn: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('Created FromEventObservable Component!');
    this.observable$ = fromEvent(this.eventBtn.nativeElement, 'click');
    this.observable$.subscribe(val => {
      console.log(val); // Must have both to leak component
      // this.componentValue++; // Without both, the component does not leak.
    });
  }

  ngOnDestroy() {
    console.log('Destroyed FromEventObservable Component!');
  }

}
