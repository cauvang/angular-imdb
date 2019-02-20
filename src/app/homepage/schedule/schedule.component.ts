import { Component, OnInit, Input } from '@angular/core';
import { ISchedule } from 'src/app/models/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  @Input() data: ISchedule[];
  @Input() title: string;
  @Input() secondaryText:string;
  @Input() viewAll: string;

  constructor() { }

  ngOnInit() {
  }

}
