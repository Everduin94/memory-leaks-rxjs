import {Component, OnDestroy, OnInit} from '@angular/core';
import {SourceService} from '../services/source.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-service-observable-leak',
  templateUrl: './service-observable-leak.component.html',
  styleUrls: ['./service-observable-leak.component.css']
})
export class ServiceObservableLeakComponent implements OnInit, OnDestroy {

  observable$: Observable<any>;
  componentValue = 0;

  constructor(private ss: SourceService) {
    this.observable$ = ss.observable$;
  }

  ngOnInit() {
    console.log('Created ServiceObservableLeak Component!');
    this.observable$.subscribe(val => {
      this.componentValue++;
    });
  }

  ngOnDestroy(): void {
    console.log('Destroyed ServiceObservableLeak Component!');
  }

}
