import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/service/student/student.service';
@Component({
  selector: 'app-student-profile-edite',
  templateUrl: './student-profile-edite.component.html',
  styleUrls: ['./student-profile-edite.component.css']
})
export class StudentProfileEditeComponent implements OnInit {
  public b: {} = {};
  public studentId: string = "";
  public name: string = "";
  public age: number = 0;
  public email: String = "";
  public Parentemail: string = "";
  public Gender: string = "";
  public Address: string = "";
  public Level: number = 0;

  public MyError: string = "";

  constructor(public myUrl: ActivatedRoute, public student_servers: StudentService) {
    // this.teacherId = this.myUrl.snapshot.params["id"];

  }

  ngOnInit(): void {
    let data: any = sessionStorage.getItem("Login data");
    this.studentId = JSON.parse(data).Id;

    this.student_servers.GetById(this.studentId).subscribe({
      next: (data) => {
        this.studentId = data.StudentId,
          this.name = data.Name,
          this.age = data.Age,
          this.Parentemail = data.ParentEmail,
          this.email = data.Email,
          this.Gender = data.Gender,
          this.Level = data.Level
        this.Address = data.Address
      },
      error: (erro) => { this.MyError = erro.message }
    });
  }
  Save() {
    this.b = {
      Name: this.name, Age: this.age, Level: this.Level, Email: this.email, ParentEmail: this.Parentemail
      , Image: null, Gender: this.Gender, Address: this.Address
    }
    this.student_servers.Update(this.studentId, this.b).subscribe({
      next: (data) => {
        this.studentId = data.StudentId,
          this.name = data.Name,
          this.age = data.Age,
          this.Level = data.Level,
          this.email = data.Email,
          this.Parentemail = data.ParentEmail,
          this.Gender = data.Gender,
          this.Address = data.Address
      },
      error: (erro) => { this.MyError = erro.message }
    });
  }

}
