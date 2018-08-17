import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'camelToTitle'
})
export class CamelToTitlePipe implements PipeTransform {

    transform(value: string): any {
        return this.camelCaseToSentence(value);
    }

    private camelCaseToSentence(string: string): string {
        const title = (str) => str.substring(0, 1).toUpperCase() + str.substring(1);
        const words: string[] = [];
        let start, end = 0;
        for (let i = 0; i < string.length; i++) {
            if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
                end = i;
                words.push(title(string.substring(start, end)));
                start = end;
            }
            if (i === string.length - 1) {
                end = i + 1;
                words.push(title(string.substring(start, end)));
            }
        }
        return words.join(' ');
    }
}
