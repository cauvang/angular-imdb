import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toQueryObject' })
export class QueryStringPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value === undefined) return {};

    const splitArr = value
      .split('?')[1]
      .split('&');
    const queryObject = {};
    splitArr.forEach((v) => {
      const arr = v.split('=');
      queryObject[arr[0]] = decodeURIComponent(arr[1].split('#')[0]);

    });

    return queryObject;

  }

}
