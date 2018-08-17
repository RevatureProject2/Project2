export enum Status {
    PASSED = 'Passed',
    FAILED = 'Failed',
    SKIPPED = 'Skipped'
}

/**
 * Expected type for all tests
 * Exception and stack trace have option to be null as they might not exist
 * showStackTrace should be undefined unless otherwise set by user to toggle
 * display on test result table in testNG component
 */
export interface TestMethod {
    recordID: number;
    BatchID: number;
    InitiatedBy: string;
    status: number;
    signature: string;
    name: string;
    duration_ms: number;
    startTime: Date;
    finishTime: Date;
    exceptionClass: string | null;
    exceptionMessage: string | null;
    stackTrace: string | null;
    showStackTrace: boolean | undefined;
}

