import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ConnectorComponent} from './tester-interface/connector/connector.component';
import {MessageSenderComponent} from './tester-interface/message-sender/message-sender.component';
import {RouteGuard} from './services/route-guard';

const routes: Routes = [
  {path: 'connect', component: ConnectorComponent},
  {path: 'messages', component: MessageSenderComponent/*, canActivate: [RouteGuard]*/},
  {path: '**', redirectTo: 'connect'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
