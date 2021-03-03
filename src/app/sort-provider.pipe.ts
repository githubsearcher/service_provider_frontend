import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortISP'
})
export class SortProviderPipe implements PipeTransform {

  transform(value: any, sortValue: any, orderBy: any): any {
    if(!value ) {
      return [];
    }
    if(!sortValue || sortValue == '') {
      return value;
    } 
    let sortedArr = value.sort((a, b)=> {
      if(a[sortValue] > b[sortValue]) {
        return -1;
      } else if(a[sortValue] < b[sortValue]) {
        return 1;
      } 
      return 0;
    });
    if(orderBy) {
      sortedArr = sortedArr.reverse();
    }
    return sortedArr;
  }

}
