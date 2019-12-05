import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './elsewhere.component.html',
  styleUrls: ['./elsewhere.component.scss']
})
export class ElsewhereComponent implements OnInit {
  channel = new BroadcastChannel('incoming-stuff');
  messages: string[] = [];
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.channel.onmessage = this.onMessageRetrieved;
  }

  onMessageRetrieved = (e) => {
    this.messages.push(e.data);
    this.cdr.detectChanges();
  }
}
