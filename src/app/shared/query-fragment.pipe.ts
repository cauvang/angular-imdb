import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'queryFragment'
})
export class QueryFragmentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === undefined) return {};

    return value.split('#')[1];
  }

}
