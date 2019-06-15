import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'queryUrl'
})
export class QueryUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.includes('externalsites')) {
      value = value.replace('externalsites', 'officialsites');
    }
    return value.split('?')[0];

  }

}

