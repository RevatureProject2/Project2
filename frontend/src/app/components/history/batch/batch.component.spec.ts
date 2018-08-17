import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PassfailPipe } from '../../passfail.pipe';
import { CamelToTitlePipe } from '../../camel-to-title.pipe';
import { DatesPipe } from '../../dates.pipe';
import { StacktraceDirective } from '../../stacktrace.directive';
import { BatchComponent } from './batch.component';

describe('BatchComponent', () => {
    let component: BatchComponent;
    let fixture: ComponentFixture < BatchComponent > ;

    beforeEach(async (() => {
        TestBed.configureTestingModule({
                declarations: [
                    BatchComponent,
                    PassfailPipe,
                    DatesPipe,
                    CamelToTitlePipe,
                    StacktraceDirective
                ]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BatchComponent);
        component = fixture.componentInstance;
        component.batch = {
            status: 0,
            tests: [
                {
                    BatchID: 1,
                    recordID: 1,
                    InitiatedBy: 'default',
                    name: 'logOutLeavesPage',
                    signature: 'logOutLeavesPage()[somehexvalue]',
                    duration_ms: 2839,
                    startTime: new Date(),
                    finishTime: new Date(),
                    status: 0,
                    exceptionClass: 'AssertionError',
                    exceptionMessage: 'Did not leave page',
                    stackTrace: `Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 10
                    at neural.network.quantum.Cognition.Matrix(Lambda.java:23367)
                    at neural.network.Cognition.Matrix(Calculus.java:6279)
                    at neural.network.Activation.calculateBiases(NeuralNode.java:6279)
                    at neural.network.Activation.calculateWeights(NeuralNode.java:3293)
                    at neural.network.Activation.backPropagation(NeuralNode.java:3341)
                        at cognition.start.Cognition.main(CognitionInit.java:42)`,
                    showStackTrace: undefined
                }
            ]
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
