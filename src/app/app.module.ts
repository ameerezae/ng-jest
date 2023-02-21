import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataComponent } from './04-component/data.component';
import { AsynchronousComponent } from './05-async/asynchronous.component';
import { DomComponent } from './06-view/dom.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    AsynchronousComponent,
    DomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
