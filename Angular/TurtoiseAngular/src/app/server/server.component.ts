import { Component } from '@angular/core';

@Component({
    templateUrl: './server.component.html',
    selector: 'app-server',
    styles:[`
        .online{
            color:white;
        }
    `]
})
export class ServerComponent {
    //sử dung internalation
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === "online" ? "green" : "red";
    }
}