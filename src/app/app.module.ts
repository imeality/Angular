import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideshowModule } from "ng-simple-slideshow";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { EnvironmentComponent } from './environment/environment.component';
import { CommunityComponent } from './community/community.component';
import { CallComponent } from './call/call.component';
import { InnovationComponent } from './innovation/innovation.component';
import { AboutComponent } from './about/about.component';
import { AskComponent } from './ask/ask.component';
import { ContributionComponent } from './contribution/contribution.component';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule } from '@angular/material';
import { NgxPaginationModule } from "ngx-pagination";
import { Environmentpage2Component } from './environmentpage2/environmentpage2.component';
import { Environmentpage3Component } from './environmentpage3/environmentpage3.component';
import { Environmentpage4Component } from './environmentpage4/environmentpage4.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    EnvironmentComponent,
    CommunityComponent,
    CallComponent,
    InnovationComponent,
    AboutComponent,
    AskComponent,
    ContributionComponent,
    Environmentpage2Component,
    Environmentpage3Component,
    Environmentpage4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule, 
    MatChipsModule, 
    MatOptionModule, 
    MatGridListModule, 
    MatProgressBarModule, 
    MatSliderModule, 
    MatSlideToggleModule, 
    MatMenuModule, 
    MatDialogModule, 
    MatSnackBarModule, 
    MatSelectModule, 
    MatInputModule, 
    MatSidenavModule, 
    MatCardModule, 
    MatIconModule, 
    MatRadioModule, 
    MatProgressSpinnerModule, 
    MatTabsModule,
    MatListModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
