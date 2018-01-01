import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { myErrorHandler } from './my/myErrorHandler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: ErrorHandler,
   useClass: myErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
