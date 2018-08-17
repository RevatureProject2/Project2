import { Directive, Input, ElementRef, Renderer } from '@angular/core';

/**
 * Formats a Stack Trace appropriately
 */
@Directive({
    selector: '[appStacktrace]'
})
export class StacktraceDirective {

    @Input() set appStacktrace(html: string) {
        html = html.split(' at ').map((line, index) => {
            if (index > 0) {
                return '<br>&emsp;at ' + line;
            } else {
                return line;
            }
        }).join('');

        this.renderer.setElementProperty(this.el.nativeElement, 'innerHTML', html);
    }

    public constructor(
        private el: ElementRef,
        private renderer: Renderer
    ) {}

}
