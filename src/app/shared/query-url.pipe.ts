import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'queryUrl'
})
export class QueryUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.includes('name')) {
      if (value.includes('officialsites')) {
        value = value.replace('officialsites', 'externalsites');
      }
    }
    else {
      if (value.includes('externalsites')) {
        value = value.replace('externalsites', 'officialsites');
      }
    }
    if (value.includes('?'))
      return value.split('?')[0];
    else {
      if (value.includes('#'))
        return value.split('#')[0];
      else
        return value;
    }
  }

}

