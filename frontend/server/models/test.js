module.exports = class Test {
    constructor(props) {
        this.recordID = props.recordID || null;//sequence generated
        this.BatchID = props.BatchID || null; //generated, shared by test group
        this.InitiatedBy = props.InitiatedBy || null;
        this.status = props.status || 0;
        this.signature = props.signature || null;
        this.name = props.name || null;
        this.duration_ms = props.duration_ms || 0;
        this.startTime = props.startTime || null;
        this.finishTime = props.finishTime || null;
        this.exceptionClass = props.exceptionClass || null;
        this.exceptionMessage = props.exceptionMessage || null;
        this.stackTrace = props.stackTrace || null;
    }
}