import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {SocketClient} from '../../services/SocketClient';

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.css']
})
export class ConnectorComponent implements OnInit {

  @ViewChild('serverForm') serverForm: NgForm;

  constructor(private router: Router, private socket: SocketClient) { }

  ngOnInit() {
  }

  onSubmit() {
    const target: Target = this.serverForm.value;
    if (!(target.domain && target.port)) {
      return;
    }
    this.socket.on('open', () => {
      this.router.navigate(['/messages']);
      // TODO: log connection
    });
    this.socket.connect(target.domain, target.port, target.token);
  }

}

interface Target {
  domain: string,
  port: number,
  token?: string
}
