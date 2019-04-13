import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { ICalendar } from 'src/app/models/calendar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  private data: ICalendar;
  private region = 'US';
  constructor(private service: CalendarService, private route: ActivatedRoute) {
    this.route.params.subscribe(({ region }) => {
      this.region = region || 'US';
      this.loadData();
    });
  }
  public loadData() {
    this.service.getCalendar(this.region).subscribe((data) => {
      this.data = data;
      window.scroll(0, 0);
    });

  }
  ngOnInit() {
    this.loadData();

  }

}
