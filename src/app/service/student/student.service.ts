import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private MyCient: HttpClient) { }
  GetById(id: string): Observable<any> {
    return this.MyCient.get(`https://localhost:7027/api/students/${id}`);
  }
  Update(id: string, StudentObj: {}): Observable<any> {
    return this.MyCient.post(`https://localhost:7027/api/students/Update/${id}/oo`, StudentObj);
  }

  // GetGroupById(id: string): Observable<any> {
  //   return this.MyCient.get(`https://localhost:7027/api/Subject/FindAllByTeacherID/${id}`);
  // }
}
