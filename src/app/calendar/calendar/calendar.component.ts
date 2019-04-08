import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { ICalendar } from 'src/app/models/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  private data: ICalendar;

  constructor(private service: CalendarService) { }

  ngOnInit() {
    this.service.getCalendar().subscribe((data) => { this.data = data; });
  }

}
