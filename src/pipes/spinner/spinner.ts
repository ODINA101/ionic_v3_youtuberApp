import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SpinnerPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'spinner',
})
export class SpinnerPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    return "spinner" + value;
  }

}
