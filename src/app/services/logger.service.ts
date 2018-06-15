import {EventEmitter} from '@angular/core';

export class LoggerService {

  onLog = new EventEmitter<string>();

  log(content: string) {
    this.onLog.emit(content);
  }

}
