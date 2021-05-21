import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: true // false
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log('CD pipe');
    return value.split('').reverse().join('');
  }

}
