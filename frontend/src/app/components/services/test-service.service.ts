import { Injectable } from '@angular/core';
import { BatchResult } from '../batch-result';

/**
 * Holds batch result data so it can be passed from route to route
 */
@Injectable()
export class TestService {

    public batchResults: BatchResult;
    constructor() {}

}
