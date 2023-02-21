import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataComponent } from './04-component/data.component';
import { AsynchronousComponent } from './05-async/asynchronous.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    AsynchronousComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
