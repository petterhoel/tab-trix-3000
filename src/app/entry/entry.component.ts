import { Component } from '@angular/core';

@Component({
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {
  private channel = new BroadcastChannel('incoming-stuff');

  send(msg): void {
    this.channel.postMessage(msg);
  }
}


