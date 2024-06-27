import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogsComponent } from './logs/logs.component';
import { LogFormComponent } from './log-form/log-form.component';
import { CommonModule } from '@angular/common';
import { LogService } from './log.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogsComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
