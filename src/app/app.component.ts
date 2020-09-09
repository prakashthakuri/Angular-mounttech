import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'data-binding-examples';

  serverID = 4200
  serverName = "Data-Bidnding"
  serverStatus = true

  getServerStatus() {
    return this.serverStatus
  }
}
