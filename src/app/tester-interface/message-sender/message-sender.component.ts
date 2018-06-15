import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {SocketClient} from '../../services/SocketClient';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent implements OnInit {

  @ViewChild('messageForm') msgForm: NgForm;

  constructor(private router: Router, private socket: SocketClient) { }

  ngOnInit() {
    this.socket.on('close', () => {
      this.router.navigate(['/connect']);
    });
  }

  onDisconnect() {
    this.socket.disconnect();
  }

  onSubmit() {
    const route = this.msgForm.value.route;
    const payload = this.msgForm.value.payload;
    if (!route) return;
    this.socket.send(route, payload);
    this.msgForm.reset();
  }
}
