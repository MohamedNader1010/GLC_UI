import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import {ReactiveFormsModule} from '@angular/forms';
import { GeneralModule } from './modules/general/general.module';
import { AuthuntecationModule } from './modules/authuntecation/authuntecation.module';
import { SharedModule } from './modules/shared/shared.module';
import { AdminComponent } from './modules/admin/component/Home/admin.component.home';
import { AddTeacherComponent } from './modules/admin/component/add-teacher/add-teacher.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './modules/authuntecation/compenent/login/login.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
        AddTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthuntecationModule,
    DashboardModule,
    HttpClientModule,
    GeneralModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
