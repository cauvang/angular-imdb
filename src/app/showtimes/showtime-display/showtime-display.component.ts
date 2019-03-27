import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showtime-display',
  templateUrl: './showtime-display.component.html',
  styleUrls: ['./showtime-display.component.scss']
})
export class ShowtimeDisplayComponent implements OnInit {
  @Input() data: string[];
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
