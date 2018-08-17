import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'passfail'
})
export class PassfailPipe implements PipeTransform {

    /**
     * Change the display of a number to Passed or Failed
     * according to its truthy value
     * @param value number
     */
    transform(value: number): any {
        if (value === 0) {
            return 'Failed';
        } else if (value === 1) {
            return 'Passed';
        } else {
            return 'Skipped';
        }
    }

}
