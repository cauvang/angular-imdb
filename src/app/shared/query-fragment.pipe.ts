import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'queryFragment'
})
export class QueryFragmentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === undefined) return {};

    // const splitArr = value
    //   .split('?')[1]
    //   .split('&');
    // const queryObject = {};
    // splitArr.forEach((v) => {
    //   const arr = v.split('=');
    //   queryObject[arr[0]] = decodeURIComponent(arr[1].split('#')[0]);

    // });
    console.log("freg", value, value.split('#')[1])
    return value.split('#')[1];
  }

}
