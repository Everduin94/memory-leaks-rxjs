import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceObservableLeakComponent } from './service-observable-leak/service-observable-leak.component';
import { FiniteObservableComponent } from './finite-observable/finite-observable.component';
import { FromEventObservableComponent } from './from-event-observable/from-event-observable.component';
import { LargeLeakComponent } from './large-leak/large-leak.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceObservableLeakComponent,
    FiniteObservableComponent,
    FromEventObservableComponent,
    LargeLeakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
