import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOnId'
})
export class FilterOnIdPipe implements PipeTransform {

  transform(list: any[], removedId: number): any[] {
    if (list?.length > 1) {
      return list.filter(item => item.id !== +removedId);
    }
  }

}
