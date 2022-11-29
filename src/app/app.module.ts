import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

import { GeneralModule } from './modules/general/general.module';
import { AuthuntecationModule } from './modules/authuntecation/authuntecation.module';
import { SharedModule } from './modules/shared/shared.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthuntecationModule,
    DashboardModule,
    GeneralModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
