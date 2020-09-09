import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false
  serverCreationStatus = 'No Server was Created'
  serverName: string = "" //Specifing as a string does helps 

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true

    },2000)
  }



  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was Created'
  }

  onUpdateServerName(event: Event) {
    // this.serverName = event.target.name
    this.serverName = (<HTMLInputElement>event.target).value //explicit
  }

}
