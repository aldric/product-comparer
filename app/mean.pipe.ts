import { Pipe, PipeTransform } from '@angular/core';
import { Evaluation }          from './bank';
/*
 * Compute the mean of the given evaluation array 
 */
 @Pipe({name: 'mean'})
export class MeanPipe implements PipeTransform {
	transform(values : Array<Evaluation>): number {
  		return values.map(e => e.value).reduce( (a, b) => a + b) / values.length;
  }
}