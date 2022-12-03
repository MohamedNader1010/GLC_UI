import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherGroupsComponent } from './teacher-groups/teacher-groups.component';

const routes: Routes = [{path:'teacherGroups', component:TeacherGroupsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
