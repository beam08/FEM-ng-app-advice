import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdviceGeneratorMainComponent } from './advice-generator-main/advice-generator-main.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, AdviceGeneratorMainComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
