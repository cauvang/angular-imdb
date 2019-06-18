import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customDateFormat'
})
export class CustomDateFormatPipe implements PipeTransform {

  transform(value: Date, args?: any): any {
    const mDate = moment(value);
    if (args === 'ddd' && value.getDate() === (new Date().getDate())) {
      return 'Today';
    }
    return mDate.format(args || 'L');
  }

}
