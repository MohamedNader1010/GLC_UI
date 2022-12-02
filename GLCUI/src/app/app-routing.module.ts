
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/component/Home/admin.component.home';
import { AddTeacherComponent } from './modules/admin/component/add-teacher/add-teacher.component';
import { LoginComponent } from './modules/authuntecation/compenent/login/login.component';
import { ForgetPasswordComponent } from './modules/authuntecation/forget-password/forget-password.component';

const routes: Routes = [
  {
      path:'Admin',component:AdminComponent
  },
  {path:'Login',component:LoginComponent}
  ,{path:'forgetPassword',component:ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
