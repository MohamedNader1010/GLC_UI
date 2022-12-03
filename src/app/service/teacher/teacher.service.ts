import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
 
  constructor(private   http:HttpClient) { }
  GetStudentGroup(id:any):Observable<any> 
  {
    console.log(id);
    return this.http.get(environment.apiUrl+"/api/Teacher/teachergroups/"+id)
    }
}
