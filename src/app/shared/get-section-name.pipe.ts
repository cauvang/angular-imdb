import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getSectionName'
})
export class GetSectionNamePipe implements PipeTransform {

  transform(value: string, args?: any): any {

    return value.split('(')[0];
  }

}
