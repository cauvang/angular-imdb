import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'queryUrl'
})
export class QueryUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split('?')[0];

  }

}

