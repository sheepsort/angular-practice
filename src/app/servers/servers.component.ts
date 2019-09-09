import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  /* commenting this block out as we've switched to two-way binding.
  onUpdateServerName(event: Event) {
    // casting input to type HTML Input Element to enable TS to compile
    // using "as __" suffix instead of <__> prefix to satisfy our linter's rules
    this.serverName = (event.target as HTMLInputElement).value;
  }
  */

}
