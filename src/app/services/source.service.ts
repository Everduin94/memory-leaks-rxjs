import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  subject = new BehaviorSubject(1);
  observable$;

  constructor() {
    this.observable$ = this.subject.asObservable();
  }
}
