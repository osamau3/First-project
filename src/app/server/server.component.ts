import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'online';
  
  constructor() {
    this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }
  getserverstatus() {
    // this.serverStatus = 'online';
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }

}
