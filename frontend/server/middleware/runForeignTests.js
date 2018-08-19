const fs = require('fs');
const convert = require('xml-js');

const Test = require('../models/test');
const runCommand = require('../utils/runCommand');
const { pathToTestOutputXML } = require('../constants');

module.exports = function testFunction() {
    return new Promise(async (resolve, reject) => {
        try {
            await runCommand("/usr/apache/apache-maven-3.5.4/bin/mvn test");
        } catch (err) {
            // Silence chrome headless error
        }
    
        try {
            const xml = fs.readFileSync(pathToTestOutputXML, 'utf8');
            const result1 = convert.xml2json(xml, {compact: true, spaces: 2});
            const tests = [];
            const jsonOfTestResult = JSON.parse(result1)
            
            const testData = jsonOfTestResult["testng-results"]["suite"]["test"]["class"]["test-method"];
            let suitePassed = true;

            for (let test of testData) {
                let status;
                switch(test["_attributes"].status) {
                    case "PASS":
                        status = 1;
                        break;
                    case "FAIL":
                        status = 0;
                        break;
                    case "SKIP":
                        status = 2;
                        break;
                    default:
                        status = -1;
                        break;
                }                

                if (status === -1) {
                    console.error(`Unexpected Value in status ${test["_attributes"].status}`);
                }

                const currentTest = new Test({
                    recordID: null,
                    BatchID: null,
                    InitiatedBy: "default",
                    status,
                    signature: test["_attributes"].signature,
                    name: test["_attributes"].name,
                    duration_ms: parseInt(test["_attributes"]["duration-ms"]),
                    startTime: test["_attributes"]["started-at"],
                    finishTime: test["_attributes"]["finished-at"],
                });
    
                if (status === 0) {
                    suitePassed = false;
                    currentTest.exceptionClass = test.exception["_attributes"].class;
                    currentTest.exceptionMessage = test.exception.message._cdata;
                    currentTest.stackTrace = test.exception["full-stacktrace"]._cdata;
                }
    
                tests.push(currentTest);
            }
        
            resolve({
                status: suitePassed ? 1 : 0,
                tests,
            });
            return;
        } catch (err) {
            reject("Error parsing" + err);
            return;
        }
    });
};
