import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'toQueryObject'})
export class QueryStringPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const splitArr = value
      .split('?')[1]
      .split('&');
    const queryObject = {};
    splitArr.forEach((v) => {
      const arr = v.split('=');
      queryObject[arr[0]] = arr[1];
    });
    return queryObject;

  }

}
