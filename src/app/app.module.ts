import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { ColorbandDirective } from './directives/colorband.directive';

@NgModule({
  declarations: [AppComponent, HomeComponent, TestComponent, ListComponent, ColorbandDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
