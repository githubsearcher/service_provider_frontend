import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterISP'
})
export class FilterProviderPipe implements PipeTransform {

  transform(value: any, keyWord: any): any {
    if(!value ) {
      return [];
    }
    if(!keyWord || keyWord == '') {
      return value;
    } 
    const data = value.filter((x) => {
      return x.name.toLowerCase().indexOf(keyWord.toLowerCase()) > -1 || x.lowest_price.toString().indexOf(keyWord) > -1 || x.rating.toString().indexOf(keyWord) > -1;
    })
    return data;
  }

}
