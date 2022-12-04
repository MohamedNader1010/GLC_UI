import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  public studentInfo?: Student;
  public MyError: string = '';
  public StudentId: string = "";
  public StudentGroup?: any[] = [];
  constructor(public myUrl: ActivatedRoute, public student_servers: StudentService) {
    this.StudentId = this.myUrl.snapshot.params["id"];
  }

  ngOnInit(): void {

    let data: any = sessionStorage.getItem("Login data");
    this.StudentId = JSON.parse(data).Id;


    this.student_servers.GetById(JSON.parse(data).Id).subscribe({
      next: (data) => { this.studentInfo = data },
      error: (erro) => { this.MyError = erro.message }
    });

    // this.student_servers.(this.StudentId).subscribe({
    //   next: (data) => { this.StudentGroup = data; },
    //   error: (erro) => { this.MyError = erro.message }
    // });


  }
}
