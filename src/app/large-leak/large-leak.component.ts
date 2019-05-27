import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval} from 'rxjs';
import { bigData } from '../data';

@Component({
  selector: 'app-large-leak',
  templateUrl: './large-leak.component.html',
  styleUrls: ['./large-leak.component.css']
})
export class LargeLeakComponent implements OnInit, OnDestroy {

  obs1;
  obs2;
  obs3;
  obs4;
  obs5;

  value1;
  value2;
  value3;
  value4;
  value5;

  constructor() { }

  ngOnInit() {
    console.log('Created LargeLeak Component!')
    this.obs1 = interval(1000);
    // ...

    this.obs1.subscribe(val => this.value1 = {value: val, test: bigData, prop: bigData, keys: [1, 2, 3]});
    // ...
  }

  ngOnDestroy() {
    console.log('Destroyed LargeLeak Component!');
  }

}
