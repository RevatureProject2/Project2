import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test-service.service';
import { HttpService } from '../services/http.service';
import { BatchResult } from '../batch-result';
import { Response } from '@angular/http';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

    // batches: BatchResult[] = [
    //     {
    //         status: 0,
    //         tests: [
    //             {
    //                 BatchID: 1,
    //                 recordID: 1,
    //                 InitiatedBy: 'default',
    //                 name: 'logOutLeavesPage',
    //                 signature: 'logOutLeavesPage()[somehexvalue]',
    //                 duration_ms: 2839,
    //                 startTime: new Date(),
    //                 finishTime: new Date(),
    //                 status: 0,
    //                 exceptionClass: 'AssertionError',
    //                 exceptionMessage: 'Did not leave page',
    //                 stackTrace: `Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 10
    //                 at neural.network.quantum.Cognition.Matrix(Lambda.java:23367)
    //                 at neural.network.Cognition.Matrix(Calculus.java:6279)
    //                 at neural.network.Activation.calculateBiases(NeuralNode.java:6279)
    //                 at neural.network.Activation.calculateWeights(NeuralNode.java:3293)
    //                 at neural.network.Activation.backPropagation(NeuralNode.java:3341)
    //                     at cognition.start.Cognition.main(CognitionInit.java:42)`,
    //                 showStackTrace: undefined
    //             }
    //         ]
    //     }
    // ];
    constructor(private testService: TestService, private httpService: HttpService) {}

    /**
     * Loads all the batches run in history
     */
    loadHistoricalData() {
        this.httpService.getTestData('/api/batches').subscribe(
            (response: Response) => console.log(response),
            (error) => console.error(error)
        );
    }

    ngOnInit() {
        // if (this.testService.batchResults) {
        //     this.batches.push(this.testService.batchResults);
        // }
        this.loadHistoricalData();
    }

}
