import { Injectable } from '@angular/core';
import { TeacherModel } from 'src/app/Models/teacher-model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  // teacher:TeacherModel;
  constructor(private MyCient: HttpClient) { }

  GetAll(): Observable<any> {
    return this.MyCient.get(`https://localhost:44309/api/Teacher`);
  }
  GetById(id: string): Observable<any> {
    return this.MyCient.get(`https://localhost:7027/api/Teacher/FindById/${id}`);
  }
  Update(id: string, teacherobj: {}): Observable<any> {
    return this.MyCient.post(`https://localhost:7027/api/Teacher/${id}/oo`, teacherobj);
  }

  GetSubjectById(id: string): Observable<any> {
    return this.MyCient.get(`https://localhost:7027/api/Subject/FindAllByTeacherID/${id}`);
  }
}
