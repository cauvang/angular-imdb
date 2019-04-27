import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueFormat'
})
export class ValueFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value / 1000).toString().replace('.', ',');
  }


}
