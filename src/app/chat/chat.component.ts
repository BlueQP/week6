import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {

  messageContent:string="";
  messages:string[] = [];
  ioConnection:any;

  constructor(private socketService:SocketService) { }

  ngOnInit(): void {
  }

  private initIoConnection(){
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onMessage().subscribe((message:string) => {
      this.messages.push(message);
    });
  }

  private send(){
    if (this.messageContent){
      this.socketService.send(this.messageContent);
      this.messageContent = null;
    }
    else{
      console.log("no message");
    }
  }
}
