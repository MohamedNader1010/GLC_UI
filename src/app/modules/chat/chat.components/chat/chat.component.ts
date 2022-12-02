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
  private groupId: any;
  
  constructor(public signalRSerivice: SignalRService, private http: HttpClient) { }

  ngOnInit(): void {
    this.signalRSerivice.startConnection();
    this.signalRSerivice.sendMessageToUsersListener();
    this.signalRSerivice.sendMessageFromClientToServerListener();
    this.startHttpRequest();
  }
  private startHttpRequest = () => {
    this.http.get('https://localhost:7027/api/chat').subscribe(result => {
      this.messages = result
      this.groupId = this.messages[0].groupChatId;
    });
  }

  public sendMessage = (msg: any) => {
    let obj = { message: msg }

    this.signalRSerivice.sendMessageFromClientToServer(msg);
    this.http.post('https://localhost:7027/addMessage', obj).subscribe(
      _ => {
        this.startHttpRequest();
      },
      err => console.log(err))

  }
}
