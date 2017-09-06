import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShellModule } from '@ruf/shell';
import { MdIconModule, MdSidenavModule, MdButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdIconModule,
    MdSidenavModule,
    MdButtonModule,
    ShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
