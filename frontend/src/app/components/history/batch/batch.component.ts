import { Component, OnInit, Input } from '@angular/core';
import { TestMethod } from '../../test-method';
import { BatchResult } from '../../batch-result';

@Component({
    selector: 'app-batch',
    templateUrl: './batch.component.html',
    styleUrls: []
})
export class BatchComponent implements OnInit {

    @Input() batch: BatchResult;

    showDetails = false;

    constructor() {}

    ngOnInit() {}

    toggleDetails() {
        this.showDetails = !this.showDetails;
    }

    toggleStackTrace(index: number) {
        this.batch.tests[index].showStackTrace = !this.batch.tests[index].showStackTrace;
    }
}
