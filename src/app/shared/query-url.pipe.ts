import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'queryUrl'
})
export class QueryUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value.includes('externalsites')) {
      value = value.replace('externalsites', 'officialsites');
    }
    const results = value.split('?');
    if (results[1].includes('#'))
      return results[0].slice(0, -1) + '#' + results[1].split('#')[1];

    else
      return results[0];

  }

}

