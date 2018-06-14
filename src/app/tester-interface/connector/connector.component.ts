import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.css']
})
export class ConnectorComponent implements OnInit {

  @ViewChild('serverForm') serverForm: NgForm;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const target: Target = this.serverForm.value;
    if (!(target.domain && target.port)) {
      return;
    }
    const url = `ws://${target.domain}:${target.port}`;
    this.router.navigate(['/messages']);
  }

}

interface Target {
  domain: string,
  port: number,
  token?: string
}
