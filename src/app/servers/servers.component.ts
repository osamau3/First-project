import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allownewServer = false;
  serverCreationstatus = 'No server created yet !';
  serverName = "osama's server";
  serverCreated = false;
  servers = ['test server 1' , 'test server 2'];
  constructor() {
    setTimeout(() => {
      this.allownewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationstatus = 'server was created ! and the name is ' + this.serverName;
  }
  onUpdateServerName( event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
