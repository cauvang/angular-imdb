import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getJumpToName'
})
export class GetJumpToNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const val = value.split('(')[0].trim();
    if (val === 'Personal Quotes')
      return 'quotes';
    if (val.includes(' '))
      return val.replace(' ', '_');
    return val;
  }

}
