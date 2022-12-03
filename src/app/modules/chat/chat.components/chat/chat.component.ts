import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../../chat.service/chat.service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public message?: string;
  public messages: any;
  // private groupId: any;
  private studentId: string = '6eb456ef-b980-4530-a6bb-73b6d1662443';
  private groupId: string = '28003214-d96b-ed11-856b-e02a82c7cd64';
  public isTeacher: boolean = false;
  constructor(public signalRSerivice: SignalRService, private http: HttpClient) { }

  ngOnInit(): void {
    this.signalRSerivice.startConnection();
    // this.signalRSerivice.sendMessageToUsersListener();
    // this.signalRSerivice.sendMessageFromClientToServerListener();
    this.startHttpRequest();
  }
  private startHttpRequest = () => {
    this.http.post(`https://localhost:7027/api/chat/${this.studentId}/${this.groupId}`, {}).subscribe(result => {
      this.messages = result
      console.log(result);
      // this.groupId = this.messages[0].groupChatId;
    });
  }

  public sendMessage = (msg: any, isTeacher: boolean) => {
    console.log(isTeacher);
    let obj = { Message: msg, IsSenderStudent: !isTeacher }
    this.http.post('https://localhost:7027/addMessage', obj).subscribe(
      res => {
        this.startHttpRequest();
        this.message = '';
      }
    )
  }
}
