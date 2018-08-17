import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNGTestComponent } from './testng-test.component';

describe('TestNGTestComponent', () => {
    let component: TestNGTestComponent;
    let fixture: ComponentFixture < TestNGTestComponent > ;

    beforeEach(async (() => {
        TestBed.configureTestingModule({
                declarations: [TestNGTestComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestNGTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
