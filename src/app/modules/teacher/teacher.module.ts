import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { EditeProfileComponent } from './edite-profile/edite-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'teacher', component: TeacherProfileComponent },
  { path: 'teacher/:id', component: TeacherProfileComponent },
  { path: 'TEdite/:id', component: EditeProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
  exports: [RouterModule],
  declarations: [
    TeacherProfileComponent,
    EditeProfileComponent
  ],

})
export class TeacherModule { }
