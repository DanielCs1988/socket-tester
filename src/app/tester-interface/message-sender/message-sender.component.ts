import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent implements OnInit {

  @ViewChild('messageForm') msgForm: NgForm;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDisconnect() {
    this.router.navigate(['/connect']);
  }

  onSubmit() {
    console.log(this.msgForm.value);
    this.msgForm.reset();
  }
}
