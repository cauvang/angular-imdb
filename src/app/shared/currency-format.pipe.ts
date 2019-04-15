import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'currencyFormat'})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value : any, args?: any) : any {
    const valueNumber = Math.round(parseFloat(value) / 10000) / 100;
    return "$" + valueNumber + "M";
  }

}
