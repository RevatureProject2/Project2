import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
    name: 'dates'
})
export class DatesPipe implements PipeTransform {

    /**
     * Uses date-fns library to format a date into a more
     * human readable string
     * @param date Date
     * @returns String formatted text
     */
    transform(date: Date): string {
        return format(date, 'MMM D YYYY, hh:mm:ss');
    }

}
