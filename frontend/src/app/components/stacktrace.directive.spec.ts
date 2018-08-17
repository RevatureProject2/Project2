import { StacktraceDirective } from './stacktrace.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
    template: `<p [appStacktrace]="stackTrace"></p>`
})
class TestComponent {
    // tslint:disable-next-line:max-line-length
    stackTrace = `Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 6 at breakpoint.project.scratch.Scratch.main(Scratch.java:61)`;
}

describe('Directive: StackTrace', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let p: ElementRef;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent]
        });
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        p = fixture.debugElement.query(By.css('p'));
    });

    it('inserts <br> and &emsp; tags at every " at "', () => {

        // tslint:disable-next-line:max-line-length
        expect(p.nativeElement.innerHTML).toBe(`Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 6<br>&emsp;at breakpoint.project.scratch.Scratch.main(Scratch.java:61)
        `);
    });
});
