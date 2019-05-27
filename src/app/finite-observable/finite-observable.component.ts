import { Component, OnInit, OnDestroy } from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-finite-observable',
  templateUrl: './finite-observable.component.html',
  styleUrls: ['./finite-observable.component.css']
})
export class FiniteObservableComponent implements OnInit, OnDestroy {

  observable$ = of(1);
  componentValue = 0;

  constructor() { }

  ngOnInit() {
    console.log('Created FiniteObservable Component!');
    this.observable$.subscribe(val => {
      this.componentValue++;
    });
  }

  ngOnDestroy() {
    console.log('Destroyed FiniteObservable Component!');
  }
}
