import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-app';
  serverStatus = false
  serverPort = 4200

  getServerStatus() {
    return this.serverStatus
  }
}
