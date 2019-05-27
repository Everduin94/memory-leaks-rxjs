import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showService = false;
  showFinite = false;
  showFromEvent = false;
  showLargeLeak = false;

  title = 'angular-memory-leaks';
}
