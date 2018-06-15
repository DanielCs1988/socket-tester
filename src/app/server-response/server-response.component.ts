import { Component, OnInit } from '@angular/core';
import {Message, SocketClient} from '../services/SocketClient';

@Component({
  selector: 'app-server-response',
  templateUrl: './server-response.component.html',
  styleUrls: ['./server-response.component.css']
})
export class ServerResponseComponent implements OnInit {

  route: string;
  payload: string;

  constructor(private socket: SocketClient) { }

  ngOnInit() {
    this.socket.onMessage.subscribe((message: Message) => {
      this.route = message.route;
      this.payload = JSON.stringify(message.payload, null, 4);
    });
  }

}
