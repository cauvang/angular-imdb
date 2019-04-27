import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencyFormat' })
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let valueString = value + "";
    valueString = valueString.replace(/,/ig, "");
    const valueNumber = Math.round(parseFloat(valueString) / 10000) / 100;
    return "$" + valueNumber + "M";
  }

}
