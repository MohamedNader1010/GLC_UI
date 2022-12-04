import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentProfileEditeComponent } from './student-profile-edite/student-profile-edite.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'studentProfile', component: StudentProfileComponent },
  { path: 'studentProfile/:id', component: StudentProfileComponent },
  { path: 'studentProfiledite/:id', component: StudentProfileEditeComponent },
];

@NgModule({
  declarations: [
    StudentProfileComponent,
    StudentProfileEditeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class StudentModule { }
