import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherModel } from 'src/app/Models/teacher-model';
import { TeacherService } from 'src/app/service/teacher/teacher.service';

@Component({
  selector: 'app-edite-profile',
  templateUrl: './edite-profile.component.html',
  styleUrls: ['./edite-profile.component.css']
})
export class EditeProfileComponent implements OnInit {

  // public teacherInfo?: TeacherModel;
  public b: {} = {};
  public teacherId: string = "";
  public name: string = "";
  public age: number = 0;
  public email: String = "";
  public school: string = "";
  public phone: string = "";
  public Photo: string = "";

  public MyError: string = "";

  constructor(public myUrl: ActivatedRoute, public teacher_servers: TeacherService) {
    // this.teacherId = this.myUrl.snapshot.params["id"];

  }

  ngOnInit(): void {
    let data: any = sessionStorage.getItem("Login data");
    this.teacherId = JSON.parse(data).Id;

    this.teacher_servers.GetById(this.teacherId).subscribe({
      next: (data) => {
        this.teacherId = data.teacherId,
          this.name = data.name,
          this.age = data.age,
          this.school = data.school,
          this.email = data.email,
          this.phone = data.phone
      },
      error: (erro) => { this.MyError = erro.message }
    });
  }
  Save() {
    this.b = {
      name: this.name, age: this.age, school: this.school, email: this.email, phone: this.phone
      , Photo: this.Photo
    }
    this.teacher_servers.Update(this.teacherId, this.b).subscribe({
      next: (data) => {
        this.teacherId = data.teacherId,
          this.name = data.name,
          this.age = data.age,
          this.school = data.school,
          this.email = data.email,
          this.phone = data.phone
      },
      error: (erro) => { this.MyError = erro.message }
    });
  }
}
