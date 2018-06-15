import {EventEmitter} from '@angular/core';

export class SocketClient {

    private static SEPARATOR = '&';
    private socket: WebSocket;
    private onOpenHandler: Function;
    private onCloseHandler: Function;
    private cache: Message[] = [];
    private isOpen = false;
    private isClosed = false;

    onMessage = new EventEmitter<Message>();

    constructor() {
        setInterval(() => {
            if (this.isOpen && this.cache.length > 0) {
                const transaction = this.cache.shift();
                this.send(transaction.route, transaction.payload);
            }
        }, 100);
    }

    connect(domain: string, port: number, token?: string) {
        if (this.isOpen) return;
        const url = token ? `ws://${domain}:${port}/${token}` : `ws://${domain}:${port}`;
        this.socket = new WebSocket(url);
        this.socket.addEventListener('open', (ev) => this.onOpenConnection(ev));
        this.socket.addEventListener('close', (ev) => this.onClosedConnection(ev, domain, port, token));
        this.socket.addEventListener('message', event => this.processMessage(event.data));
    }

    disconnect() {
        if (this.socket) {
            this.isClosed = true;
            this.cache = [];
            this.socket.close();
        }
    }

    private onOpenConnection(event: any) {
        this.isOpen = true;
        if (this.onOpenHandler) this.onOpenHandler.call(null, event);
    }

    private onClosedConnection(event: any, domain: string, port: number, token?: string) {
        this.isOpen = false;
        if (this.onCloseHandler) this.onCloseHandler.call(null, event);
        if (this.isClosed) { return; }
        setTimeout(() => {
            this.connect(domain, port, token);
        }, 10000);
    }

    isConnected(): boolean {
        return this.isOpen;
    }

    on(route: string, callback: Function) {
        if (route === 'open') {
            this.onOpenHandler = callback;
        } else if (route === 'close') {
            this.onCloseHandler = callback;
        }
    }

    send(route: string, payload: any) {
        if (!this.isOpen) {
          this.cacheMessage(route, payload);
          return;
        }
        const content = typeof payload === 'string' ? payload : JSON.stringify(payload);
        const message = route + SocketClient.SEPARATOR + content;
        this.socket.send(message);
    }

    private cacheMessage(route: string, payload: any) {
        const message: Message = {
            route: route,
            payload: payload
        };
        this.cache.push(message);
    }

    private processMessage(raw: string) {
        const fullMsg = raw.split(SocketClient.SEPARATOR, 2);
        this.handleMessages(fullMsg[0], fullMsg[1]);
    }

    private handleMessages(route: string, payload: string) {
        const message = {
          route: route,
          payload: JSON.parse(payload)
        };
        this.onMessage.emit(message);
    }
}

export interface Message {
    route: string,
    payload: any
}
