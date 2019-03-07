import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpRequest, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavComponent } from './nav/nav.component';
import { EnvironmentComponent } from './environment/environment.component';
import { InnovationComponent } from './innovation/innovation.component';
import { CommunityComponent } from './community/community.component';
import { CallComponent } from './call/call.component';
import { HomeComponent } from './home/home.component';
import { TryComponent } from './try/try.component';
import { LoginComponent } from './login/login.component';

import { SlimLoadingBarModule } from "ng2-slim-loading-bar";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavComponent,
    EnvironmentComponent,
    InnovationComponent,
    CommunityComponent,
    CallComponent,
    HomeComponent,
    TryComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlimLoadingBarModule

  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
