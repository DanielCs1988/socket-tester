import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TesterInterfaceComponent } from './tester-interface/tester-interface.component';
import { ServerResponseComponent } from './server-response/server-response.component';
import { LoggerComponent } from './logger/logger.component';
import { ConnectorComponent } from './tester-interface/connector/connector.component';
import { MessageSenderComponent } from './tester-interface/message-sender/message-sender.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {SocketClient} from './services/SocketClient';
import {LoggerService} from './services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    TesterInterfaceComponent,
    ServerResponseComponent,
    LoggerComponent,
    ConnectorComponent,
    MessageSenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    SocketClient,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
